import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useId,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react'
import { Pressable } from '@gluestack-ui/react'
import { View, useWindowDimensions } from 'react-native'
import { Body, LargeHeader } from '../../atoms'
import { useTheme } from '../../hooks'
import {
  container,
  layer,
  makeStyles,
  margin,
  padding,
  white,
} from '../../styles'
import CloseCircle from '../../assets/svg/closeCircle.svg'
import type {
  ModalProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalSubHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalCloseButtonProps,
} from './types'

const BACKDROP_BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.7)'
const backdropStyles = {
  background: BACKDROP_BACKGROUND_COLOR,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const widthBySize = {
  xs: '40%',
  sm: '50%',
  md: '70%',
  lg: '80%',
  full: '100%',
}

const styles = makeStyles({
  closeButton: {
    position: 'absolute',
    zIndex: layer.layer1,
    right: 32,
    top: 24,
  },
  content: {
    backgroundColor: white,
  },
})

export const Modal = ({
  isOpen,
  children,
  onClose,
  size = 'md',
}: ModalProps) => {
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: onClose,
  })
  const { height, width } = useWindowDimensions()

  const click = useClick(context)
  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
  })
  const role = useRole(context)

  const { getFloatingProps } = useInteractions([click, dismiss, role])

  const labelId = useId()
  const descriptionId = useId()

  return (
    isOpen && (
      <FloatingOverlay
        lockScroll
        style={{
          height,
          width,
          ...backdropStyles,
        }}
      >
        <FloatingFocusManager context={context}>
          <div
            ref={refs.setFloating}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
            style={{ width: widthBySize[size] }}
            {...getFloatingProps()}
          >
            {children}
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    )
  )
}

const ModalContent = (props: ModalContentProps) => (
  <View {...props} style={[props.style, styles.content]} />
)

const ModalHeader = ({ style, children }: ModalHeaderProps) => (
  <View style={[style, padding.ph40, padding.pt24, padding.pb8]}>
    <LargeHeader weight="semiBold">{children}</LargeHeader>
  </View>
)

const ModalSubHeader = ({ style, children }: ModalSubHeaderProps) => {
  const theme = useTheme()

  return (
    <View style={[style, padding.ph40, padding.pb8]}>
      <Body color={theme.text.secondary}>{children}</Body>
    </View>
  )
}

const ModalBody = ({ style, children, ...rest }: ModalBodyProps) => (
  <View style={[style, padding.ph40, padding.pv16]} {...rest}>
    {children}
  </View>
)

const ModalFooter = ({ style, children }: ModalFooterProps) => (
  <View
    style={[
      style,
      container.row,
      margin.mlauto,
      padding.ph40,
      padding.pt16,
      padding.pb24,
    ]}
  >
    {children}
  </View>
)

const ModalCloseButton = ({ onPress }: ModalCloseButtonProps) => (
  <Pressable style={styles.closeButton} onPress={onPress}>
    <CloseCircle />
  </Pressable>
)

Modal.Content = ModalContent
Modal.Header = ModalHeader
Modal.SubHeader = ModalSubHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.CloseButton = ModalCloseButton
