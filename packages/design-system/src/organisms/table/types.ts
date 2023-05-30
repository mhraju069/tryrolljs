import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import type { ViewStyle, StyleProp } from 'react-native'
import type { FiltersProps } from '../../molecules'

export interface TableProps<T extends any, F extends string> {
  columns: ColumnDef<T>[]
  data: T[]
  pagination?: {
    totalCount: number
    pageCount: number
    pageSize: number
    onChange: (paginationState: PaginationState) => void
  }
  style?: StyleProp<ViewStyle>
  loading?: boolean
  filter?: FiltersProps<F>
  search?: {
    value: string
    onChange: (value: string) => void
    placeholder?: string
  }
}
