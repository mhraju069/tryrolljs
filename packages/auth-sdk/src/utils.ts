import { Storage } from './types'

export const isLastUpdateTimestampExpired = (
  lastUpdateTimestamp: number | undefined,
  expirationInSeconds = 0,
) => {
  if (!lastUpdateTimestamp) {
    return true
  }

  const now = new Date()
  const expirationInMiliseconds = expirationInSeconds * 1000

  return now.getTime() - lastUpdateTimestamp >= expirationInMiliseconds
}

export const safeJsonParse = (value: string) => {
  try {
    return JSON.parse(value)
  } catch (e) {
    return undefined
  }
}

export const getPrefixedStorageKey = (prefix: string, key: string) =>
  `${prefix}/${key}`

export const addPrefixToStorage = (
  storage: Storage,
  prefix: string,
): Storage => {
  return {
    ...storage,
    getItem: (key: string) =>
      storage.getItem(getPrefixedStorageKey(prefix, key)),
    setItem: (key: string, value: string) =>
      storage.setItem(getPrefixedStorageKey(prefix, key), value),
    removeItem: (key: string) =>
      storage.removeItem(getPrefixedStorageKey(prefix, key)),
  }
}
