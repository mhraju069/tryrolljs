import { useClipboard } from 'native-base'
import { useCallback } from 'react'
import { Toast, ToastV2 } from '../atoms'

export const useClipboardWithToastBase = (
  ToastComponent: typeof Toast | typeof ToastV2,
) => {
  const { onCopy } = useClipboard()

  return useCallback(
    async (text: string) => {
      await onCopy(text)
      ToastComponent.show({
        title: 'Copied to clipboard',
        variant: 'success',
      })
    },
    [onCopy, ToastComponent],
  )
}

export const useClipboardWithToast = () => useClipboardWithToastBase(Toast)
export const useClipboardWithToastV2 = () => useClipboardWithToastBase(ToastV2)
