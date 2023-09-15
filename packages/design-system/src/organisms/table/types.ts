import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import type { ViewStyle, StyleProp } from 'react-native'
import type { ButtonFiltersProps, SelectFiltersProps } from '../../molecules'

export enum TableFilterType {
  Button,
  Select,
}

export interface TableProps<T extends any, F extends string> {
  columns: ColumnDef<T, any>[]
  data: T[]
  pagination?: {
    totalCount: number
    pageCount: number
    pageSize: number
    onChange: (paginationState: PaginationState) => void
  }
  style?: StyleProp<ViewStyle>
  loading?: boolean
  filter?:
    | (ButtonFiltersProps<F> & { type: TableFilterType.Button })
    | (SelectFiltersProps & { type: TableFilterType.Select })
  search?: {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    label?: string
  }
}
