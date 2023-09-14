import { PaginationState, createColumnHelper } from '@tanstack/react-table'
import { action } from '@storybook/addon-actions'
import { useMemo, useState } from 'react'
import { ScrollView } from 'react-native'
import { ButtonV2, TokenChip, TypographyV2 } from '../../atoms'
import { ButtonFilterOption } from '../../molecules'
import Table from './table'
import { TableFilterType } from './types'

const storyConfig = {
  title: 'Design System/Organisms/Table',
  component: Table,
}

interface Token {
  uuid: string
  logo: string
  price: number
  symbol: string
}

const DATA: Token[] = [...Array(10)].map((_, index) => ({
  uuid: index.toString(),
  logo: '',
  price: (index + 1) * 10,
  symbol: 'TOKEN' + index,
}))

const columnHelper = createColumnHelper<Token>()

// @ts-ignore
const columns = [
  columnHelper.accessor('logo', {
    header: () => <TypographyV2 variant="text3">Social Token</TypographyV2>,
    cell: (info) => (
      <TokenChip symbol={info.row.original.symbol} logo={info.getValue()} />
    ),
  }),
  columnHelper.accessor('price', {
    id: 'price',
    header: () => <TypographyV2 variant="text3">Price</TypographyV2>,
    cell: (info) => {
      return <TypographyV2 variant="text3">{info.getValue()}</TypographyV2>
    },
  }),
  columnHelper.accessor('uuid', {
    header: () => <TypographyV2 variant="text3">Trade</TypographyV2>,
    cell: () => {
      return (
        <ButtonV2
          variant="icon"
          iconVariant="arrangeCircle"
          title="Trade"
          size="small"
          onPress={action('Trade button press')}
        />
      )
    },
  }),
]

// @ts-ignore
export const Default = () => <Table data={DATA} columns={columns} />
// @ts-ignore
export const Loading = () => <Table data={DATA} columns={columns} loading />

enum FilterValue {
  AllAssets = 'allassets',
  Tradeable = 'tradeable',
  NewOnRoll = 'newonroll',
}

const FILTER_OPTIONS = [
  {
    title: 'All Assets',
    value: FilterValue.AllAssets,
  },
  {
    title: 'Tradeable',
    value: FilterValue.Tradeable,
  },
  {
    title: 'New on Roll',
    value: FilterValue.NewOnRoll,
  },
]

const useData = (queryParams: Record<string, string | number | undefined>) => {
  return useMemo(() => {
    const data = DATA.filter((token) => {
      if (typeof queryParams.search === 'string') {
        return token.symbol.includes(queryParams.search)
      }

      return true
    })
    return data
  }, [queryParams])
}

export const WithFiltersAndPagination = () => {
  const [filterValue, setFilterValue] = useState(FilterValue.AllAssets)
  const [searchValue, setSearchValue] = useState('')
  const [dataQueryParams, setDataQueryParams] = useState<
    Record<string, string | number | undefined>
  >({})

  const data = useData(dataQueryParams)

  const setDataQueryParamsOnSearch = useMemo(
    () => (value: string) => {
      setDataQueryParams((prevDataQueryParams) => ({
        ...prevDataQueryParams,
        search: value,
      }))
    },
    [],
  )

  const search = useMemo(() => {
    return {
      value: searchValue,
      onChange: (value: string) => {
        setSearchValue(value)
        setDataQueryParamsOnSearch(value)
      },
    }
  }, [searchValue, setDataQueryParamsOnSearch])

  const filter = useMemo(() => {
    return {
      type: TableFilterType.Button as const,
      value: filterValue,
      options: FILTER_OPTIONS,
      onChange: (filterOption: ButtonFilterOption<FilterValue>) => {
        setFilterValue(filterOption.value)
        setDataQueryParams({
          filter: filterOption.value,
          search: searchValue ? searchValue : undefined,
          offset: 0,
        })
      },
    }
  }, [filterValue, searchValue])

  const pagination = useMemo(() => {
    const pageSize = 10
    return {
      pageCount: 5,
      pageSize,
      totalCount: 50,
      onChange: (paginationState: PaginationState) => {
        setDataQueryParams((prevTokenMarketArgs) => ({
          ...prevTokenMarketArgs,
          offset: paginationState.pageIndex * pageSize,
        }))
      },
    }
  }, [])

  return (
    <ScrollView>
      <Table
        data={data}
        // @ts-ignore
        columns={columns}
        search={search}
        filter={filter}
        pagination={pagination}
      />
    </ScrollView>
  )
}

enum SelectFilterTitle {
  Category = 'Category',
  Date = 'Date',
}

enum CategoryFilterOptionValue {
  AllCategories = 'allcategories',
  Send = 'send',
  Receive = 'receive',
  Earn = 'earn',
  Reward = 'reward',
}

enum DateFilterOptionValue {
  Past1Year = 'past1year',
  Past7Days = 'past7days',
  Past30Days = 'past30days',
  Past90Days = 'past90days',
  AllTime = 'alltime',
}

const CATEGORY_FILTER_OPTION_TITLE_BY_VALUE: Record<
  CategoryFilterOptionValue,
  string
> = {
  [CategoryFilterOptionValue.AllCategories]: 'All Categories',
  [CategoryFilterOptionValue.Send]: 'Send',
  [CategoryFilterOptionValue.Receive]: 'Receive',
  [CategoryFilterOptionValue.Earn]: 'Earn',
  [CategoryFilterOptionValue.Reward]: 'Reward',
}

