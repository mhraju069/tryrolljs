import { useFloating, shift, flip } from '@floating-ui/react-native'
import { View } from 'native-base'
import { useCallback, useMemo } from 'react'
import { useFloatingLayoutAndroidHandler, useTheme } from '../../hooks'
import { container } from '../../styles'
import { PopoverProps } from '.'

export const Popover = ({
  children,
  onOpenChange,
  open,
  renderReference,
  placement = 'bottom-start',
  style,
  ...rest
}: PopoverProps) => {
  const theme = useTheme()
  const { x, y, refs } = useFloating({
    placement,
    middleware: [flip(), shift()],
  })

  const { xy, onLayout } = useFloatingLayoutAndroidHandler({ x, y })

  const getReferenceProps = useCallback(
    () => ({
      onPress: () => {
        onOpenChange?.(!open)
      },
      onLayout,
    }),
    [onLayout, onOpenChange, open],
  )

  const referenceNode = useMemo(
    () => renderReference({ reference: refs.setReference, getReferenceProps }),
    [refs, renderReference, getReferenceProps],
  )

  return (
    <>
      {referenceNode}
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
              top: xy[1],
              left: xy[0],
              backgroundColor: theme.background.primary,
            },
            style,
          ]}
          ref={refs.setFloating}
          {...rest}
        >
          {children}
        </View>
      )}
    </>
  )
}
