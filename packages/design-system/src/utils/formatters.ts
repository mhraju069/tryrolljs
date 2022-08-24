export const commafy = (n?: string | number, digits: number = 2) => {
  const fallback = 0

  if (!n) return fallback.toFixed(digits)

  const handleOutput = (num: number) =>
    num.toLocaleString('en-US', {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    })

  if (typeof n === 'string') {
    return handleOutput(Number(n))
  }
  return handleOutput(n)
}

export const truncateText = (str: string, len: number): string => {
  if (str.length < len) return str
  return `${str.substring(0, len)}...`
}
