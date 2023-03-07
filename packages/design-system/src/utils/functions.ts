import { FlatList, Linking, Platform } from 'react-native'

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

const SCROLL_RETRY_TIMEOUT = 500
export const makeScrollToIndexFailedHandler = (
  listRef: React.RefObject<Pick<FlatList<any>, 'scrollToIndex'>>,
) => {
  let attemptsLeft = 3
  let timeoutId: NodeJS.Timeout | undefined
  return (info: { index: number; highestMeasuredFrameIndex: number }) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    if (attemptsLeft === 0) {
      return
    }
    timeoutId = setTimeout(() => {
      listRef.current?.scrollToIndex({ index: info.index })
      timeoutId = undefined
      attemptsLeft -= 1
    }, SCROLL_RETRY_TIMEOUT)
  }
}
