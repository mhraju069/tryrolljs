import { Pressable } from '@gluestack-ui/react'
import { useWindowDimensions, View } from 'react-native'
import { useModal } from '../../hooks'
import { Modal } from '../modal'
import { Icon, TypographyV2 } from '../../atoms'
import {
  container,
  layer,
  makeStyles,
  margin,
  padding,
  white,
} from '../../styles'
import type {
  ModalV2Props,
  ModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalCloseButtonProps,
} from './types'

const styles = makeStyles({
  closeButton: {
    position: 'absolute',
    zIndex: layer.layer1,
    right: 24,
    top: 24,
  },
  content: {
    backgroundColor: white,
    borderRadius: 16,
  },
})

export const ModalV2 = ({ children, size = 'md', ...props }: ModalV2Props) => {
  const modal = useModal()
  const { height, width } = useWindowDimensions()

  return (
    <Modal
      onClose={modal.close}
      isOpen={modal.isOpen}
      size={size}
      style={{ height, width }}
      {...props}
    >
      {children}
    </Modal>
  )
}

const ModalContent = (props: ModalContentProps) => (
  <View {...props} style={[props.style, styles.content, padding.p24]} />
)

const ModalHeader = ({ style, children }: ModalHeaderProps) => (
  <TypographyV2 variant="sub3" style={[style, padding.pb16]}>
    {children}
  </TypographyV2>
)

const ModalBody = ({ style, children, ...rest }: ModalBodyProps) => (
  <View style={[style, padding.pb32]} {...rest}>
    {children}
  </View>
)

const ModalFooter = ({ style, children }: ModalFooterProps) => (
  <View style={[style, container.row, margin.mlauto]}>{children}</View>
)

const ModalCloseButton = ({ onPress }: ModalCloseButtonProps) => (
  <Pressable style={styles.closeButton} onPress={onPress}>
    <Icon variant="close" />
  </Pressable>
)

ModalV2.Content = ModalContent
ModalV2.Header = ModalHeader
ModalV2.Body = ModalBody
ModalV2.Footer = ModalFooter
ModalV2.CloseButton = ModalCloseButton
