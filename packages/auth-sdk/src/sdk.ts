import { EventEmitter } from 'events'
import { getUser } from './api'
import CodeTokenInteraction from './code-token-interaction/code-token-interaction'
import { NotEnoughDataToRefreshError, UserIdRequiredError } from './errors'
import {
  Config,
  Event,
  RequestTokenResponseData,
  TokenInteraction,
  User,
} from './types'
import { isLastUpdateTimestampExpired } from './utils'
import { InMemoryStore, Store } from './store'

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
    const user = await getUser({
      accessToken: newToken.access_token,
      apiUrl: this.config.apiUrl,
    })

    await this.checkTokenResponse(newToken)
    const userWithToken = {
      ...user.data.data,
      token: { ...newToken, last_update_at: new Date().getTime() },
    }
    await this.store.update('user', user.data.data.userID, userWithToken)
    this.emit(Event.UserUpdated, userWithToken)
  }

  public generateToken = async (options?: any, userId?: string) => {
    const token = await this.getToken(userId)
    if (token) {
      return
    }

    const newToken = await this.interaction.generateToken(options)
    const user = await getUser({
      accessToken: newToken.access_token,
      apiUrl: this.config.apiUrl,
    })

    await this.checkTokenResponse(newToken)
    const userWithToken = {
      ...user.data.data,
      token: { ...newToken, last_update_at: new Date().getTime() },
    }
    await this.store.create('user', {
      id: user.data.data.userID,
      ...user.data.data,
      token: { ...newToken, last_update_at: new Date().getTime() },
    })
    this.emit(Event.UserCreated, userWithToken)
  }

  public syncSession = async (userId?: string) => {
    const token = await this.getToken(userId)
    if (!token) {
      return
    }
    const user = await getUser({
      accessToken: token.access_token,
      apiUrl: this.config.apiUrl,
    })

    await this.checkTokenResponse(token)
    const userWithToken = {
      ...user.data.data,
      token: { ...token, last_update_at: new Date().getTime() },
    }
    await this.store.update('user', user.data.data.userID, {
      ...user.data.data,
      token: { ...token, last_update_at: new Date().getTime() },
    })
    this.emit(Event.UserUpdated, userWithToken)
  }

  public isTokenExpired = async (userId?: string) => {
    const token = await this.getToken(userId)
    return isLastUpdateTimestampExpired(
      token?.last_update_at,
      token?.expires_in,
    )
  }

  private checkTokenResponse = async (response: RequestTokenResponseData) => {
    if (response.error) {
      throw new Error(response.error)
    }
  }

  public getConfig = () => {
    return this.config
  }

  public getToken = async (userId?: string) => {
    const user = await this.getUser(userId)
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
    const user = await this.getUser(userId)
    if (user) {
      this.store.delete('user', user.userID)
      this.emit(Event.UserUpdated, undefined)
    }
  }

  public getUser = async (userId?: string) => {
    const count = await this.store.count('user')
    if (!userId) {
      if (count > 1) {
        throw new UserIdRequiredError()
      }

      const users = await this.store.readAll<User>('user')
      return users[0]
    }

    return await this.store.read<User>('user', userId)
  }
}

export default SDK
