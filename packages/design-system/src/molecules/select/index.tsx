import { Pressable, View } from 'native-base'
import { useCallback, useMemo, useRef, useState } from 'react'
import { Platform, TextInput } from 'react-native'
import ArrowDownCircle from '../../assets/svg/arrowDownCircle.svg'
import { Body, Popover, Input } from '../../atoms'
import { useTheme } from '../../hooks'
import { padding } from '../../styles'

export type SelectOption = {
  name: string
  value: string
}

export interface SelectProps {
  placeholder?: string
  options: SelectOption[]
  defaultValue?: string
}

export const Select = ({
  placeholder,
  options = [],
  defaultValue,
}: SelectProps) => {
  const inputRef = useRef<TextInput>(null)
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)

  const inputValue = options.find((option) => option.value === value)?.name

  const optionOnPress = useMemo(
    () =>
      Platform.select({
        native: () => inputRef?.current?.blur(),
        web: () => setIsOpen(false),
      }),
    [],
  )

  const renderReference = useCallback(
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
          placeholder={placeholder}
          right={<ArrowDownCircle />}
          value={inputValue}
          testID="selectInput"
          {...inputProps}
        />
      )
    },
    [placeholder, inputValue],
  )

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
      renderReference={renderReference}
      openOnHover={false}
      matchReferenceWidth
    >
      {options.length > 0 ? (
        options.map((option) => (
          <Pressable
            key={option.value}
            onPress={() => {
              setValue(option.value)
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
          <Body>There is no options available</Body>
        </View>
      )}
    </Popover>
  )
}
