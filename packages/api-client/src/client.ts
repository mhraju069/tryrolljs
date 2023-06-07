import 'setimmediate'
import { EventEmitter } from 'events'
import Queue from 'better-queue'
import MemoryStore from 'better-queue-memory'
import axios, { AxiosResponse } from 'axios'
import SDK from '@tryrolljs/auth-sdk'
import { Config, Request, Event } from './types'
import { concatBaseAndRelativeUrls, isAbsoluteUrl } from './utils'
import { CouldntRefreshTokens } from './errors'

export default class Client extends EventEmitter {
  private config: Config
  private sdk: SDK
  private queue: Queue

  private isRefreshScheduled: boolean = false
  private isBlocked: boolean = false

  constructor(config: Config, sdk: SDK) {
    super()

    this.config = config
    this.sdk = sdk
    this.queue = this.makeQueue()
  }

  makeQueue = () =>
    new Queue(
      async (call, cb) => {
        try {
          const response = await call()
          cb(undefined, response)
        } catch (e) {
          cb(e, undefined)
        }
      },
      {
        concurrent: 10,
        store: new MemoryStore(),
        precondition: (cb) => {
          if (this.isBlocked) {
            cb(null, false)
          } else {
            cb(null, true)
          }
        },
      },
    )

  public getBaseUrl = (): string => {
    return this.config.baseUrl || ''
  }

  private getHeaders = async (authorization = false) => {
    const headers = {
      'Content-Type': 'application/json',
      ...(this.config.extraHeaders ?? {}),
      Authorization: undefined as string | undefined,
    }

    const token = await this.sdk.getToken()
    if (authorization && token) {
      headers.Authorization = `Bearer ${token.access_token}`
    }
    return headers
  }

  private getOptions = async ({
    url,
    method,
    body,
    authorization,
    headers,
  }: Request) => {
    const options = {
      url,
      method,
      headers: await this.getHeaders(authorization),
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

  private makeRefreshTask = (onDestroy: () => void) => async () => {
    this.isBlocked = true

    try {
      await this.sdk.refreshToken()
      const token = await this.sdk.getToken()
      // Unsuccessful refresh leads to an empty token in the SDK
      if (!token) {
        this.queue.destroy(onDestroy)
      }
    } catch (e) {
      this.queue.destroy(onDestroy)
    }

    this.isRefreshScheduled = false
    this.isBlocked = false
  }

  private makeRequestTask =
    <T>(
      request: Request,
      resolve: (value: T) => void,
      reject: (reason?: any) => void,
    ) =>
    async () => {
      try {
        const response = await axios<T>(await this.getOptions(request))
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
    }

  public call = <T = any>(request: Request) => {
    return new Promise<T>(async (resolve, reject) => {
      const onDestroy = () => {
        this.queue = this.makeQueue()
        reject(new CouldntRefreshTokens())
      }
      const token = await this.sdk.getToken()
      const isExpired = await this.sdk.isTokenExpired()
      if (
        request.authorization &&
        token &&
        isExpired &&
        !this.isRefreshScheduled
      ) {
        this.isRefreshScheduled = true
        this.queue.push(this.makeRefreshTask(onDestroy))
      }
      this.queue.push(this.makeRequestTask(request, resolve, reject))
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
