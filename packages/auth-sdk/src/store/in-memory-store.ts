import { Store } from './types'

class InMemoryStore implements Store {
  private data: Record<string, Record<string, any>> = {}

  create<T extends object>(namespace: string, item: T): Promise<T> {
    const namespaceData = this.data[namespace] || {}
    const id = 'id' in item && typeof item.id === 'string' ? item.id : undefined

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
    this.data[namespace] = namespaceData
    return Promise.resolve(item)
  }

  read<T extends object>(
    namespace: string,
    id: string,
  ): Promise<T | undefined> {
    const namespaceData = this.data[namespace]
    const item = namespaceData ? namespaceData[id] : undefined
    return Promise.resolve(item)
  }

  update<T extends object>(
    namespace: string,
    id: string,
    item: Partial<T>,
  ): Promise<T | undefined> {
    const namespaceData = this.data[namespace]
    if (!namespaceData || !namespaceData[id]) {
      return Promise.resolve(undefined)
    }
    const existingItem = namespaceData[id]
    const updatedItem = { ...existingItem, ...item }
    namespaceData[id] = updatedItem
    return Promise.resolve(updatedItem)
  }

  delete(namespace: string, id: string): Promise<boolean> {
    const namespaceData = this.data[namespace]
    if (!namespaceData || !namespaceData[id]) {
      return Promise.resolve(false)
    }
    delete namespaceData[id]
    return Promise.resolve(true)
  }

  count(namespace: string): Promise<number> {
    const namespaceData = this.data[namespace]
    if (!namespaceData) {
      return Promise.resolve(0)
    }

    return Promise.resolve(Object.keys(namespaceData).length)
  }

  readAll<T extends object>(namespace: string): Promise<T[]> {
    const namespaceData = this.data[namespace]
    if (!namespaceData) {
      return Promise.resolve([])
    }

    return Promise.resolve(Object.values(namespaceData))
  }
}

export default InMemoryStore
