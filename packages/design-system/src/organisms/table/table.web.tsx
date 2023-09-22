import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  PaginationState,
} from '@tanstack/react-table'
import { View } from 'react-native'
import { useState, useMemo, useEffect } from 'react'
import { Pagination, InputV2 } from '../../molecules'
import { container, margin, padding, spacing } from '../../styles'
import { useThemeV2 } from '../../hooks'
import { Spinner } from '../../atoms'
import { type TableProps } from './types'
import TableFilter from './table-filter'

const styles = {
  container: {
    borderRadius: 16,
  },
  head: {
    textAlign: 'center',
  },
  cell: {
    paddingTop: spacing[16],
    paddingBottom: spacing[16],
  },
}

const getTextAlign = (index: number) => {
  if (index === 0) {
    return 'left'
  }

  return 'center'
}

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
      {(filter || search) && (
        <View
          style={[
            container.row,
            container.justifySpaceBetween,
            container.alignEnd,
            container.flexWrap,
          ]}
        >
          <View style={margin.mb12}>
            {search && (
              <InputV2
                placeholder={search.placeholder}
                value={search.value}
                onChangeText={search.onChange}
                label={search.label ?? 'Search'}
              />
            )}
          </View>
          <View style={margin.mb12}>
            <TableFilter filter={filter} />
          </View>
        </View>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <th
                      key={header.id}
                      style={{
                        ...styles.head,
                        ...styles.cell,
                        textAlign: getTextAlign(index),
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {rowModel.rows.map((row) => {
                const visibleCells = row.getVisibleCells()
                return (
                  <tr
                    key={row.id}
                    style={{
                      boxShadow: `0 1px 1px ${theme.background.silver}`,
                    }}
                  >
                    {visibleCells.map((cell, index) => (
                      <td
                        key={cell.id}
                        style={{
                          ...styles.cell,
                          textAlign: getTextAlign(index),
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>

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
