import { Platform, StyleSheet, View } from 'react-native'
import { useCallback, useRef, useState } from 'react'
import { Pressable } from 'native-base'
import { SelectProps } from '../../molecules'
import { Popover, PopoverProps } from '../popover'
import { useThemeV2 } from '../../hooks'
import { TypographyV2 } from '../typographyV2'
import { container, padding, spacing } from '../../styles'
import { Icon } from '../icon'

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
})

export const InputV2SelectSuffix: React.FC<SelectProps> = ({
  options = [],
  defaultValue,
  onChange,
}) => {
  const viewRef = useRef<View>(null)
  const theme = useThemeV2()
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)

  const selectedOption = options.find((option) => option.value === value)
  const inputValue = selectedOption?.name

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
        <Pressable
          ref={(node) => {
            // @ts-ignore
            viewRef.current = node
            // @ts-ignore
            reference(node)
          }}
          style={[container.row]}
          onPress={() => setIsOpen(true)}
          {...inputProps}
        >
          <TypographyV2
            variant="caption1"
            color={isOpen ? theme.base.highlight1 : theme.text.black[100]}
          >
            {inputValue}
          </TypographyV2>
          <View style={{ width: spacing[8] }} />
          <Icon
            variant="arrowDown2"
            color={isOpen ? theme.base.highlight1 : theme.text.black[100]}
          />
        </Pressable>
      )
    },
    [inputValue, isOpen, theme],
  )

  return (
    <Popover
      open={isOpen}
      renderReference={renderReference}
      openOnHover={false}
      onOpenChange={setIsOpen}
      matchReferenceWidth={false}
      style={styles.popover}
    >
      {options.map((option, index) => (
        <Pressable
          key={option.value}
          onPress={() => {
            setValue(option.value)
            onChange?.(option.value)
            setIsOpen(false)
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
