import 'setimmediate'
import Queue from 'better-queue'
import MemoryStore from 'better-queue-memory'
import axios, { AxiosResponse } from 'axios'
import SDK from '@roll-network/auth-sdk'
import { Config, Request, RequestManagerState } from './types'
import { concatBaseAndRelativeUrls, isAbsoluteUrl } from './utils'
import { CouldntRefreshTokensError } from './errors'

export default class RequestManager {
  private queue: Queue
  private state: RequestManagerState = {
    isRefreshScheduled: false,
    isRefreshInProgress: false,
  }

  constructor(
    private readonly config: Config,
    private readonly sdk: SDK,
    private readonly userId?: string,
  ) {
    this.config = config
    this.sdk = sdk
    this.queue = this.makeQueue()
    this.userId = userId
  }

  public call = <T = any>(request: Request) => {
    return new Promise<T>(async (resolve, reject) => {
      const queue = this.getQueue()
      const token = await this.sdk.getToken(this.userId)
      const isExpired = await this.sdk.isTokenExpired(this.userId)
      const shouldScheduleRefresh =
        request.authorization &&
        token &&
        isExpired &&
        !this.state.isRefreshScheduled

      if (shouldScheduleRefresh) {
        // Destory the queue when refresh fail, initialize the new one & throws an error
        const onRefreshError = () => {
          queue.destroy(() => {
            this.resetQueue()
            reject(new CouldntRefreshTokensError())
          })
        }

        this.state.isRefreshScheduled = true
        queue.push(this.makeRefreshTask(onRefreshError))
      }

      queue.push(this.makeRequestTask(request, resolve, reject))
    })
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
          if (this.state.isRefreshInProgress) {
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
      ...(this.config.headers ?? {}),
      Authorization: undefined as string | undefined,
    }

    const token = await this.sdk.getToken(this.userId)
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
    this.state.isRefreshInProgress = true

    const onComplete = () => {
      this.state.isRefreshScheduled = false
      this.state.isRefreshInProgress = false
    }

    try {
      const credentials = await this.sdk.refreshToken(false, this.userId)
      onComplete()
      // Unsuccessful refresh leads to empty credentials
      if (!credentials) {
        onError()
      }
    } catch (e) {
      onComplete()
      onError()
    }
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
            await this.sdk.cleanUp(this.userId)
          }

          onError(this.parseResponseError(e.response))
        }

        onError(e)
      }
    }

  private parseResponseError = (response: AxiosResponse) => {
    if (typeof response.data === 'object') {
      const error = response.data?.errors ?? response.data
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
