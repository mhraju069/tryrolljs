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
