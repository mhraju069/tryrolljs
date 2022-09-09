import {
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  FloatingOverlay,
  offset,
  flip,
  safePolygon,
} from '@floating-ui/react-dom-interactions'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'
import {
  charcoalBlack,
  containers,
  darkNavy,
  padding,
  white,
} from '../../styles'
import { asTextNode } from './utils'
import { TooltipProps } from '.'

const styles = StyleSheet.create({
  tooltip: {
    position: 'absolute',
    maxWidth: 250,
  },
})

export const Tooltip: React.FC<TooltipProps> = ({
  variant = 'light',
  open,
  children,
  title,
  placement,
}) => {
  const [isOpen, setIsOpen] = useState(open)
  const { context, x, y, reference, floating, strategy } = useFloating({
    placement,
    open,
    onOpenChange: setIsOpen,
    middleware: [offset(8), flip()],
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { handleClose: safePolygon() }),
    useFocus(context),
  ])

  return (
    <>
      <div ref={reference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <FloatingOverlay>
          <View
            style={[
              styles.tooltip,
              containers.borderRadius,
              containers.shadow,
              padding.ph16,
              padding.pv8,
              // @ts-ignore
              {
                top: y ?? 0,
                left: x ?? 0,
                backgroundColor: variant === 'dark' ? darkNavy : white,
                position: strategy,
              },
            ]}
            ref={floating}
            {...getFloatingProps()}
          >
            {asTextNode(title, variant === 'dark' ? white : charcoalBlack)}
          </View>
        </FloatingOverlay>
      )}
    </>
  )
}
