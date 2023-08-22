import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { Pressable } from '@gluestack-ui/react'
import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { Icon, Popover, PopoverProps, Spinner, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, padding, text } from '../../styles'
import { InputV2 } from '../inputV2'

const styles = StyleSheet.create({
  popover: {
    borderRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    ...Platform.select({
      web: {
        width: 'max-content',
        overflow: 'hidden',
      },
      native: {
        elevation: 4,
      },
    }),
  },
  divider: {
    height: 1,
    width: '100%',
  },
  input: Platform.select({
    web: { cursor: 'pointer' },
    native: {},
  }) as any,
})

export type SelectV2Option = {
  name: string
  value: string
}

type SelectRenderReference = (
  props: Parameters<PopoverProps['renderReference']>[0] & { value?: string },
) => ReactNode

export interface SelectV2Props {
  placeholder?: string
  options: SelectV2Option[]
  defaultValue?: string
  onChange?: (value: string) => void
  onSearchChange?: (value: string) => void
  renderReference?: SelectRenderReference
  search?: boolean
  loading?: boolean
}

export const SelectV2: React.FC<SelectV2Props> = ({
  options = [],
  renderReference,
  onChange,
  onSearchChange,
  defaultValue,
  placeholder,
  search = false,
  loading = false,
}) => {
  const theme = useThemeV2()
  const inputRef = useRef<TextInput>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const [searchValue, setSearchValue] = useState('')
  const selectedOption = options.find((option) => option.value === value)
  const selectedValue = selectedOption?.name
  const inputValue = selectedValue ? selectedValue : searchValue
  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    [options, searchValue],
  )

  const handleChangeText = useCallback(
    (newText: string) => {
      if (selectedOption) {
        // If option is selected and user is removing a char, clear the search
        const shouldClear =
          newText ===
          selectedOption.name.slice(0, selectedOption.name.length - 1)

        if (shouldClear) {
          setValue(undefined)
          setSearchValue('')
          onSearchChange?.('')
        }

        return
      }

      setSearchValue(newText)
      onSearchChange?.(newText)
    },
    [selectedOption, onSearchChange],
  )

  const handleOptionPress = useMemo(
    () =>
      Platform.select({
        native: () => {
          inputRef?.current?.blur()
          setIsOpen(false)
        },
        web: () => setIsOpen(false),
      }),
    [],
  )

  const defaultRenderReference: PopoverProps['renderReference'] = useCallback(
    ({ reference, getReferenceProps, onOpenChange, open }) => {
      const referenceProps = getReferenceProps()
      const inputProps = Platform.select({
        web: referenceProps,
        native: {
          onFocus: () => onOpenChange?.(true),
          onBlur: () => onOpenChange?.(false),
          onLayout: referenceProps.onLayout,
        },
      })

      return (
        <InputV2
          ref={(node) => {
            // @ts-ignore
            inputRef.current = node
            // @ts-ignore
            reference(node)
          }}
          testID="selectInput"
          onChangeText={handleChangeText}
          editable={search}
          value={inputValue}
          placeholder={placeholder}
          suffix={
            <Icon
              variant="arrowDown2"
              color={open ? theme.base.highlight1 : theme.text.black[100]}
            />
          }
          suffixContainerStyle={{ pointerEvents: 'none' } as any}
          style={[styles.input, inputProps?.style]}
          {...inputProps}
        />
      )
    },
    [theme, placeholder, inputValue, handleChangeText, search],
  )

  const customRenderReference: SelectRenderReference = useCallback(
    (props) => {
      if (renderReference) {
        return renderReference({ ...props, value: selectedValue })
      }
    },
    [renderReference, selectedValue],
  )

  const renderOptions = useCallback(() => {
    return filteredOptions.map((option, index) => (
      <Pressable
        key={option.value}
        onPress={() => {
          setValue(option.value)
          onChange?.(option.value)
          handleOptionPress?.()
        }}
        sx={{
          ':hover': {
            backgroundColor: theme.base.highlight2[10],
          },
          ':focusVisible': { backgroundColor: theme.base.highlight2[10] },
        }}
        testID={`selectOption__${option.value}`}
      >
        <TypographyV2
          variant="caption1"
          color={theme.text.black[100]}
          style={[padding.ph24, padding.pv12]}
        >
          {option.name}
        </TypographyV2>
        {index !== options.length - 1 && (
          <View
            style={[
              styles.divider,
              { backgroundColor: theme.background.silver },
            ]}
          />
        )}
      </Pressable>
    ))
  }, [filteredOptions, onChange, handleOptionPress, options, theme])

  const renderNoOptions = useCallback(
    () => (
      <View>
        <TypographyV2
          variant="caption1"
          style={[padding.ph24, padding.pv12, text.center]}
        >
          There are no options available
        </TypographyV2>
      </View>
    ),
    [],
  )

  const renderLoading = useCallback(
    () => (
      <View style={[container.center, padding.pv12]}>
        <Spinner color={theme.base.primary[100]} />
      </View>
    ),
    [theme],
  )

  const content = useMemo(() => {
    if (loading) {
      return renderLoading()
    }

    if (filteredOptions.length > 0) {
      return renderOptions()
    }

    return renderNoOptions()
  }, [renderOptions, renderNoOptions, renderLoading, filteredOptions, loading])

  return (
    <Popover
      open={isOpen}
      renderReference={
        renderReference ? customRenderReference : defaultRenderReference
      }
      openOnHover={false}
      onOpenChange={setIsOpen}
      matchReferenceWidth
      placement="bottom-end"
      style={styles.popover}
    >
      {content}
    </Popover>
  )
}
