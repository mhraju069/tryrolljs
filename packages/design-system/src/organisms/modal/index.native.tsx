import { Pressable } from '@gluestack-ui/react'
import { View, useWindowDimensions, Modal as RNModal } from 'react-native'
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
  backdrop: {
    backgroundColor: BACKDROP_BACKGROUND_COLOR,
    display: 'flex',
    position: 'absolute',
  },
})

export const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const { width, height } = useWindowDimensions()
  return (
    <RNModal
      animationType="fade"
      transparent
      visible={isOpen}
      onRequestClose={onClose}
    >
      <View style={[container.center, { width, height }]}>
        <Pressable
          style={[{ width, height }, styles.backdrop]}
          onPress={onClose}
        />
        {children}
      </View>
    </RNModal>
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
