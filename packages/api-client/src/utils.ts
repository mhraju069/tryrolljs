import axios from 'axios'
import { getErrorInterceptor } from 'axios-error-redact'

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

export const getAxiosInstance = () => {
  const axiosInstance = axios.create()
  axiosInstance.interceptors.response.use(undefined, getErrorInterceptor())

  return axiosInstance
}
