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
import { useModal } from '../../hooks'
import { Icon, TypographyV2 } from '../../atoms'
import {
  container,
  layer,
  makeStyles,
  margin,
  padding,
  white,
} from '../../styles'

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

export interface ModalV2Props extends IModalProps {}

export const ModalV2 = (props: ModalV2Props) => {
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
  <NBModal.Content
    {...props}
    style={[props.style, styles.content, padding.p24]}
  />
)

export interface ModalV2HeaderProps extends ViewProps {
  children: string
}

const ModalHeader = ({ style, children }: ModalV2HeaderProps) => (
  <TypographyV2 variant="sub3" style={[style, padding.pb16]}>
    {children}
  </TypographyV2>
)

export interface ModalV2BodyProps extends ViewProps {
  children: ReactNode
}

const ModalBody = ({ style, children, ...rest }: ModalV2BodyProps) => (
  <View style={[style, padding.pb32]} {...rest}>
    {children}
  </View>
)

export interface ModalV2FooterProps extends ViewProps {
  children: ReactNode
}

const ModalFooter = ({ style, children }: ModalV2FooterProps) => (
  <View style={[style, container.row, margin.mlauto]}>{children}</View>
)

const ModalCloseButton = ({ onPress }: IIconButtonProps) => (
  <Pressable style={styles.closeButton} onPress={onPress}>
    <Icon variant="close" />
  </Pressable>
)

ModalV2.Content = ModalContent
ModalV2.Header = ModalHeader
ModalV2.Body = ModalBody
ModalV2.Footer = ModalFooter
ModalV2.CloseButton = ModalCloseButton
