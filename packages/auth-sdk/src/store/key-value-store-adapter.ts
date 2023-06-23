import { Entity, Matcher, Store } from './types'
import { doesItemMatch } from './utils'

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

  async create<T extends Entity>(namespace: string, item: T) {
    const data = await this.getData()
    const namespaceData = data[namespace] || {}

    if (!item.id) {
      throw new Error(`Item should have an id property.`)
    }

    if (!(item.id in namespaceData)) {
      namespaceData[item.id as keyof typeof namespaceData] = item
    } else {
      throw new Error(
        `Item with id ${item.id} already exists in namespace ${namespace}`,
      )
    }
    data[namespace] = namespaceData

    await this.setData(data)

    return item
  }

  async findOne<T extends Entity>(
    namespace: string,
    matcher: Matcher<T>,
  ): Promise<T | undefined> {
    const data = await this.getData()
    const namespaceData = data[namespace]
    if (!namespaceData) {
      return undefined
    }

    const items = Object.values(namespaceData) as T[]
    return items.find((item) => doesItemMatch(item as T, matcher))
  }

  async update<T extends Entity>(
    namespace: string,
    item: Entity & Partial<T>,
  ): Promise<T | undefined> {
    const data = await this.getData()
    const namespaceData = data[namespace]
    if (!namespaceData || !namespaceData[item.id]) {
      return undefined
    }
    const existingItem = namespaceData[item.id]

    const updatedItem = { ...existingItem, ...item }
    namespaceData[item.id] = updatedItem
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

  async find<T extends Entity>(
    namespace: string,
    matcher?: Matcher<T>,
  ): Promise<T[]> {
    const data = await this.getData()
    const namespaceData = data[namespace]
    if (!namespaceData) {
      return []
    }

    const items = Object.values(namespaceData) as T[]

    if (matcher) {
      return items.filter((item) => doesItemMatch(item, matcher))
    }

    return items
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
