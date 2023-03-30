import { Divider, Pressable } from 'native-base'
import { FlatList, StyleSheet, View } from 'react-native'
import { useEffect, useMemo, useState } from 'react'
import { Icon, Spinner, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'
import { InputV2 } from '..'
import { isAddress } from '../../utils'
import {
  TokenSelectOptionV2,
  TokenSelectOptionV2Type,
} from '../../atoms/tokenSelectOptionV2'

const MODAL_BORDER_RADIUS = 16
const MODAL_MAX_WIDTH = 380
const MODAL_MAX_HEIGHT = 552

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: MODAL_BORDER_RADIUS,
    maxWidth: MODAL_MAX_WIDTH,
    maxHeight: MODAL_MAX_HEIGHT,
    overflow: 'hidden',
  },
})

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
  searchToken?: (value: string) => void
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
  searchToken,
}) => {
  const theme = useThemeV2()
  const [searchInputValue, setSearchInputValue] = useState('')

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

  const isEmpty = useMemo(() => filteredOptions.length === 0, [filteredOptions])

  useEffect(() => {
    if (isAddress(searchInputValue) && isEmpty) {
      searchToken?.(searchInputValue)
    }
  }, [searchToken, searchInputValue, isEmpty])

  return (
    <>
      <View
        style={[
          padding.pv24,
          styles.modalContainer,
          container.fullWidth,
          { backgroundColor: theme.background.white },
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
        <Divider style={[margin.mv24]} color={theme.background.silver} />
        <View style={[padding.ph24, container.flex1]}>
          {isLoading && <Spinner size="lg" />}
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
    </>
  )
}
