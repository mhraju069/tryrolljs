import Clipboard from '@react-native-clipboard/clipboard'
import { useCallback } from 'react'
import { Platform } from 'react-native'

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
