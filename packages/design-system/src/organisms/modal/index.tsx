// @ts-nocheck
import {
  Modal as GluestackModal,
  ModalBackdrop as GluestackModalBackdrop,
  ModalContent as GluestackModalContent,
  Pressable,
} from '@gluestack-ui/react'
import type { InterfaceModalProps } from '@gluestack-ui/modal/lib/typescript/types'
import { ReactNode } from 'react'
import {
  useWindowDimensions,
  ViewProps,
  View,
  PressableProps,
} from 'react-native'
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

export interface ModalProps extends InterfaceModalProps {
  children: ReactNode
  testID?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
}

export const Modal = ({ children, size = 'md', ...props }: ModalProps) => {
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

const ModalContent = (props: ViewProps) => (
  <GluestackModalContent {...props} style={[props.style, styles.content]} />
)

export interface ModalHeaderProps extends ViewProps {
  children: ReactNode
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

const ModalCloseButton = ({ onPress }: PressableProps) => (
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
