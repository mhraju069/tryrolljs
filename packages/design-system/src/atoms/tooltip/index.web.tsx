import {
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  offset,
  flip,
  safePolygon,
  autoUpdate,
  FloatingPortal,
  shift,
  size,
} from '@floating-ui/react'
import { useState } from 'react'
import { View } from 'native-base'
import {
  charcoalBlack,
  container,
  darkNavy,
  padding,
  white,
} from '../../styles'
import { ConditionalWrapper } from '../conditionalWrapper'
import { asTextNode } from './utils'
import { TooltipProps } from '.'

const wrapper = (render: React.ReactNode) => {
  return <FloatingPortal>{render}</FloatingPortal>
}

export const Tooltip = ({
  variant = 'light',
  open,
  children,
  title,
  placement,
  renderInPortal = true,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(open)
  const { context, x, y, refs, strategy } = useFloating({
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
            maxWidth: `${Math.min(availableWidth, 250)}px`,
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
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      <ConditionalWrapper condition={renderInPortal} wrapper={wrapper}>
        {(isOpen || open) && (
          <View
            style={[
              container.borderRadius,
              container.shadow,
              padding.ph16,
              padding.pv8,
              // @ts-ignore
              // eslint-disable-next-line react-native/no-inline-styles
              {
                zIndex: 999,
                top: y ?? 0,
                left: x ?? 0,
                backgroundColor: variant === 'dark' ? darkNavy : white,
                position: strategy,
              },
            ]}
            ref={refs.setFloating}
            {...getFloatingProps()}
          >
            {asTextNode(title, variant === 'dark' ? white : charcoalBlack)}
          </View>
        )}
      </ConditionalWrapper>
    </>
  )
}
