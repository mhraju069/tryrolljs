import {
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  flip,
  safePolygon,
  autoUpdate,
  shift,
  size,
} from '@floating-ui/react-dom-interactions'
import { useState } from 'react'
import { View } from 'native-base'
import { useTheme } from '../../hooks'
import { containers } from '../../styles'
import { DropdownProps } from '.'

export const Dropdown = ({ children, open, renderDropdown }: DropdownProps) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(open)
  const { context, x, y, reference, floating, strategy } = useFloating({
    placement: 'bottom-start',
    open,
    onOpenChange: setIsOpen,
    middleware: [
      flip(),
      shift(),
      size({
        apply({ availableWidth, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${availableWidth}px`,
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
      {(isOpen || open) && (
        <View
          style={[
            containers.borderRadius,
            containers.shadow,
            // @ts-ignore
            // eslint-disable-next-line react-native/no-inline-styles
            {
              zIndex: 999,
              top: y ?? 0,
              left: x ?? 0,
              backgroundColor: theme.background.primary,
              position: strategy,
            },
          ]}
          ref={floating}
          {...getFloatingProps()}
        >
          {renderDropdown()}
        </View>
      )}
    </>
  )
}
