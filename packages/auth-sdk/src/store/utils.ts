import { Matcher } from './types'

export const doesItemMatch = <T extends object>(
  item: T,
  matcher: Matcher<T>,
) => {
  if (typeof matcher === 'string') {
    if ('id' in item && typeof item.id === 'string') {
      return item.id === matcher
    }

    return false
  }

  return matcher(item as T)
}