const DATE_FILTER_OPTION_TITLE_BY_VALUE: Record<DateFilterOptionValue, string> =
  {
    [DateFilterOptionValue.Past1Year]: 'Past 1 Year',
    [DateFilterOptionValue.Past7Days]: 'Past 7 Days',
    [DateFilterOptionValue.Past30Days]: 'Past 30 Days',
    [DateFilterOptionValue.Past90Days]: 'Past 90 Days',
    [DateFilterOptionValue.AllTime]: 'All Time',
  }

export const WithSelectFiltersAndPagination = () => {
  const [filterValuesByTitle, setFilterValuesByTitle] = useState({
    [SelectFilterTitle.Category]: CategoryFilterOptionValue.AllCategories,
    [SelectFilterTitle.Date]: DateFilterOptionValue.Past1Year,
  })
  const [searchValue, setSearchValue] = useState('')
  const [dataQueryParams, setDataQueryParams] = useState<
    Record<string, string | number | undefined>
  >({})

  const data = useData(dataQueryParams)

  const setDataQueryParamsOnSearch = useMemo(
    () => (value: string) => {
      setDataQueryParams((prevDataQueryParams) => ({
        ...prevDataQueryParams,
        search: value,
      }))
    },
    [],
  )

  const search = useMemo(() => {
    return {
      value: searchValue,
      onChange: (value: string) => {
        setSearchValue(value)
        setDataQueryParamsOnSearch(value)
      },
    }
  }, [searchValue, setDataQueryParamsOnSearch])

  const filter = useMemo(() => {
    return {
      type: TableFilterType.Select as const,
      options: [
        {
          title: SelectFilterTitle.Category,
          value: filterValuesByTitle[SelectFilterTitle.Category],
          options: [
            {
              name: CATEGORY_FILTER_OPTION_TITLE_BY_VALUE[
                CategoryFilterOptionValue.AllCategories
              ],
              value: CategoryFilterOptionValue.AllCategories,
            },
            {
              name: CATEGORY_FILTER_OPTION_TITLE_BY_VALUE[
                CategoryFilterOptionValue.Send
              ],
              value: CategoryFilterOptionValue.Send,
            },
            {
              name: CATEGORY_FILTER_OPTION_TITLE_BY_VALUE[
                CategoryFilterOptionValue.Receive
              ],
              value: CategoryFilterOptionValue.Receive,
            },
            {
              name: CATEGORY_FILTER_OPTION_TITLE_BY_VALUE[
                CategoryFilterOptionValue.Earn
              ],
              value: CategoryFilterOptionValue.Earn,
            },
            {
              name: CATEGORY_FILTER_OPTION_TITLE_BY_VALUE[
                CategoryFilterOptionValue.Reward
              ],
              value: CategoryFilterOptionValue.Reward,
            },
          ],

          onChange: (value: string) => {
            setFilterValuesByTitle((prevFilterValuesByTitle) => ({
              ...prevFilterValuesByTitle,
              [SelectFilterTitle.Category]: value as CategoryFilterOptionValue,
            }))
            setDataQueryParams((prevDataQueryParams) => ({
              ...prevDataQueryParams,
              category: value,
            }))
          },
        },
        {
          title: SelectFilterTitle.Date,
          value: filterValuesByTitle[SelectFilterTitle.Date],
          options: [
            {
              name: DATE_FILTER_OPTION_TITLE_BY_VALUE[
                DateFilterOptionValue.Past1Year
              ],
              value: DateFilterOptionValue.Past1Year,
            },
            {
              name: DATE_FILTER_OPTION_TITLE_BY_VALUE[
                DateFilterOptionValue.Past7Days
              ],
              value: DateFilterOptionValue.Past7Days,
            },
            {
              name: DATE_FILTER_OPTION_TITLE_BY_VALUE[
                DateFilterOptionValue.Past30Days
              ],
              value: DateFilterOptionValue.Past30Days,
            },
            {
              name: DATE_FILTER_OPTION_TITLE_BY_VALUE[
                DateFilterOptionValue.Past90Days
              ],
              value: DateFilterOptionValue.Past90Days,
            },
            {
              name: DATE_FILTER_OPTION_TITLE_BY_VALUE[
                DateFilterOptionValue.AllTime
              ],
              value: DateFilterOptionValue.AllTime,
            },
          ],
          onChange: (value: string) => {
            setFilterValuesByTitle((prevFilterValuesByTitle) => ({
              ...prevFilterValuesByTitle,
              [SelectFilterTitle.Date]: value as DateFilterOptionValue,
            }))
            setDataQueryParams((prevDataQueryParams) => ({
              ...prevDataQueryParams,
              date: value,
            }))
          },
        },
      ],
    }
  }, [filterValuesByTitle])

  const pagination = useMemo(() => {
    const pageSize = 10
    return {
      pageCount: 5,
      pageSize,
      totalCount: 50,
      onChange: (paginationState: PaginationState) => {
        setDataQueryParams((prevTokenMarketArgs) => ({
          ...prevTokenMarketArgs,
          offset: paginationState.pageIndex * pageSize,
        }))
      },
    }
  }, [])

  return (
    <ScrollView>
      <Table
        data={data}
        // @ts-ignore
        columns={columns}
        search={search}
        filter={filter}
        pagination={pagination}
      />
    </ScrollView>
  )
}

export default storyConfig
