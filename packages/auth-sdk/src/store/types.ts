export type Matcher<T> = string | ((item: T) => boolean)
export type Entity = { id: string }

export interface Store {
  create<T extends Entity>(namespace: string, iitem: T): Promise<T>
  findOne<T extends Entity>(
    namespace: string,
    matcher: Matcher<T>,
  ): Promise<T | undefined>
  find<T extends Entity>(namespace: string, matcher?: Matcher<T>): Promise<T[]>
  update<T extends Entity>(
    namespace: string,
    item: Entity & Partial<T>,
  ): Promise<T | undefined>
  delete(namespace: string, matcher: string): Promise<boolean>
  count<T extends Entity>(
    namespace: string,
    matcher?: Matcher<T>,
  ): Promise<number>
}
