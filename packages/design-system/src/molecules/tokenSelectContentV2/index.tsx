import { Divider, Pressable } from '@gluestack-ui/react'
import { FlatList, View } from 'react-native'
import { useEffect, useMemo, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import { Icon, Spinner, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'
import { InputV2 } from '..'
import { isAddress } from '../../utils'

import {
  TokenSelectOptionV2,
  TokenSelectOptionV2Type,
} from '../../atoms/tokenSelectOptionV2'

const TOKEN_SELECT_CONTENT_HEIGHT = 552
const TOKEN_SELECT_CONTENT_WIDTH = 380

export interface TokenSelectContentV2Props {
  defaultValue?: string
  closable?: boolean
  options: TokenSelectOptionV2Type[]
  label?: string
  placeholder?: string
  searchPlaceholder?: string
  notFoundText?: string
  onChange: (value: string) => void
  onClose?: () => void
  isLoading?: boolean
  /**
   * @deprecated use onSearchSymbol and onSearchContract instead
   */
  onSearch?: (value: string) => void
  onSearchSymbol?: (value: string) => void
  onSearchContract?: (value: string) => void
}
export const TokenSelectContentV2: React.FC<TokenSelectContentV2Props> = ({
  options,
  closable = false,
  label = 'Search name or paste contract address',
  placeholder = 'Select a token',
  searchPlaceholder = 'Search name or paste address',
  notFoundText = 'No results found',
  isLoading = false,
  onChange,
  onClose,
  onSearch,
  onSearchContract,
  onSearchSymbol,
}) => {
  const theme = useThemeV2()
  const [searchInputValue, setSearchInputValue] = useState('')

  const debouncedSearch = useRef(
    debounce((value: string, run: boolean) => {
      if (run && value) {
        if (isAddress(value)) {
          onSearchContract?.(value)
        } else {
          onSearchSymbol?.(value)
        }
      }
    }, 800),
  ).current

  const filteredOptions = useMemo(
    () =>
      options.filter(
        (option) =>
          option.symbol
            .toLowerCase()
            .includes(searchInputValue.toLowerCase()) ||
          option.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
          option.address.toLowerCase().includes(searchInputValue.toLowerCase()),
      ),
    [options, searchInputValue],
  )

  const isEmpty = filteredOptions.length === 0

  // TODO: Remove this once onSearch is removed in favor of onSearchSymbol and onSearchContract
  useEffect(() => {
    if (
      isAddress(searchInputValue) &&
      isEmpty &&
      !onSearchContract &&
      !onSearchSymbol
    ) {
      onSearch?.(searchInputValue)
    }
  }, [onSearch, searchInputValue, isEmpty, onSearchContract, onSearchSymbol])

  useEffect(() => {
    debouncedSearch(searchInputValue, isEmpty)
  }, [isEmpty, searchInputValue, debouncedSearch])

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  return (
    <View
      style={[
        padding.pv24,
        container.fullWidth,
        container.flex1,
        container.borderRadius2XL,
        {
          backgroundColor: theme.background.white,
          maxHeight: TOKEN_SELECT_CONTENT_HEIGHT,
          maxWidth: TOKEN_SELECT_CONTENT_WIDTH,
        },
      ]}
    >
      <View
        style={[
          padding.ph24,
          container.row,
          container.justifySpaceBetween,
          container.alignStart,
        ]}
      >
        <TypographyV2
          variant="sub3"
          style={margin.mb16}
          color={theme.text.black[100]}
        >
          {placeholder}
        </TypographyV2>
        {closable && (
          <Pressable onPress={onClose} testID="tokenSelectCloseButton">
            <Icon variant="close" />
          </Pressable>
        )}
      </View>
      <View style={[padding.ph24]}>
        <InputV2
          label={label}
          value={searchInputValue}
          onChangeText={setSearchInputValue}
          placeholder={searchPlaceholder}
          testID="tokenSelectSearchInput"
        />
      </View>
      <Divider
        style={[margin.mv24, { backgroundColor: theme.background.silver }]}
      />
      <View style={[padding.ph24, container.flex1]}>
        {isLoading && <Spinner size="large" />}
        {!isLoading && !isEmpty && (
          <FlatList
            data={filteredOptions}
            scrollEnabled
            renderItem={({ item: option }) => (
              <TokenSelectOptionV2
                {...option}
                onClose={onClose}
                onChange={onChange}
              />
            )}
          />
        )}
        {!isLoading && isEmpty && (
          <View style={container.alignCenter} testID="notFoundText">
            <TypographyV2 variant="text3" color={theme.text.black[80]}>
              {notFoundText}
            </TypographyV2>
          </View>
        )}
      </View>
    </View>
  )
}
