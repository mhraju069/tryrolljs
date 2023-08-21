import {
  Modal as GluestackModal,
  ModalBackdrop as GluestackModalBackdrop,
  ModalContent as GluestackModalContent,
  Pressable,
} from '@gluestack-ui/react'
import { ReactNode } from 'react'
import {
  Platform,
  useWindowDimensions,
  ViewProps,
  View,
  PressableProps,
} from 'react-native'
import type { InterfaceModalProps } from '@gluestack-ui/modal/lib/typescript/types'
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

export interface ModalV2Props extends InterfaceModalProps {
  children: ReactNode
  testID?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
}

export const ModalV2 = ({ children, size = 'md', ...props }: ModalV2Props) => {
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
      <GluestackModalBackdrop
        style={{
          height,
          width,
          position: Platform.select({
            web: 'fixed',
            default: undefined,
          }) as any,
        }}
      />
      {children}
    </GluestackModal>
  )
}

const ModalContent = (props: ViewProps) => (
  <GluestackModalContent
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

const ModalCloseButton = ({ onPress }: PressableProps) => (
  <Pressable style={styles.closeButton} onPress={onPress}>
    <Icon variant="close" />
  </Pressable>
)

ModalV2.Content = ModalContent
ModalV2.Header = ModalHeader
ModalV2.Body = ModalBody
ModalV2.Footer = ModalFooter
ModalV2.CloseButton = ModalCloseButton
