import { Platform } from 'react-native'
import RNToastMessage from 'react-native-toast-message'
import { ToastContainer } from 'react-toastify'
import { Toast, ToastProps } from '../../atoms'
import { ToastType } from '../../utils'

const toastConfig = {
  [ToastType.Default]: ({
    text1,
    text2,
    props,
  }: {
    text1?: string
    text2?: string
    props?: Omit<ToastProps, 'title' | 'description'>
  }) => <Toast title={text1} description={text2} {...props} />,
}

const ToastProvider = () => {
  return Platform.OS === 'web' ? (
    <ToastContainer />
  ) : (
    <RNToastMessage config={toastConfig} />
  )
}

export default ToastProvider
