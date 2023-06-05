import { requestToken } from './api'
import { Storage, Config, Token, RequestTokenResponseData } from './types'
import { safeJsonParse } from './utils'

export const TOKEN_STORAGE_KEY = 'ROLL_AUTHSDK_CLIENT_CREDENTIALS_TOKEN'

class SDK {
  private readonly config: Config
  private readonly storage: Storage
  private token?: Token

  constructor(config: Config, storage: Storage) {
    this.config = config
    this.storage = storage
  }

  public generateToken = async () => {
    if (this.getAccessToken()) {
      return
    }

    const response = await requestToken({
      issuerUrl: this.config.issuerUrl,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      scopes: this.config.scopes,
    })

    await this.saveTokenFromResponse(response.data)
  }

  private saveTokenFromResponse = async (data: RequestTokenResponseData) => {
    if (data.error) {
      await this.clear()
      throw new Error(data.error)
    } else {
      await this.setToken(data)
    }
  }

  public restoreTokenFromCache = async () => {
    const cache = await this.getCache()

    await this.setToken(cache.token)
  }

  private getCache = async () => {
    const token = await this.storage.getItem(TOKEN_STORAGE_KEY)
    const parsedToken =
      typeof token === 'string' ? (safeJsonParse(token) as Token) : undefined
    const cache = { token: parsedToken }
    return cache
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

  private setToken = async (token?: Token) => {
    this.token = token
    if (token) {
      await this.storage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token))
    } else {
      await this.storage.removeItem(TOKEN_STORAGE_KEY)
    }
  }
}

export default SDK
