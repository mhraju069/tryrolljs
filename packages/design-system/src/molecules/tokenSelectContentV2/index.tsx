import { Divider, Pressable } from 'native-base'
import { FlatList, StyleSheet, View } from 'react-native'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CircleImg, Icon, Spinner, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'
import { InputV2 } from '..'
import { isAddress } from '../../utils'

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

export type TokenSelectOptionV2 = {
  name: string
  symbol: string
  logo?: string
  value: string
  address: string
}

interface TokenSelectOptionProps extends TokenSelectOptionV2 {
  onChange?: (value: string) => void
  onClose?: () => void
}

export const TokenSelectOptionV2: React.FC<TokenSelectOptionProps> = ({
  value,
  name,
  symbol,
  logo,
  onChange,
  onClose,
}) => {
  const theme = useThemeV2()
  const handlePressOption = useCallback(() => {
    onChange?.(value)
    onClose?.()
  }, [onChange, value, onClose])
  return (
    <Pressable
      key={value}
      style={[
        container.row,
        container.justifySpaceBetween,
        container.fullWidth,
        container.alignCenter,
        padding.p8,
      ]}
      onPress={handlePressOption}
      testID={`tokenSelectOption__${value}`}
    >
      <View style={[container.row, container.alignCenter]}>
        <CircleImg size={32} uri={logo} />
        <TypographyV2
          variant="caption1"
          style={margin.ml16}
          color={theme.text.black[100]}
        >
          {symbol}
        </TypographyV2>
      </View>
      <TypographyV2 variant="text3" color={theme.text.black[80]}>
        {name}
      </TypographyV2>
    </Pressable>
  )
}

export interface TokenSelectContentV2Props {
  defaultValue?: string
  withCloseIcon?: boolean
  options: TokenSelectOptionV2[]
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
  withCloseIcon = false,
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
          option.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
          option.address.toLowerCase().includes(searchInputValue.toLowerCase()),
      ),
    [options, searchInputValue],
  )

  useEffect(() => {
    if (isAddress(searchInputValue) && filteredOptions.length === 0) {
      searchToken?.(searchInputValue)
    }
  }, [searchToken, searchInputValue, filteredOptions])

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
          {withCloseIcon && (
            <Pressable onPress={onClose}>
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
          {!isLoading && filteredOptions.length > 0 && (
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
          {!isLoading && filteredOptions.length === 0 && (
            <View style={container.alignCenter}>
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
