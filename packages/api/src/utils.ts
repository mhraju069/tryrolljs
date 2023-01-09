import * as qs from 'qs'

export const getRandomString = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

export const pickQueryStringItemFromUrl = (
  url: string,
  key: string,
): string => {
  const queryString = url.split('?')[1]

  if (!queryString) {
    return ''
  }

  const query = qs.parse(queryString)

  if (query.redirect_url && typeof query.redirect_url === 'string') {
    return pickQueryStringItemFromUrl(query.redirect_url, key)
  }

  if (query[key] && typeof query[key] === 'string') {
    return query[key] as string
  }

  return ''
}
