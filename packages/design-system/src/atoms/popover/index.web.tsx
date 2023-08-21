import {
  useFloating,
  flip,
  autoUpdate,
  shift,
  size,
  useFocus,
  useHover,
  safePolygon,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react'
import { View } from 'react-native'
import { useTheme } from '../../hooks'
import { container, layer } from '../../styles'
import { PopoverProps } from '.'

export const Popover = ({
  children,
  onOpenChange,
  open,
  renderReference,
  openOnHover,
  placement = 'bottom-start',
  style,
  matchReferenceWidth,
  ...rest
}: PopoverProps) => {
  const theme = useTheme()
  const { x, y, refs, strategy, context } = useFloating({
    strategy: 'fixed',
    placement,
    open,
    onOpenChange,
    middleware: [
      flip(),
      shift(),
      size({
        apply({ rects, availableWidth, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: matchReferenceWidth
              ? `${rects.reference.width}px`
              : `${availableWidth}px`,
            width: matchReferenceWidth
              ? `${rects.reference.width}px`
              : undefined,
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
      enabled: openOnHover,
    }),
    useFocus(context, { keyboardOnly: false }),
  ])

  return (
    <>
      {renderReference({
        reference: refs.setReference,
        getReferenceProps,
        onOpenChange,
        open,
      })}
      {open && (
        <FloatingPortal>
          <View
            style={[
              container.borderRadiusSM,
              container.shadow,
              // @ts-ignore
              // eslint-disable-next-line react-native/no-inline-styles
              {
                zIndex: layer.layer999,
                top: y ?? 0,
                left: x ?? 0,
                backgroundColor: theme.background.primary,
                position: strategy,
              },
              style,
            ]}
            // @ts-ignore
            ref={refs.setFloating}
            {...getFloatingProps()}
            {...rest}
          >
            {children}
          </View>
        </FloatingPortal>
      )}
    </>
  )
}
