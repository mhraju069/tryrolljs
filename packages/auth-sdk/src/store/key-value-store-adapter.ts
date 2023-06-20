import { Store } from './types'

export interface KeyValueStore {
  getItem: (key: string) => any | Promise<any> | null
  setItem: (key: string, value: string) => void | Promise<void>
  removeItem: (key: string) => void | Promise<void>
}

const DATA_KEY = 'rollauthsdk'

class KeyValueStoreAdapter implements Store {
  constructor(private readonly store: KeyValueStore) {
    this.store = store
  }

  async create<T extends object>(namespace: string, id: string, item: T) {
    const data = await this.getData()
    const namespaceData = data[namespace] || {}

    if (!id) {
      throw new Error(`Item should have an id property.`)
    }

    if (!(id in namespaceData)) {
      namespaceData[id as keyof typeof namespaceData] = item
    } else {
      throw new Error(
        `Item with id ${id} already exists in namespace ${namespace}`,
      )
    }
    data[namespace] = namespaceData

    await this.setData(data)

    return item
  }

  async read<T extends object>(
    namespace: string,
    id: string,
  ): Promise<T | undefined> {
    const data = await this.getData()
    const namespaceData = data[namespace]
    const item = namespaceData ? namespaceData[id] : undefined
    return item
  }

  async update<T extends object>(
    namespace: string,
    id: string,
    item: Partial<T>,
  ): Promise<T | undefined> {
    const data = await this.getData()
    const namespaceData = data[namespace]
    if (!namespaceData || !namespaceData[id]) {
      return undefined
    }
    const existingItem = namespaceData[id]

    const updatedItem = { ...existingItem, ...item }
    namespaceData[id] = updatedItem
    data[namespace] = namespaceData
    await this.setData(data)

    return updatedItem
  }

  async delete(namespace: string, id: string): Promise<boolean> {
    const data = await this.getData()
    const namespaceData = data[namespace]
    if (!namespaceData || !namespaceData[id]) {
      return Promise.resolve(false)
    }
    delete namespaceData[id]
    data[namespace] = namespaceData
    await this.setData(data)

    return true
  }

  async count(namespace: string): Promise<number> {
    const data = await this.getData()
    const namespaceData = data[namespace]
    if (!namespaceData) {
      return 0
    }

    return Object.keys(namespaceData).length
  }

  async readAll<T extends object>(namespace: string): Promise<T[]> {
    const data = await this.getData()
    const namespaceData = data[namespace]
    if (!namespaceData) {
      return []
    }

    return Object.values(namespaceData)
  }

  private setData = async (data: object) => {
    return await this.store.setItem(DATA_KEY, JSON.stringify(data))
  }

  private getData = async () => {
    try {
      return JSON.parse(await this.store.getItem(DATA_KEY)) ?? {}
    } catch (e) {
      return {}
    }
  }
}

export default KeyValueStoreAdapter
