export interface Store {
  create<T extends object>(namespace: string, item: T): Promise<T>
  read<T extends object>(namespace: string, id: string): Promise<T | undefined>
  readAll<T extends object>(namespace: string): Promise<T[]>
  update<T extends object>(
    namespace: string,
    id: string,
    item: Partial<T>,
  ): Promise<T | undefined>
  delete(namespace: string, id: string): Promise<boolean>
  count(namespace: string): Promise<number>
}
