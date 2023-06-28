import { EventEmitter } from 'events'
import CodeTokenInteraction from './code-token-interaction/code-token-interaction'
import { NotEnoughDataToRefreshError, UserIdRequiredError } from './errors'
import {
  Config,
  Credentials,
  Event,
  Override,
  RequestTokenResponseData,
  Token,
  TokenInteraction,
} from './types'
import { isLastUpdateTimestampExpired } from './utils'
import { InMemoryStore, Store } from './store'

const NO_USER_ID = 'nouser'

class SDK extends EventEmitter {
  private readonly interaction: TokenInteraction<any>
  private readonly store: Store
  private readonly override?: Override

  constructor(
    private readonly config: Config,
    store?: Store,
    interaction?: TokenInteraction<any>,
    override?: Override,
  ) {
    super()

    this.config = config
    this.store = store ?? new InMemoryStore()
    this.interaction =
      interaction ?? new CodeTokenInteraction(config, this.store)
    this.override = override
  }

  public refreshToken = async (force?: boolean, userId?: string) => {
    const credentials = await this.getCredentials(userId)
    if (!credentials) {
      throw new NotEnoughDataToRefreshError()
    }

    const isTokenExpired = await this.isTokenExpired(userId)
    if (!isTokenExpired && !force) {
      return
    }

    const newToken = await this.interaction.refreshToken(credentials.token)
    const user = await this.getUser(newToken, userId)

    await this.checkTokenResponse(newToken)

    const newCredentials: Credentials = {
      id: user ? user.userID : NO_USER_ID,
      user: user,
      token: { ...newToken, last_update_at: new Date().getTime() },
      interactionType: this.interaction.type,
    }
    await this.store.update<Credentials>('credentials', newCredentials)
    this.emit(Event.CredentialsUpdated, newCredentials)

    return newCredentials
  }

  public generateToken = async (options?: any, userId?: string) => {
    const credentials = await this.getCredentials(userId)
    if (credentials) {
      return credentials
    }

    const newToken = await this.interaction.generateToken(options)
    const user = await this.getUser(newToken, userId)

    await this.checkTokenResponse(newToken)
    const newCredentials = {
      id: user ? user.userID : NO_USER_ID,
      user,
      token: { ...newToken, last_update_at: new Date().getTime() },
      interactionType: this.interaction.type,
    }
    await this.store.create<Credentials>('credentials', newCredentials)
    this.emit(Event.CredentialsCreated, newCredentials)

    return newCredentials
  }

  public syncSession = async (userId?: string) => {
    const token = await this.getToken(userId)
    if (!token) {
      return
    }
    const user = await this.getUser(token, userId)

    await this.checkTokenResponse(token)
    const credentials: Credentials = {
      id: user ? user.userID : NO_USER_ID,
      user,
      token: { ...token, last_update_at: new Date().getTime() },
      interactionType: this.interaction.type,
    }
    await this.store.update<Credentials>('credentials', credentials)
    this.emit(Event.CredentialsUpdated, credentials)
    return credentials
  }

  public isTokenExpired = async (userId?: string) => {
    const token = await this.getToken(userId)
    return isLastUpdateTimestampExpired(
      token?.last_update_at,
      token?.expires_in,
    )
  }

  public getConfig = () => {
    return this.config
  }

  public getToken = async (userId?: string) => {
    const user = await this.getCredentials(userId)
    if (user) {
      return user.token
    }
    return undefined
  }

  public getLogInUrl = async () => {
    return this.interaction.getLogInUrl?.() ?? ''
  }

  public getLogOutUrl = async (userId?: string) => {
    await this.cleanUp(userId)
    const token = await this.getToken(userId)

    if (!token) {
      return ''
    }

    return this.interaction.getLogOutUrl?.(token) ?? ''
  }

  public cleanUp = async (userId?: string) => {
    const credentials = await this.getCredentials(userId)
    if (credentials) {
      this.store.delete(
        'credentials',
        credentials.user ? credentials.user.userID : NO_USER_ID,
      )
      this.emit(Event.CredentialsUpdated, undefined)
    }
  }

  public getCredentials = async (userId?: string) => {
    const count = await this.store.count('credentials')
    if (!userId) {
      if (count > 1) {
        throw new UserIdRequiredError()
      }

      return await this.store.findOne<Credentials>(
        'credentials',
        (credential) => credential.interactionType === this.interaction.type,
      )
    }

    return await this.store.findOne<Credentials>(
      'credentials',
      (credential) =>
        credential.interactionType === this.interaction.type &&
        credential.user?.userID === userId,
    )
  }

  private checkTokenResponse = async (response: RequestTokenResponseData) => {
    if (response.error) {
      throw new Error(response.error)
    }
  }

  private getUser = async (token: Token, userId?: string) => {
    try {
      if (this.override?.getUser) {
        return await this.override.getUser(token)
      }

      if (this.interaction.getUser) {
        return await this.interaction.getUser(token)
      }

      return undefined
    } catch (e) {
      await this.cleanUp(userId)
    }
  }
}

export default SDK
