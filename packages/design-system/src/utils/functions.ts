import { Linking, Platform } from 'react-native'

export const openLink = (link: string, newTab = false) => {
  if (Platform.OS === 'web') {
    if (newTab) {
      window.open(link)
      return
    }
    window.location.href = link
    return
  }
  Linking.openURL(link)
}

export const isLast = (index: number, array: unknown[]) =>
  index === array.length - 1
