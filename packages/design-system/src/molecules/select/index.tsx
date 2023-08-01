import { Pressable, View } from 'native-base'
import { useCallback, useMemo, useRef, useState } from 'react'
import { Platform, StyleProp, TextInput, ViewStyle } from 'react-native'
import ArrowDownCircle from '../../assets/svg/arrowDownCircle.svg'
import { Body, Popover, Input, PopoverProps } from '../../atoms'
import { useTheme } from '../../hooks'
import { makeStyles, padding } from '../../styles'

export type SelectOption = {
  name: string
  value: string
}

export interface SelectProps {
  style?: StyleProp<ViewStyle>
  placeholder?: string
  options: SelectOption[]
  defaultValue?: string
  onChange?: (value: string) => void
}

const styles = makeStyles({ input: { cursor: 'pointer' } as any })

export const Select = ({
  style,
  placeholder,
  options = [],
  defaultValue,
  onChange,
}: SelectProps) => {
  const inputRef = useRef<TextInput>(null)
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const [searchValue, setSearchValue] = useState('')

  const selectedOption = options.find((option) => option.value === value)
  const inputValue = selectedOption ? selectedOption.name : searchValue

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const optionOnPress = useMemo(
    () =>
      Platform.select({
        native: () => inputRef?.current?.blur(),
        web: () => setIsOpen(false),
      }),
    [],
  )

  const handleChangeText = useCallback(
    (text: string) => {
      if (selectedOption) {
        const shouldClear =
          text === selectedOption.name.slice(0, selectedOption.name.length - 1)

        if (shouldClear) {
          setValue(undefined)
        }

        return
      }

      setSearchValue(text)
    },
    [selectedOption],
  )

  const renderReference: PopoverProps['renderReference'] = useCallback(
    ({ reference, getReferenceProps }) => {
      const referenceProps = getReferenceProps()
      const inputProps = Platform.select({
        web: referenceProps,
        native: {
          onFocus: () => setIsOpen(true),
          onBlur: () => setIsOpen(false),
          onLayout: referenceProps.onLayout,
        },
      })

      return (
        <Input
          // @ts-ignore
          ref={(node) => {
            // @ts-ignore
            inputRef.current = node
            // @ts-ignore
            reference(node)
          }}
          style={[styles.input, style]}
          placeholder={placeholder}
          right={<ArrowDownCircle />}
          value={inputValue}
          testID="selectInput"
          onChangeText={handleChangeText}
          {...inputProps}
        />
      )
    },
    [placeholder, inputValue, handleChangeText, style],
  )

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
      renderReference={renderReference}
      openOnHover={false}
      matchReferenceWidth
    >
      {filteredOptions.length > 0 ? (
        filteredOptions.map((option) => (
          <Pressable
            key={option.value}
            onPress={() => {
              setSearchValue('')
              setValue(option.value)
              onChange?.(option.value)
              optionOnPress?.()
            }}
            style={[padding.ph16, padding.pv8]}
            _hover={{
              style: [
                padding.ph16,
                padding.pv8,
                { backgroundColor: theme.background.highlight },
              ],
            }}
            _focusVisible={{
              style: [
                padding.ph16,
                padding.pv8,
                { backgroundColor: theme.background.highlight },
              ],
            }}
            testID={`selectOption__${option.value}`}
          >
            <Body>{option.name}</Body>
          </Pressable>
        ))
      ) : (
        <View style={[padding.ph16, padding.pv8]}>
          <Body>There are no options available</Body>
        </View>
      )}
    </Popover>
  )
}
