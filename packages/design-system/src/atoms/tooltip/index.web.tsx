import {
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  FloatingOverlay,
  offset,
  flip,
  safePolygon,
  autoUpdate,
  shift,
  size,
} from '@floating-ui/react-dom-interactions'
import { useState } from 'react'
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
    middleware: [
      offset(8),
      flip(),
      shift(),
      size({
        apply({ availableWidth, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${Math.max(availableWidth, 250)}px`,
            maxHeight: `${availableHeight}px`,
          })
        },
      }),
    ],
    // https://floating-ui.com/docs/react-dom#updating
    whileElementsMounted: (reference_, floating_, update) =>
      autoUpdate(reference_, floating_, update, {
        animationFrame: true,
      }),
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      handleClose: safePolygon(),
      move: false,
    }),
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
