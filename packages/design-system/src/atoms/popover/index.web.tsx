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
} from '@floating-ui/react-dom-interactions'
import { View } from 'native-base'
import { useTheme } from '../../hooks'
import { container } from '../../styles'
import { PopoverProps } from '.'

export const Popover = ({
  children,
  onOpenChange,
  open,
  renderReference,
  openOnHover,
  placement = 'bottom-start',
  matchReferenceWidth,
  ...rest
}: PopoverProps) => {
  const theme = useTheme()
  const { x, y, reference, floating, strategy, context } = useFloating({
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
    useFocus(context),
  ])

  return (
    <>
      {renderReference({ reference, getReferenceProps })}
      {open && (
        <View
          style={[
            container.borderRadiusSM,
            container.shadow,
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
          {...rest}
        >
          {children}
        </View>
      )}
    </>
  )
}
