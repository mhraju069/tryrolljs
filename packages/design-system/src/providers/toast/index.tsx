import { Platform } from 'react-native'
import RNToastMessage from 'react-native-toast-message'
import { Toaster } from 'react-hot-toast'
import { Toast, ToastProps } from '../../atoms'

const renderToast = ({ props }: { props?: ToastProps }) => <Toast {...props} />

const toastConfig = {
  light: renderToast,
  dark: renderToast,
  success: renderToast,
  error: renderToast,
}

const ToastProvider = () => {
  return Platform.OS === 'web' ? (
    <Toaster position="top-right" />
  ) : (
    <RNToastMessage config={toastConfig} position="bottom" />
  )
}

export default ToastProvider
