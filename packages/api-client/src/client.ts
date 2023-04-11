import 'setimmediate'
import { EventEmitter } from 'events'
import Queue from 'better-queue'
import MemoryStore from 'better-queue-memory'
import axios, { AxiosResponse } from 'axios'
import { auth } from '@tryrolljs/sdk'
import { Config, Request, Event } from './types'
import { concatBaseAndRelativeUrls, isAbsoluteUrl } from './utils'

export default class Client extends EventEmitter {
  private config: Config
  private authSdk: auth.SDK | auth.ClientSDK
  private queue: Queue

  constructor(config: Config, authSdk: auth.SDK | auth.ClientSDK) {
    super()

    this.config = config
    this.authSdk = authSdk
    this.queue = new Queue(
      async (call, cb) => {
        try {
          const response = await call()
          cb(undefined, response)
        } catch (e) {
          cb(e, undefined)
        }
      },
      { concurrent: 1, store: new MemoryStore() },
    )
  }

  private getHeaders = (authorization = false) => {
    const headers = {
      'Content-Type': 'application/json',
      ...(this.config.extraHeaders ?? {}),
      Authorization: undefined as string | undefined,
    }

    const accessToken = this.authSdk.getAccessToken()
    if (authorization && this.authSdk.getAccessToken()) {
      headers.Authorization = `Bearer ${accessToken}`
    }
    return headers
  }

  private getOptions = ({
    url,
    method,
    body,
    authorization,
    headers,
  }: Request) => {
    const options = {
      url,
      method,
      headers: this.getHeaders(authorization),
      data: body,
    }

    if (headers) {
      options.headers = { ...options.headers, ...headers }
    }

    if (this.config.baseUrl && !isAbsoluteUrl(url)) {
      options.url = concatBaseAndRelativeUrls(this.config.baseUrl, url)
    }

    return options
  }

  public call = <T = any>(request: Request) => {
    return new Promise<T>((resolve, reject) => {
      if (
        request.authorization &&
        'isTokenExpired' in this.authSdk &&
        this.authSdk.isTokenExpired()
      ) {
        this.queue.push(this.authSdk.refreshTokens)
      }

      this.queue.push(async () => {
        try {
          const response = await axios<T>(this.getOptions(request))
          return resolve(response.data)
        } catch (e: any) {
          if (e.response) {
            if (e.response.status === 401) {
              this.emit(Event.Unauthorized, e.response)
            }

            reject(this.parseResponseError(e.response))
          }

          reject(e)
        }
      })
    })
  }

  private parseResponseError = (response: AxiosResponse) => {
    if (typeof response.data === 'object') {
      const error = response.data?.errors?.[0] ?? response.data
      return {
        message: error.message ?? '',
        details: error.details ?? '',
        errorCode: error.errorCode ?? 0,
        status: response.status,
      }
    }

    return { message: response.data, status: response.status }
  }
}
