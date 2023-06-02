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
