import 'setimmediate'
import Queue from 'better-queue'
// @ts-ignore
import MemoryStore from 'better-queue-memory'
import axios, { AxiosResponse } from 'axios'

export interface Request {
  url: string
  method: string
  body?: object
  authorization?: boolean
  override?: { headers?: Record<string, unknown> }
}

export type AnyHandler = () => unknown | Promise<unknown>

export type ResponseHandler = <T>(
  response: AxiosResponse<T>,
) => unknown | Promise<unknown>

export default class Client {
  private getClientVersion: () => string
  private getAuthorization: () => string | undefined
  private isAuthorizationExpired: () => boolean
  private handleRefresh: AnyHandler
  private handleError: ResponseHandler
  private handleInvalidAuthorization: ResponseHandler
  private queue: Queue

  constructor(
    getClientVersion: () => string,
    getAuthorization: () => string | undefined,
    isAuthorizationExpired: () => boolean,
    handleRefresh: AnyHandler,
    handleError: ResponseHandler,
    handleInvalidAuthorization: ResponseHandler,
  ) {
    this.getClientVersion = getClientVersion
    this.getAuthorization = getAuthorization
    this.isAuthorizationExpired = isAuthorizationExpired
    this.handleRefresh = handleRefresh
    this.handleError = handleError
    this.handleInvalidAuthorization = handleInvalidAuthorization
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
          return resolve(await this.handleResponse(response))
        } catch (e: any) {
          if (e.response) {
            reject(await this.handleResponse(e.response))
          }

          reject(e)
        }
      })
    })
  }

  private handleResponse = async <T>(response: AxiosResponse<T>) => {
    const { status } = response

    switch (status) {
      case 204:
        return undefined

      case 200:
        return response.data

      case 401:
        return await this.handleInvalidAuthorization(response)

      default:
        return await this.handleError(response)
    }
  }
}
