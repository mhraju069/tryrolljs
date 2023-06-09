import 'setimmediate'
import { EventEmitter } from 'events'
import Queue from 'better-queue'
import MemoryStore from 'better-queue-memory'
import axios, { AxiosResponse } from 'axios'
import SDK from '@tryrolljs/auth-sdk'
import { Config, Request, Event } from './types'
import { concatBaseAndRelativeUrls, isAbsoluteUrl } from './utils'
import { CouldntRefreshTokensError } from './errors'

export default class Client extends EventEmitter {
  private config: Config
  private sdk: SDK
  private queue: Queue

  private isRefreshScheduled: boolean = false
  private isRefreshInProgress: boolean = false

  constructor(config: Config, sdk: SDK) {
    super()

    this.config = config
    this.sdk = sdk
    this.queue = this.makeQueue()
  }

  public call = <T = any>(request: Request) => {
    return new Promise<T>(async (resolve, reject) => {
      const queue = this.getQueue()
      const token = await this.sdk.getToken()
      const isExpired = await this.sdk.isTokenExpired()
      const shouldScheduleRefresh =
        request.authorization && token && isExpired && !this.isRefreshScheduled

      if (shouldScheduleRefresh) {
        // Destory the queue when refresh fail, initialize the new one & throws an error
        const onRefreshError = () => {
          queue.destroy(() => {
            this.resetQueue()
            reject(new CouldntRefreshTokensError())
          })
        }

        this.isRefreshScheduled = true
        queue.push(this.makeRefreshTask(onRefreshError))
      }

      queue.push(this.makeRequestTask(request, resolve, reject))
    })
  }

  public getBaseUrl = (): string => {
    return this.config.baseUrl || ''
  }

  private getQueue = () => {
    return this.queue
  }

  private resetQueue = () => {
    this.queue = this.makeQueue()
  }

  private makeQueue = () => {
    const queue = new Queue(
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
          if (this.isRefreshInProgress) {
            cb(null, false)
          } else {
            cb(null, true)
          }
        },
      },
    )

    return queue
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

  private makeRefreshTask = (onError: () => void) => async () => {
    this.isRefreshInProgress = true

    try {
      await this.sdk.refreshToken()
      const token = await this.sdk.getToken()
      // Unsuccessful refresh leads to an empty token in the SDK
      if (!token) {
        onError()
      }
    } catch (e) {
      onError()
    }

    this.isRefreshScheduled = false
    this.isRefreshInProgress = false
  }

  private makeRequestTask =
    <T>(
      request: Request,
      onSuccess: (value: T) => void,
      onError: (reason?: any) => void,
    ) =>
    async () => {
      try {
        const response = await axios<T>(await this.getOptions(request))
        return onSuccess(response.data)
      } catch (e: any) {
        if (e.response) {
          if (e.response.status === 401) {
            this.emit(Event.Unauthorized, e.response)
          }

          onError(this.parseResponseError(e.response))
        }

        onError(e)
      }
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
