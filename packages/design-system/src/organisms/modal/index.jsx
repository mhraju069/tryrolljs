import {
  Modal as GluestackModal,
  ModalBackdrop as GluestackModalBackdrop,
  ModalContent as GluestackModalContent,
  Pressable,
} from '@gluestack-ui/react'
import { useWindowDimensions, View } from 'react-native'
import { Body, LargeHeader } from '../../atoms'
import { useModal, useTheme } from '../../hooks'
import {
  container,
  layer,
  makeStyles,
  margin,
  padding,
  white,
} from '../../styles'
import CloseCircle from '../../assets/svg/closeCircle.svg'

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

export const Modal = ({ children, size = 'md', ...props }) => {
  const modal = useModal()
  const { height, width } = useWindowDimensions()

  return (
    <GluestackModal
      onClose={modal.close}
      isOpen={modal.isOpen}
      size={size}
      style={{ height, width }}
      {...props}
    >
      <GluestackModalBackdrop style={{ height, width }} />
      {children}
    </GluestackModal>
  )
}

const ModalContent = (props) => (
  <GluestackModalContent {...props} style={[props.style, styles.content]} />
)

const ModalHeader = ({ style, children }) => (
  <View style={[style, padding.ph40, padding.pt24, padding.pb8]}>
    <LargeHeader weight="semiBold">{children}</LargeHeader>
  </View>
)

const ModalSubHeader = ({ style, children }) => {
  const theme = useTheme()

  return (
    <View style={[style, padding.ph40, padding.pb8]}>
      <Body color={theme.text.secondary}>{children}</Body>
    </View>
  )
}

const ModalBody = ({ style, children, ...rest }) => (
  <View style={[style, padding.ph40, padding.pv16]} {...rest}>
    {children}
  </View>
)

const ModalFooter = ({ style, children }) => (
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

const ModalCloseButton = ({ onPress }) => (
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
