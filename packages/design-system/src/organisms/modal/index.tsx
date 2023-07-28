import {
  IIconButtonProps,
  IModalProps,
  Modal as NBModal,
  Pressable,
  View,
} from 'native-base'
import { ReactNode } from 'react'
import { useWindowDimensions, ViewProps } from 'react-native'
import type { InterfaceBoxProps } from 'native-base/lib/typescript/components/primitives/Box'
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

export interface ModalProps extends IModalProps {}

export const Modal = (props: ModalProps) => {
  const modal = useModal()
  const { height, width } = useWindowDimensions()

  return (
    <NBModal
      onClose={modal.close}
      isOpen={modal.isOpen}
      _overlay={{ style: { height, width } }}
      {...props}
    />
  )
}

const ModalContent = (props: InterfaceBoxProps<IModalProps>) => (
  <NBModal.Content {...props} style={[props.style, styles.content]} />
)

export interface ModalHeaderProps extends ViewProps {
  children: string
}

const ModalHeader = ({ style, children }: ModalHeaderProps) => (
  <View style={[style, padding.ph40, padding.pt24, padding.pb8]}>
    <LargeHeader weight="semiBold">{children}</LargeHeader>
  </View>
)

export interface ModalSubHeaderProps extends ViewProps {
  children: string
}

const ModalSubHeader = ({ style, children }: ModalSubHeaderProps) => {
  const theme = useTheme()

  return (
    <View style={[style, padding.ph40, padding.pb8]}>
      <Body color={theme.text.secondary}>{children}</Body>
    </View>
  )
}

export interface ModalBodyProps extends ViewProps {
  children: ReactNode
}

const ModalBody = ({ style, children, ...rest }: ModalBodyProps) => (
  <View style={[style, padding.ph40, padding.pv16]} {...rest}>
    {children}
  </View>
)

export interface ModalFooterProps extends ViewProps {
  children: ReactNode
}

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

const ModalCloseButton = ({ onPress }: IIconButtonProps) => (
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
