import type { TableProps } from './types'

declare const Table: <T extends unknown, F extends string = string>(
  props: TableProps<T, F>,
) => JSX.Element

export default Table
