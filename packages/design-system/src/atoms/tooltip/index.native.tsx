import { useFloating, shift } from '@floating-ui/react-native'
import { useCallback, useState } from 'react'
import { Pressable, View } from 'native-base'
import { Platform } from 'react-native'
import {
  charcoalBlack,
  container,
  darkNavy,
  makeStyles,
  padding,
  white,
} from '../../styles'
import { useFloatingLayoutAndroidHandler } from '../../hooks'
import { asTextNode } from './utils'
import { TooltipProps } from '.'

const styles = makeStyles({
  tooltip: {
    position: 'absolute',
    maxWidth: 250,
  },
})

export const Tooltip = ({
  variant = 'light',
  open,
  children,
  title,
  placement,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(open)
  const { x, y, reference, floating } = useFloating({
    placement,
    middleware: [shift()],
  })

  const { xy, onLayout } = useFloatingLayoutAndroidHandler({ x, y })

  const handlePress = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }, [])

  return (
    <View>
      <Pressable onPress={handlePress}>
        <View
          ref={reference}
          onLayout={Platform.select({
            android: onLayout,
            default: undefined,
          })}
        >
          {asTextNode(children)}
        </View>
      </Pressable>
      {isOpen && (
        <View
          ref={floating}
          style={[
            styles.tooltip,
            container.borderRadius,
            container.shadow,
            padding.ph16,
            padding.pv8,
            {
              top: xy[1],
              left: xy[0],
              backgroundColor: variant === 'dark' ? darkNavy : white,
            },
          ]}
        >
          {asTextNode(title, variant === 'dark' ? white : charcoalBlack)}
        </View>
      )}
    </View>
  )
}
