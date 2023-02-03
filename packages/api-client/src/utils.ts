export const isAbsoluteUrl = (url: string) => /^https?:\/\//i.test(url)

export const concatBaseAndRelativeUrls = (
  baseUrl: string,
  relativeUrl: string,
) => {
  const isRelativeUrlStartsWithSlash = relativeUrl.startsWith('/')

  if (isRelativeUrlStartsWithSlash) {
    return baseUrl + relativeUrl
  }

  return `${baseUrl}/${relativeUrl}`
}
