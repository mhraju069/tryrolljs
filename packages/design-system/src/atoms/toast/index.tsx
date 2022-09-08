import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  ViewStyle,
} from 'react-native'
import { useMemo } from 'react'
import ReactHotToast from 'react-hot-toast'
import RNToastMessage from 'react-native-toast-message'
import {
  charcoalBlack,
  white,
  margins,
  text,
  black,
  padding,
  ghostWhite,
  green,
  crimson,
} from '../../styles'
import CloseCircle from '../../assets/svg/closeCircle.svg'
import { Body, Caption } from '../typography'

export type ToastVariant = 'success' | 'error' | 'light' | 'dark'

export interface ToastProps {
  title?: string
  description?: string
  onClose?: (e: GestureResponderEvent) => void
  action?: {
    title: string
    onPress: (e: GestureResponderEvent) => void
  }
  variant?: ToastVariant
  style?: ViewStyle
}

export const TOAST_COLOR_MAP = {
  light: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: charcoalBlack,
  },
  dark: {
    backgroundColor: charcoalBlack,
    color: white,
    secondaryBackgroundColor: black,
    borderColor: charcoalBlack,
  },
  success: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: green,
  },
  error: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: crimson,
  },
}

const styles = StyleSheet.create({
  container: { maxWidth: '100%', width: 250 },
  closeButton: { position: 'absolute', right: 0, top: 0 },
  nativeActionDivider: { height: 1 },
})

export const Toast = ({
  title,
  description,
  action,
  onClose,
  variant = 'light',
  style,
}: ToastProps) => {
  const { backgroundColor, color, secondaryBackgroundColor } =
    TOAST_COLOR_MAP[variant]

  const actionNode = useMemo(() => {
    if (!action) {
      return null
    }

    if (Platform.OS === 'web') {
      return (
        <TouchableOpacity style={margins.mt8} onPress={action.onPress}>
          <Caption color={color} weight="semiBold" underline>
            {action.title}
          </Caption>
        </TouchableOpacity>
      )
    }

    return (
      <>
        <View
          style={[
            margins.mt16,
            margins.mb8,
            { backgroundColor: secondaryBackgroundColor },
          ]}
        />
        <TouchableOpacity onPress={action.onPress}>
          <Caption style={text.center} color={color} weight="semiBold">
            {action.title}
          </Caption>
        </TouchableOpacity>
      </>
    )
  }, [action, color, secondaryBackgroundColor])

  return (
    <View style={[styles.container, padding.pr32, { backgroundColor }, style]}>
      {title && (
        <Body color={color} weight="semiBold">
          {title}
        </Body>
      )}
      {description && <Body color={color}>{description}</Body>}

      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <CloseCircle color={color} />
      </TouchableOpacity>

      {actionNode}
    </View>
  )
}

const toast = ({
  title,
  description,
  onClose,
  action,
  variant = 'light',
}: ToastProps) => {
  const isWeb = Platform.OS === 'web'
  const { backgroundColor, borderColor } = TOAST_COLOR_MAP[variant]
  if (isWeb) {
    const toastId = ReactHotToast(
      <Toast
        title={title}
        description={description}
        onClose={(e) => {
          onClose?.(e)
          ReactHotToast.dismiss(toastId)
        }}
        action={action}
        variant={variant}
      />,
      {
        style: {
          background: backgroundColor,
          borderBottom: `4px solid ${borderColor}`,
        },
      },
    )
  } else {
    RNToastMessage.show({
      type: variant,
      props: {
        title,
        description,
        onClose,
        action,
        style: {
          borderBottom: `4px solid ${borderColor}`,
        },
      },
    })
  }
}

Toast.show = toast
