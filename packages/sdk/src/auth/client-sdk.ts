import { requestClientToken } from './api'
import { NoCacheError, NotAuthorizedCacheError } from './errors'
import {
  Storage,
  ClientConfig,
  ClientToken,
  RequestClientTokenResponseData,
} from './types'

export const TOKEN_STORAGE_KEY = 'ROLL_AUTHSDK_CLIENT_TOKEN'

class ClientSDK {
  private readonly config: ClientConfig
  private readonly storage: Storage
  private token?: ClientToken

  constructor(config: ClientConfig, storage: Storage) {
    this.config = config
    this.storage = storage
  }

  public generateToken = async () => {
    if (this.getAccessToken()) {
      return
    }

    const response = await requestClientToken({
      issuerUrl: this.config.issuerUrl,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
    })

    await this.saveTokenFromResponse(response.data)
  }

  private saveTokenFromResponse = async (
    data: RequestClientTokenResponseData,
  ) => {
    if (data.error) {
      await this.clear()
      throw new Error(data.error)
    } else {
      await this.setToken(data)
    }
  }

  public restoreTokenFromCache = async () => {
    const cache = await this.getCache()

    const isAuthorized = !!cache?.token?.access_token
    if (!isAuthorized) {
      throw new NotAuthorizedCacheError()
    }

    await this.setToken(cache.token)
  }

  private getCache = async () => {
    try {
      const token = await this.storage.getItem(TOKEN_STORAGE_KEY)

      if (!token) {
        throw new NoCacheError()
      }

      const cache = { token: JSON.parse(token) as ClientToken }
      return cache
    } catch (e) {
      throw new NoCacheError()
    }
  }

  public clear = async () => {
    await Promise.all([this.setToken].map((fn) => fn(undefined)))
  }

  public getAccessToken = () => {
    return this.token?.access_token
  }

  public getExpiresIn = () => {
    return this.token?.expires_in
  }

  public getError = () => {
    return this.token?.error
  }

  private setToken = async (token?: ClientToken) => {
    this.token = token
    if (token) {
      await this.storage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token))
    } else {
      await this.storage.removeItem(TOKEN_STORAGE_KEY)
    }
  }
}

export default ClientSDK
