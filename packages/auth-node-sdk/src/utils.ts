import http from 'http'
import sha256 from 'crypto-js/sha256'
import Base64Url from 'crypto-js/enc-base64url'

export const getRandomString = (minLength = 16) => {
  const getFiveRandomChars = () => Math.random().toString(36).slice(-5)
  return Array(Math.round(minLength / 5))
    .fill(0)
    .reduce((acc) => acc + getFiveRandomChars(), '')
}

export const pkceChallengeFromVerifier = async (value: string) => {
  const hash = sha256(value)
  return Base64Url.stringify(hash)
}

export const haltRedirect = (url: string, cookies?: string) => {
  return new Promise<http.IncomingMessage>((resolve, reject) => {
    try {
      const parsedUrl = new URL(url)

      const path =
        parsedUrl.pathname +
        '?' +
        new URLSearchParams(parsedUrl.search).toString()

      const options: http.RequestOptions = {
        path: path,
        port: parsedUrl.port,
        hostname: parsedUrl.hostname,
        method: 'GET',
      }

      if (cookies) {
        options.headers = {
          Cookie: cookies,
        }
      }

      http
        .request(options, (response) => resolve(response))
        .on('error', (error) => reject(error))
        .end()
    } catch (err) {
      reject(err)
    }
  })
}

export const mustGetRedirectUrl = (response: http.IncomingMessage): string => {
  const location = response.headers.location
  if (!location) {
    throw new Error('No redirect location found')
  }

  return location
}

export const mustGetCookies = (response: http.IncomingMessage): string[] => {
  const cookies = response.headers['set-cookie']

  if (!cookies) {
    throw new Error(
      `no cookies found for request ${response} with redirect ${location}`,
    )
  }

  return cookies
}

export const mustGetParam = (url: string, param: string): string => {
  const value = new URLSearchParams(new URL(url).searchParams).get(param)

  if (!value) {
    throw new Error('no query parameter found with name: ' + param)
  }

  return value
}

export const joinCookies = (cookies: string[]) => cookies.join('; ')

export const safeJsonParse = (value: string) => {
  try {
    return JSON.parse(value)
  } catch (e) {
    return undefined
  }
}
