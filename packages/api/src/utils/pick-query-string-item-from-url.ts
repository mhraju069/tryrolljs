import * as qs from 'qs'

const pickQueryStringItemFromUrl = (url: string, key: string): string => {
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

export default pickQueryStringItemFromUrl
