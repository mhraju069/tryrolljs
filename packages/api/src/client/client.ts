import 'setimmediate'
import { EventEmitter } from 'events'
import Queue from 'better-queue'
import MemoryStore from 'better-queue-memory'
import axios from 'axios'
import { Config, Parsers, Handlers, Request, Event } from './types'
import { concatBaseAndRelativeUrls, isAbsoluteUrl } from './utils'

export default class Client extends EventEmitter {
  private config: Config
  private parsers: Parsers
  private handlers: Handlers
  private queue: Queue

  constructor(config: Config, parsers: Parsers, handlers: Handlers) {
    super()

    this.config = config
    this.parsers = parsers
    this.handlers = handlers
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
      'X-Client-Version': this.config.getClientVersion?.(),
      Authorization: undefined as string | undefined,
    }

    if (authorization && this.config.getAuthorization()) {
      headers.Authorization = this.config.getAuthorization()
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

    if (this.config.getApiUrl && !isAbsoluteUrl(url)) {
      const apiUrl = this.config.getApiUrl()
      options.url = concatBaseAndRelativeUrls(apiUrl, url)
    }

    return options
  }

  public call = <T = any>(request: Request) => {
    return new Promise<T>((resolve, reject) => {
      if (request.authorization && this.config.getAuthorizationExpired()) {
        this.queue.push(this.handlers.refresh)
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

            reject(await this.parsers.error(e.response))
          }

          reject(e)
        }
      })
    })
  }
}
