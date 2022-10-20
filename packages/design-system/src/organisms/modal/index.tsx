import {
  IIconButtonProps,
  IModalProps,
  Modal as NBModal,
  Pressable,
  View,
} from 'native-base'
import { ReactNode } from 'react'
import { useWindowDimensions, ViewStyle } from 'react-native'
import type { InterfaceBoxProps } from 'native-base/lib/typescript/components/primitives/Box'
import { Body, LargeHeader } from '../../atoms'
import { useModal, useTheme } from '../../hooks'
import { container, makeStyles, margin, padding, white } from '../../styles'
import CloseCircle from '../../assets/svg/closeCircle.svg'

const styles = makeStyles({
  closeButton: {
    position: 'absolute',
    zIndex: 1,
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

Modal.Content = (props: InterfaceBoxProps<IModalProps>) => (
  <NBModal.Content {...props} style={[props.style, styles.content]} />
)

export interface ModalHeaderProps {
  children: string
  style?: ViewStyle
}

Modal.Header = ({ style, children }: ModalHeaderProps) => (
  <View style={[style, padding.ph40, padding.pt24, padding.pb8]}>
    <LargeHeader weight="semiBold">{children}</LargeHeader>
  </View>
)

export interface ModalSubHeaderProps {
  children: string
  style?: ViewStyle
}

Modal.SubHeader = ({ style, children }: ModalSubHeaderProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme()

  return (
    <View style={[style, padding.ph40, padding.pb8]}>
      <Body color={theme.text.secondary}>{children}</Body>
    </View>
  )
}

export interface ModalBodyProps {
  children: ReactNode
  style?: ViewStyle
}

Modal.Body = ({ style, children }: ModalBodyProps) => (
  <View style={[style, padding.ph40, padding.pv16]}>{children}</View>
)

export interface ModalFooterProps {
  children: ReactNode
  style?: ViewStyle
}

Modal.Footer = ({ style, children }: ModalFooterProps) => (
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

Modal.CloseButton = ({ onPress }: IIconButtonProps) => (
  <Pressable style={styles.closeButton} onPress={onPress}>
    <CloseCircle />
  </Pressable>
)
