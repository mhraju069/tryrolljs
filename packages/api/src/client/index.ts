import Queue from 'better-queue'
// @ts-ignore
import MemoryStore from 'better-queue-memory'
import axios, { AxiosResponse } from 'axios'

interface Request {
  url: string
  method: string
  body?: object
  authorization?: boolean
  override?: { headers?: Record<string, unknown> }
}

export default class Client {
  private getClientVersion: () => string
  private getAuthorization: () => string | undefined
  private isAuthorizationExpired: () => boolean
  private handleRefresh: () => unknown
  private handleError: <T>(response: AxiosResponse<T>) => unknown
  private queue: Queue

  constructor(
    getClientVersion: () => string,
    getAuthorization: () => string | undefined,
    isAuthorizationExpired: () => boolean,
    handleRefresh: () => {},
    handleError: () => unknown,
  ) {
    this.getClientVersion = getClientVersion
    this.getAuthorization = getAuthorization
    this.isAuthorizationExpired = isAuthorizationExpired
    this.handleRefresh = handleRefresh
    this.handleError = handleError
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
      'X-Client-Version': this.getClientVersion(),
      Authorization: undefined as string | undefined,
    }

    if (authorization && this.getAuthorization()) {
      headers.Authorization = this.getAuthorization()
    }
    return headers
  }

  private getOptions = ({
    url,
    method,
    body,
    authorization,
    override,
  }: Request) => {
    const options = {
      url,
      method,
      headers: this.getHeaders(authorization),
      data: body,
    }

    if (override?.headers) {
      options.headers = { ...options.headers, ...override.headers }
    }

    return options
  }

  public call = <T>(request: Request) => {
    return new Promise((resolve, reject) => {
      if (request.authorization && this.isAuthorizationExpired()) {
        this.queue.push(this.handleRefresh)
      }

      this.queue.push(async () => {
        try {
          const response = await axios<T>(this.getOptions(request))
          return resolve(this.handleResponse(response))
        } catch (e) {
          reject(e)
        }
      })
    })
  }

  private handleResponse = <T>(response: AxiosResponse<T>) => {
    const { status } = response

    switch (status) {
      case 204:
        break

      case 200:
        return response.data

      default:
        return this.handleError(response)
    }
  }
}
