import Clipboard from '@react-native-clipboard/clipboard'
import { useCallback } from 'react'
import { Platform } from 'react-native'
import { useToast, useToastV2 } from '../atoms'

const useNativeClipboard = () => {
  const copy = useCallback((text: string) => Clipboard.setString(text), [])
  const paste = useCallback(() => Clipboard.getString(), [])

  return { copy, paste }
}

const useWebClipboard = () => {
  const copy = useCallback(
    (text: string) => navigator.clipboard.writeText(text),
    [],
  )
  const paste = useCallback(() => navigator.clipboard.readText(), [])
  return { copy, paste }
}

export const useClipboard = Platform.select({
  native: useNativeClipboard,
  default: useWebClipboard,
})

export const useClipboardWithToastBase = (
  useToast_: typeof useToast | typeof useToastV2,
) => {
  const { copy } = useClipboard()
  const toast = useToast_()

  return useCallback(
    async (text: string) => {
      await copy(text)
      toast({
        title: 'Copied to clipboard',
        variant: 'success',
      })
    },
    [toast, copy],
  )
}

export const useClipboardWithToast = () => useClipboardWithToastBase(useToast)
export const useClipboardWithToastV2 = () =>
  useClipboardWithToastBase(useToastV2)
