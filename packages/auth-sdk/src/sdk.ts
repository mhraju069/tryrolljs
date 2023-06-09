import CodeTokenInteraction from './code-token-interaction/code-token-interaction'
import { NotEnoughDataToRefreshError } from './errors'
import {
  Config,
  Storage,
  Token,
  RequestTokenResponseData,
  TokenInteraction,
  StorageKey,
} from './types'
import {
  isLastUpdateTimestampExpired,
  makeInMemoryStorage,
  safeJsonParse,
} from './utils'

class SDK {
  private readonly interaction: TokenInteraction<any>
  private readonly storage: Storage

  constructor(
    private readonly config: Config,
    storage?: Storage,
    interaction?: TokenInteraction<any>,
  ) {
    this.config = config
    this.storage = storage ?? makeInMemoryStorage()
    this.interaction =
      interaction ?? new CodeTokenInteraction(config, this.storage)
  }

  public refreshToken = async (force?: boolean) => {
    const token = await this.getToken()
    if (!token || !token.refresh_token) {
      throw new NotEnoughDataToRefreshError()
    }

    const isTokenExpired = await this.isTokenExpired()
    if (!isTokenExpired && !force) {
      return
    }

    const newToken = await this.getInteraction().refreshToken(token)
    if (newToken) {
      await this.storeToken(newToken)
    }
  }

  public generateToken = async (options?: any) => {
    const token = await this.getToken()
    if (token) {
      return
    }

    const newToken = await this.getInteraction().generateToken(options)
    await this.storeToken(newToken)
  }

  public restoreCache = async () => {
    const token = await this.getToken()

    await Promise.all([
      this.getInteraction().restoreCache?.(),
      token && this.setToken(token),
    ])
  }

  public clearCache = async () => {
    await Promise.all([
      this.setToken(undefined),
      this.getInteraction().clearCache?.(),
    ])
  }

  public isTokenExpired = async () => {
    const token = await this.getToken()
    return isLastUpdateTimestampExpired(
      token?.last_update_at,
      token?.expires_in,
    )
  }

  private storeToken = async (data: RequestTokenResponseData) => {
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

  private setToken = async (token?: Token) => {
    if (token) {
      await this.getStorage().setItem(StorageKey.Token, JSON.stringify(token))
    } else {
      await this.getStorage().removeItem(StorageKey.Token)
    }
  }

  public getConfig = () => {
    return this.config
  }

  public getToken = async () => {
    const token = await this.getStorage().getItem(StorageKey.Token)
    return typeof token === 'string' ? (safeJsonParse(token) as Token) : token
  }

  private getStorage = () => {
    return this.storage
  }

  public getLogInUrl = async () => {
    return this.getInteraction().getLogInUrl?.() ?? ''
  }

  public getLogOutUrl = async () => {
    const token = await this.getToken()
    await this.clearCache()

    if (!token) {
      return ''
    }

    return this.getInteraction().getLogOutUrl?.(token) ?? ''
  }

  private getInteraction = () => this.interaction
}

export default SDK
