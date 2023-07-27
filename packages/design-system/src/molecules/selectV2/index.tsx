import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { Pressable } from 'native-base'
import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { Icon, Popover, PopoverProps, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { padding } from '../../styles'
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
  input: {
    cursor: 'pointer',
  } as any,
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
  renderReference?: SelectRenderReference
}

export const SelectV2: React.FC<SelectV2Props> = ({
  options = [],
  renderReference,
  onChange,
  defaultValue,
  placeholder,
}) => {
  const theme = useThemeV2()
  const inputRef = useRef<TextInput>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const selectedOption = options.find((option) => option.value === value)
  const selectedValue = selectedOption?.name

  const optionOnPress = useMemo(
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
          onChangeText={() => null}
          editable={Platform.select({ web: false, native: true })}
          value={selectedValue ?? ''}
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
    [theme, placeholder, selectedValue],
  )

  const customRenderReference: SelectRenderReference = useCallback(
    (props) => {
      if (renderReference) {
        return renderReference({ ...props, value: selectedValue })
      }
    },
    [renderReference, selectedValue],
  )

  return (
    <Popover
      open={isOpen}
      renderReference={
        renderReference ? customRenderReference : defaultRenderReference
      }
      openOnHover={false}
      onOpenChange={setIsOpen}
      matchReferenceWidth={false}
      placement="bottom-end"
      style={styles.popover}
    >
      {options.map((option, index) => (
        <Pressable
          key={option.value}
          onPress={() => {
            setValue(option.value)
            onChange?.(option.value)
            optionOnPress?.()
          }}
          _hover={{
            style: [{ backgroundColor: theme.base.highlight2[10] }],
          }}
          _focusVisible={{
            style: [{ backgroundColor: theme.base.highlight2[10] }],
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
      ))}
    </Popover>
  )
}
