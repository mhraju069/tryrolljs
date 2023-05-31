import { Platform, View } from 'react-native'
import { useCallback, useRef } from 'react'
import { Pressable } from 'native-base'
import { PopoverProps } from '../popover'
import { useThemeV2 } from '../../hooks'
import { TypographyV2 } from '../typographyV2'
import { container, spacing } from '../../styles'
import { Icon } from '../icon'
import { SelectV2, SelectV2Props } from '../../molecules/selectV2'

export type InputV2SelectSuffixProps = Omit<SelectV2Props, 'renderReference'>

export const InputV2SelectSuffix: React.FC<InputV2SelectSuffixProps> = ({
  onChange,
  ...props
}) => {
  const viewRef = useRef<View>(null)
  const theme = useThemeV2()

  const onPressOption = (value: string) => {
    viewRef?.current?.blur()
    onChange?.(value)
  }

  const renderReference: PopoverProps['renderReference'] = useCallback(
    ({ reference, getReferenceProps, selectedValue, onOpenChange, open }) => {
      const referenceProps = getReferenceProps()
      const inputProps = Platform.select({
        web: referenceProps,
        native: {
          onFocus: () => {
            console.warn('onFocus')
            onOpenChange?.(true)
          },
          onBlur: () => onOpenChange?.(false),
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
          onPress={Platform.select({
            native: () => onOpenChange?.(!open),
          })}
          {...inputProps}
        >
          <TypographyV2
            variant="caption1"
            color={open ? theme.base.highlight1 : theme.text.black[100]}
          >
            {selectedValue}
          </TypographyV2>
          <View style={{ width: spacing[8] }} />
          <Icon
            variant="arrowDown2"
            color={open ? theme.base.highlight1 : theme.text.black[100]}
          />
        </Pressable>
      )
    },
    [theme, viewRef],
  )

  return (
    <SelectV2
      renderReference={renderReference}
      onChange={onPressOption}
      {...props}
    />
  )
}
