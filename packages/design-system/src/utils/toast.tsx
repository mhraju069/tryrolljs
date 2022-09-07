import { Platform } from 'react-native'
import * as reactToastify from 'react-toastify'
import RNToastMessage from 'react-native-toast-message'
import { Toast, ToastProps } from '../atoms'

export enum ToastType {
  Warn = 'warn',
  Success = 'success',
  Error = 'error',
  Default = 'default',
}

export const toast = (
  { title, description, onClose, action }: ToastProps,
  type: ToastType = ToastType.Warn,
) => {
  const typeToPlatformToast = {
    [ToastType.Success]: {
      native: () =>
        RNToastMessage.show({
          type: ToastType.Success,
          text1: title,
          text2: description,
        }),
      web: () =>
        reactToastify.toast.success(title, {
          type: reactToastify.toast.TYPE.SUCCESS,
        }),
    },
    [ToastType.Warn]: {
      native: () =>
        RNToastMessage.show({
          type: ToastType.Error,
          text1: title,
          text2: description,
        }),
      web: () =>
        reactToastify.toast.warn(title, {
          type: reactToastify.toast.TYPE.WARNING,
        }),
    },
    [ToastType.Error]: {
      native: () =>
        RNToastMessage.show({
          type: ToastType.Error,
          text1: title,
          text2: description,
        }),
      web: () =>
        reactToastify.toast.error(title, {
          type: reactToastify.toast.TYPE.ERROR,
        }),
    },
    [ToastType.Default]: {
      native: () =>
        RNToastMessage.show({
          type: ToastType.Default,
          text1: title,
          text2: description,
          props: { onClose, action },
        }),
      web: () =>
        reactToastify.toast.info(
          <Toast
            title={title}
            description={description}
            onClose={onClose}
            action={action}
          />,
          {
            type: reactToastify.toast.TYPE.DEFAULT,
          },
        ),
    },
  }
  const platform = Platform.OS === 'web' ? 'web' : 'native'

  typeToPlatformToast[type] ? typeToPlatformToast[type][platform]() : null
}
