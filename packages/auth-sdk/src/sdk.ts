import { TOKEN_STORAGE_KEY } from './constants'
import { NotEnoughDataToRefreshError } from './errors'
import {
  Config,
  Storage,
  Token,
  RequestTokenResponseData,
  TokenInteraction,
} from './types'
import { isLastUpdateTimestampExpired, safeJsonParse } from './utils'

class SDK<I extends TokenInteraction<unknown>, C extends Config = Config> {
  private readonly config: C
  private readonly storage: Storage
  private readonly interaction: I
  private token?: Token

  constructor(
    config: C,
    storage: Storage,
    Interaction: new (config_: C, storage_: Storage) => I,
  ) {
    this.config = config
    this.storage = storage
    this.interaction = new Interaction(config, storage)
  }

  public refreshToken = async (force?: boolean) => {
    if (!this.token || !this.token.refresh_token) {
      throw new NotEnoughDataToRefreshError()
    }

    if (!this.isTokenExpired() && !force) {
      return
    }

    const token = await this.interaction.refreshToken?.(this.token)
    if (token) {
      await this.saveTokenFromResponse(token)
    }
  }

  public generateToken = async (...args: Parameters<I['generateToken']>) => {
    if (this.token) {
      return
    }

    const token = await this.interaction.generateToken(args)
    await this.saveTokenFromResponse(token)
  }

  public restoreCachedToken = async () => {
    const token = await this.getTokenFromCache()

    await Promise.all([
      this.interaction.restoreCache?.(),
      token && this.setToken(token),
    ])
  }

  public clearCache = async () => {
    await Promise.all(
      [this.setToken, this.interaction.clearCache].map((fn) => fn?.(undefined)),
    )
  }

  public isTokenExpired = () => {
    return isLastUpdateTimestampExpired(
      this.token?.last_update_at,
      this.token?.expires_in,
    )
  }

  public getAccessToken = () => {
    return this.token?.access_token
  }

  public getIdToken = () => {
    return this.token?.id_token
  }

  public getRefreshToken = () => {
    return this.token?.refresh_token
  }

  public getExpiresIn = () => {
    return this.token?.expires_in
  }

  public getError = () => {
    return this.token?.error
  }

  public getConfig = () => {
    return this.config
  }

  public getStorage = () => {
    return this.storage
  }

  public getLogInUrl = async () => {
    return this.interaction.getLogInUrl?.() ?? ''
  }

  public getLogOutUrl = async () => {
    await this.clearCache()

    if (!this.token) {
      return ''
    }

    return this.interaction.getLogOutUrl?.(this.token) ?? ''
  }

  private saveTokenFromResponse = async (data: RequestTokenResponseData) => {
    if (data.error) {
      await this.clearCache()
      throw new Error(data.error)
    } else {
      await this.setToken({
        ...data,
        last_update_at: new Date().getTime(),
      })
    }
  }

  private getTokenFromCache = async () => {
    const token = await this.storage.getItem(TOKEN_STORAGE_KEY)

    return typeof token === 'string' ? (safeJsonParse(token) as Token) : token
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
