import { EventEmitter } from 'events'
import CodeTokenInteraction from './code-token-interaction/code-token-interaction'
import { NotEnoughDataToRefreshError, UserIdRequiredError } from './errors'
import {
  Config,
  Credentials,
  Event,
  RequestTokenResponseData,
  TokenInteraction,
} from './types'
import { isLastUpdateTimestampExpired } from './utils'
import { InMemoryStore, Store } from './store'

const NO_USER_ID = 'nouser'

class SDK extends EventEmitter {
  private readonly interaction: TokenInteraction<any>
  private readonly store: Store

  constructor(
    private readonly config: Config,
    store?: Store,
    interaction?: TokenInteraction<any>,
  ) {
    super()

    this.config = config
    this.store = store ?? new InMemoryStore()

    this.interaction =
      interaction ?? new CodeTokenInteraction(config, this.store)
  }

  public refreshToken = async (force?: boolean, userId?: string) => {
    const token = await this.getToken(userId)
    if (!token) {
      throw new NotEnoughDataToRefreshError()
    }

    const isTokenExpired = await this.isTokenExpired(userId)
    if (!isTokenExpired && !force) {
      return
    }

    const newToken = await this.interaction.refreshToken(token)
    const user = await this.interaction.getUser?.(newToken)

    await this.checkTokenResponse(newToken)

    const credentials = {
      user: user,
      token: { ...newToken, last_update_at: new Date().getTime() },
    }
    await this.store.update(
      'credentials',
      user ? user.userID : NO_USER_ID,
      credentials,
    )
    this.emit(Event.CredentialsUpdated, credentials)
  }

  public generateToken = async (options?: any, userId?: string) => {
    const token = await this.getToken(userId)
    if (token) {
      return
    }

    const newToken = await this.interaction.generateToken(options)
    const user = await this.interaction.getUser?.(newToken)

    await this.checkTokenResponse(newToken)
    const credentials = {
      user,
      token: { ...newToken, last_update_at: new Date().getTime() },
    }
    await this.store.create(
      'credentials',
      user ? user.userID : NO_USER_ID,
      credentials,
    )
    this.emit(Event.CredentialsCreated, credentials)
  }

  public syncSession = async (userId?: string) => {
    const token = await this.getToken(userId)
    if (!token) {
      return
    }
    const user = await this.interaction.getUser?.(token)

    await this.checkTokenResponse(token)
    const credentials = {
      user,
      token: { ...token, last_update_at: new Date().getTime() },
    }
    await this.store.update(
      'credentials',
      user ? user.userID : NO_USER_ID,
      credentials,
    )
    this.emit(Event.CredentialsUpdated, credentials)
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

      const users = await this.store.readAll<Credentials>('credentials')
      return users[0]
    }

    return await this.store.read<Credentials>('credentials', userId)
  }

  private checkTokenResponse = async (response: RequestTokenResponseData) => {
    if (response.error) {
      throw new Error(response.error)
    }
  }
}

export default SDK
