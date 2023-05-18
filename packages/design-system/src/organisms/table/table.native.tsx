import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  PaginationState,
} from '@tanstack/react-table'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useState, useMemo, useEffect } from 'react'
import { Pagination, Filters, InputV2 } from '../../molecules'
import { container, margin, padding, spacing } from '../../styles'
import { useThemeV2 } from '../../hooks'
import { Spinner } from '../../atoms'
import type { TableProps } from './types'

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
  },
  cell: {
    paddingTop: spacing[16],
    paddingBottom: spacing[16],
    paddingRight: spacing[8],
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    borderBottomWidth: 1,
  },
  scrollView: {
    flexDirection: 'column',
  },
})

const Table = <T extends any, F extends string>({
  columns,
  data,
  pagination: paginationProp,
  style,
  loading,
  filter,
  search,
}: TableProps<T, F>) => {
  const theme = useThemeV2()
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: paginationProp?.pageSize ?? 0,
  })
  const paginationState = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  )

  useEffect(() => {
    paginationProp?.onChange(paginationState)
  }, [paginationState, paginationProp])

  const paginationProps = paginationProp
    ? {
        manualPagination: true,
        pagination: paginationState,
        onPaginationChange: setPagination,
        pageCount: paginationProp.pageCount,
      }
    : {}

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...paginationProps,
  })
  const rowModel = table.getRowModel()

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background.white },
        padding.pv24,
        padding.ph16,
        style,
      ]}
    >
      {filter && (
        <View style={margin.mb12}>
          <View style={margin.mb12}>
            {search && (
              <InputV2
                placeholder={search.placeholder}
                value={search.value}
                onChangeText={search.onChange}
              />
            )}
          </View>
          {filter && <Filters {...filter} />}
        </View>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ScrollView>
            <View style={container.flex1}>
              {table.getHeaderGroups().map((headerGroup) => (
                <View key={headerGroup.id} style={container.row}>
                  {headerGroup.headers.map((header) => (
                    <View
                      key={header.id}
                      style={[styles.cell, container.flex1]}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </View>
                  ))}
                </View>
              ))}
            </View>
            <View style={container.flex1}>
              {rowModel.rows.map((row) => {
                const visibleCells = row.getVisibleCells()
                return (
                  <View
                    key={row.id}
                    style={[
                      container.row,
                      styles.row,
                      {
                        borderBottomColor: theme.background.silver,
                      },
                    ]}
                  >
                    {visibleCells.map((cell) => (
                      <View
                        key={cell.id}
                        style={[styles.cell, container.flex1]}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </View>
                    ))}
                  </View>
                )
              })}
            </View>
            <View>
              {table.getFooterGroups().map((footerGroup) => (
                <View key={footerGroup.id} style={container.row}>
                  {footerGroup.headers.map((header) => (
                    <View
                      key={header.id}
                      style={[styles.cell, container.flex1]}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>

          {paginationProp && (
            <Pagination
              pageCount={paginationProp.pageCount}
              totalCount={paginationProp.totalCount}
              pageIndex={paginationState.pageIndex}
              pageSize={paginationState.pageSize}
              onNext={table.nextPage}
              onPrev={table.previousPage}
            />
          )}
        </>
      )}
    </View>
  )
}

export default Table
