import { useFloating, shift, flip } from '@floating-ui/react-native'
import { View } from 'native-base'
import { Platform } from 'react-native'
import { useAndroidFloatingXY, useTheme } from '../../hooks'
import { container } from '../../styles'
import { formatCoordinate } from '../../utils'
import { PopoverProps } from '.'

export const Popover = ({
  children,
  onOpenChange,
  open,
  renderReference,
  placement = 'bottom-start',
  ...rest
}: PopoverProps) => {
  const theme = useTheme()
  const { x, y, reference, floating } = useFloating({
    placement,
    middleware: [flip(), shift()],
  })

  const { xy: androidXY, onLayout } = useAndroidFloatingXY()
  const xy = Platform.select({ android: androidXY, default: [x, y] })

  const getReferenceProps = () => ({
    onPress: () => {
      onOpenChange?.(!open)
    },
    onLayout,
  })

  return (
    <>
      {renderReference({ reference, getReferenceProps })}
      {open && (
        <View
          style={[
            container.positionAbsolute,
            container.borderRadiusSM,
            container.shadow,
            // @ts-ignore
            // eslint-disable-next-line react-native/no-inline-styles
            {
              zIndex: 999,
              top: formatCoordinate(xy[1]),
              left: formatCoordinate(xy[0]),
              backgroundColor: theme.background.primary,
            },
          ]}
          ref={floating}
          {...rest}
        >
          {children}
        </View>
      )}
    </>
  )
}
