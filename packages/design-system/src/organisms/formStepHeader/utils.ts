import { FlatList } from 'react-native'

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
