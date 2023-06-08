import AutoLoginTokenInteraction from './auto-login-token-interaction'
import ClientCredentialsTokenInteraction from './client-credentials-token-interaction'
import CodeTokenInteraction from './code-token-interaction'
import { NotEnoughDataToRefreshError } from './errors'
import {
  Config,
  Storage,
  Token,
  RequestTokenResponseData,
  TokenInteraction,
  InteractionType,
  StorageKey,
} from './types'
import {
  addPrefixToStorage,
  isLastUpdateTimestampExpired,
  safeJsonParse,
} from './utils'

class SDK {
  private readonly interactions: Record<InteractionType, TokenInteraction<any>>
  private readonly storages: Record<InteractionType, Storage>
  private type: InteractionType

  constructor(private readonly config: Config, storage: Storage) {
    this.config = config
    this.type = InteractionType.Code
    this.storages = this.getPrefixedStorages(storage)
    this.interactions = this.getInitialInteractions()
  }

  public interactAs = (type: InteractionType) => {
    this.type = type
    return this
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

  private getPrefixedStorages = (storage: Storage) => {
    return {
      [InteractionType.Code]: addPrefixToStorage(storage, InteractionType.Code),
      [InteractionType.AutoLoginToken]: addPrefixToStorage(
        storage,
        InteractionType.AutoLoginToken,
      ),
      [InteractionType.ClientCredentials]: addPrefixToStorage(
        storage,
        InteractionType.ClientCredentials,
      ),
    }
  }

  private getInitialInteractions = () => {
    return {
      [InteractionType.Code]: new CodeTokenInteraction(
        this.config,
        this.storages[InteractionType.Code],
      ),
      [InteractionType.AutoLoginToken]: new AutoLoginTokenInteraction(
        this.config,
        this.storages[InteractionType.AutoLoginToken],
      ),
      [InteractionType.ClientCredentials]:
        new ClientCredentialsTokenInteraction(
          this.config,
          this.storages[InteractionType.ClientCredentials],
        ),
    }
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

  public getStorage = () => {
    return this.storages[this.type]
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

  private getInteraction = () => this.interactions[this.type]
}

export default SDK
