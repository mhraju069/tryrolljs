import { useClipboard } from 'native-base'
import { useCallback } from 'react'
import { Toast } from '../atoms'

export const useClipboardWithToast = () => {
  const { onCopy } = useClipboard()

  return useCallback(
    async (text: string) => {
      await onCopy(text)
      Toast.show({
        title: 'Copied to clipboard',
        variant: 'success',
      })
    },
    [onCopy],
  )
}
