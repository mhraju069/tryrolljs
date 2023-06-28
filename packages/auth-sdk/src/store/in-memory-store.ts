import { Entity, Matcher, Store } from './types'
import { doesItemMatch } from './utils'

class InMemoryStore implements Store {
  private data: Record<string, Record<string, any>> = {}

  async create<T extends Entity>(namespace: string, item: T): Promise<T> {
    const namespaceData = this.getNamespaceData<T>(namespace)

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
    this.data[namespace] = namespaceData
    return item
  }

  async findOne<T extends Entity>(
    namespace: string,
    matcher: Matcher<T>,
  ): Promise<T | undefined> {
    const namespaceData = this.getNamespaceData<T>(namespace)

    const items = Object.values(namespaceData) as T[]

    return items.find((item) => doesItemMatch(item as T, matcher))
  }

  async update<T extends Entity>(
    namespace: string,
    item: Entity & Partial<T>,
  ): Promise<T | undefined> {
    const namespaceData = this.getNamespaceData<T>(namespace)
    if (!namespaceData[item.id]) {
      return undefined
    }
    const existingItem = namespaceData[item.id]
    const updatedItem = { ...existingItem, ...item }
    namespaceData[item.id] = updatedItem
    return updatedItem
  }

  async delete(namespace: string, id: string): Promise<boolean> {
    const namespaceData = this.getNamespaceData(namespace)
    if (!namespaceData[id]) {
      return false
    }
    delete namespaceData[id]
    return true
  }

  async count(namespace: string): Promise<number> {
    const namespaceData = this.getNamespaceData(namespace)

    return Object.keys(namespaceData).length
  }

  async find<T extends Entity>(
    namespace: string,
    matcher?: Matcher<T>,
  ): Promise<T[]> {
    const namespaceData = this.getNamespaceData<T>(namespace)

    const items = Object.values(namespaceData)
    if (matcher) {
      return items.filter((item) => doesItemMatch(item, matcher))
    }

    return items
  }

  private getNamespaceData = <T>(namespace: string) => {
    return (this.data[namespace] ?? {}) as Record<string, T>
  }
}

export default InMemoryStore
