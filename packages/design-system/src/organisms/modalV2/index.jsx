import {
  Modal as GluestackModal,
  ModalBackdrop as GluestackModalBackdrop,
  ModalContent as GluestackModalContent,
  Pressable,
} from '@gluestack-ui/react'
import { Platform, useWindowDimensions, View } from 'react-native'
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

export const ModalV2 = ({ children, size = 'md', ...props }) => {
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
            default: 'absolute',
          }),
        }}
      />
      {children}
    </GluestackModal>
  )
}

const ModalContent = (props) => (
  <GluestackModalContent
    {...props}
    style={[props.style, styles.content, padding.p24]}
  />
)

const ModalHeader = ({ style, children }) => (
  <TypographyV2 variant="sub3" style={[style, padding.pb16]}>
    {children}
  </TypographyV2>
)

const ModalBody = ({ style, children, ...rest }) => (
  <View style={[style, padding.pb32]} {...rest}>
    {children}
  </View>
)

const ModalFooter = ({ style, children }) => (
  <View style={[style, container.row, margin.mlauto]}>{children}</View>
)

const ModalCloseButton = ({ onPress }) => (
  <Pressable style={styles.closeButton} onPress={onPress}>
    <Icon variant="close" />
  </Pressable>
)

ModalV2.Content = ModalContent
ModalV2.Header = ModalHeader
ModalV2.Body = ModalBody
ModalV2.Footer = ModalFooter
ModalV2.CloseButton = ModalCloseButton
