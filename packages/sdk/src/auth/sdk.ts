import { EventEmitter } from 'events'
import { auth } from '@tryrolljs/api'
import {
  IdTokenMissingError,
  NoCacheError,
  NotAuthorizedCacheError,
  NotEnoughDataToRefreshError,
} from './errors'
import {
  OauthConfig,
  Storage,
  Cache,
  AuthState,
  Event,
  GrantType,
} from './types'
import { isLastUpdateTimestampExpired } from './utils'

export const STORAGE_KEY = 'ROLL_AUTHSDK_AUTH'

class AuthSDK extends EventEmitter {
  private readonly oauthConfig: OauthConfig
  private readonly storage: Storage
  private authState?: AuthState
  private authCode?: string

  constructor(oauthConfig: OauthConfig, storage: Storage) {
    super()

    this.oauthConfig = oauthConfig
    this.storage = storage

    this.initializeStorageSync()
  }

  private initializeStorageSync = () => {
    this.on(Event.AuthStateChange, async (authState?: AuthState) => {
      if (authState) {
        await this.storage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            authState,
            authCode: this.authCode,
            oauthConfig: this.oauthConfig,
          }),
        )
      } else {
        await this.storage.setItem(STORAGE_KEY, undefined)
      }
    })
  }

  public refreshTokens = async (force = false) => {
    const hasEnoughDataToRefresh =
      !!this.authState?.refresh_token && !!this.authCode

    if (!hasEnoughDataToRefresh) {
      throw new NotEnoughDataToRefreshError()
    }

    if (this.isTokenExpired() || force) {
      const response = await auth.requestToken({
        issuerUrl: this.oauthConfig.issuerUrl,
        grantType: GrantType.RefreshToken,
        clientId: this.oauthConfig?.clientId,
        redirectUri: this.oauthConfig?.redirectUrl,
        refreshToken: this.authState!.refresh_token!,
        code: this.authCode!,
      })

      await this.handleTokenResponse(response.data)
    }
  }

  public makeSession = async (authCode: string) => {
    if (this.getAccessToken()) {
      return
    }

    const response = await auth.requestToken({
      issuerUrl: this.oauthConfig.issuerUrl,
      code: authCode,
      grantType: GrantType.AuthorizationCode,
      redirectUri: this.oauthConfig?.redirectUrl,
      clientId: this.oauthConfig?.clientId,
    })

    this.setAuthCode(authCode)
    await this.handleTokenResponse(response.data)
  }

  private handleTokenResponse = async (
    tokenResponseData: auth.types.RequestTokenResponseData,
  ) => {
    if (tokenResponseData.error) {
      await this.clear()
      throw new Error(tokenResponseData.error)
    } else {
      await this.setAuthState({
        ...tokenResponseData,
        last_update_at: new Date().getTime(),
      })
    }
  }

  public restoreFromCache = async () => {
    const cache = await this.getCache()

    const isAuthorized = !!cache?.authState?.access_token
    if (!isAuthorized) {
      throw new NotAuthorizedCacheError()
    }

    this.setAuthCode(cache.authCode)
    await this.setAuthState(cache?.authState)
  }

  private getCache = async () => {
    try {
      const cache = await this.storage.getItem(STORAGE_KEY)

      if (!cache) {
        throw new NoCacheError()
      }

      return JSON.parse(cache) as Cache
    } catch (e) {
      throw new NoCacheError()
    }
  }

  public clear = async () => {
    this.setAuthState(undefined)
  }

  public isTokenExpired = () => {
    return isLastUpdateTimestampExpired(
      this.authState?.last_update_at,
      this.authState?.expires_in,
    )
  }

  public getAccessToken = () => {
    return this.authState?.access_token
  }

  public getIdToken = () => {
    return this.authState?.id_token
  }

  public getRefreshToken = () => {
    return this.authState?.refresh_token
  }

  public getExpiresIn = () => {
    return this.authState?.expires_in
  }

  public getError = () => {
    return this.authState?.error
  }

  public getLogInUrl = () => {
    return auth.getLogInUrl(this.oauthConfig)
  }

  public getLogOutUrl = () => {
    const idToken = this.getIdToken()
    if (!idToken) {
      throw new IdTokenMissingError()
    }
    return auth.getLogOutUrl({
      issuerUrl: this.oauthConfig.issuerUrl,
      redirectUrl: this.oauthConfig.logoutRedirectUrl,
      idToken,
    })
  }

  private setAuthCode = (authCode?: string) => {
    this.authCode = authCode
  }

  private setAuthState = async (authState?: AuthState) => {
    this.authState = authState
    this.emit(Event.AuthStateChange, authState)
  }
}

export default AuthSDK
