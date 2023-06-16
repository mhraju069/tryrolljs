import { NonNodeEnvironmentError } from './errors'
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

export const makeInMemoryStorage = (): Storage => {
  const storage: Record<string, string> = {}

  return {
    setItem: function (key: string, value: string) {
      storage[key] = value || ''
    },
    getItem: function (key: string) {
      return key in storage ? storage[key] : undefined
    },
    removeItem: function (key: string) {
      delete storage[key]
    },
  }
}

export const throwIfNotNode = () => {
  const isNode =
    typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.node != null
  if (!isNode) {
    throw new NonNodeEnvironmentError()
  }
}
