import { requestToken, getLogInUrl, getLogOutUrl } from './api'
import {
  CodeVerifierMissingError,
  IdTokenMissingError,
  NotEnoughDataToRefreshError,
} from './errors'
import {
  OauthConfig,
  Storage,
  Token,
  GrantType,
  RequestTokenResponseData,
} from './types'
import {
  getRandomString,
  isLastUpdateTimestampExpired,
  pkceChallengeFromVerifier,
  safeJsonParse,
} from './utils'

export const TOKEN_STORAGE_KEY = 'ROLL_AUTHSDK_TOKEN'
export const CODE_STORAGE_KEY = 'ROLL_AUTHSDK_CODE'
export const CODE_VERIFIER_STORAGE_KEY = 'ROLL_AUTHSDK_CODE_VERIFIER'

class SDK {
  private readonly config: OauthConfig
  private readonly storage: Storage
  private token?: Token

  constructor(config: OauthConfig, storage: Storage) {
    this.config = config
    this.storage = storage
  }

  public refreshTokens = async (force = false) => {
    const code = await this.storage.getItem(CODE_STORAGE_KEY)
    const hasEnoughDataToRefresh = !!this.token?.refresh_token && !!code

    if (!hasEnoughDataToRefresh) {
      throw new NotEnoughDataToRefreshError()
    }

    if (this.isTokenExpired() || force) {
      const response = await requestToken({
        issuerUrl: this.config.issuerUrl,
        grantType: GrantType.RefreshToken,
        redirectUri: this.config?.redirectUrl,
        clientId: this.config?.clientId,
        refreshToken: this.token!.refresh_token!,
        code,
      })

      await this.saveTokenFromResponse(response.data)
    }
  }

  public exchangeCodeForToken = async (code: string) => {
    if (this.getAccessToken()) {
      return
    }

    const cachedCodeVerifier = await this.storage.getItem(
      CODE_VERIFIER_STORAGE_KEY,
    )
    if (!cachedCodeVerifier) {
      throw new CodeVerifierMissingError()
    }

    const response = await requestToken({
      issuerUrl: this.config.issuerUrl,
      grantType: GrantType.AuthorizationCode,
      redirectUri: this.config?.redirectUrl,
      clientId: this.config?.clientId,
      codeVerifier: cachedCodeVerifier,
      code,
    })

    await this.setCode(code)
    await this.saveTokenFromResponse(response.data)
  }

  private saveTokenFromResponse = async (data: RequestTokenResponseData) => {
    if (data.error) {
      await this.clear()
      throw new Error(data.error)
    } else {
      await this.setToken({
        ...data,
        last_update_at: new Date().getTime(),
      })
    }
  }

  public restoreTokenFromCache = async () => {
    const cache = await this.getCache()

    await Promise.all([
      cache.code && this.setCode(cache.code),
      cache.codeVerifier && this.setCodeVerifier(cache.codeVerifier),
      cache.token && this.setToken(cache.token),
    ])
  }

  private getCache = async () => {
    const token = await this.storage.getItem(TOKEN_STORAGE_KEY)
    const code = await this.storage.getItem(CODE_STORAGE_KEY)
    const codeVerifier = await this.storage.getItem(CODE_VERIFIER_STORAGE_KEY)

    const parsedToken =
      typeof token === 'string' ? (safeJsonParse(token) as Token) : token
    const cache = { token: parsedToken, code, codeVerifier }
    return cache
  }

  public clear = async () => {
    await Promise.all(
      [this.setToken, this.setCode, this.setCodeVerifier].map((fn) =>
        fn(undefined),
      ),
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

  public getLogInUrl = async () => {
    const minVerifierLength = 43
    const codeVerifier = getRandomString(minVerifierLength)
    const codeChallenge = await pkceChallengeFromVerifier(codeVerifier)

    await this.setCodeVerifier(codeVerifier)

    return getLogInUrl({ ...this.config, codeChallenge })
  }

  public getLogOutUrl = async () => {
    const idToken = this.getIdToken()
    if (!idToken) {
      throw new IdTokenMissingError()
    }

    const { issuerUrl, logoutRedirectUrl: redirectUrl } = this.config

    await this.clear()

    return getLogOutUrl({
      issuerUrl,
      redirectUrl,
      idToken,
    })
  }

  private setCode = async (code?: string) => {
    if (code) {
      await this.storage.setItem(CODE_STORAGE_KEY, code)
    } else {
      await this.storage.removeItem(CODE_STORAGE_KEY)
    }
  }

  private setCodeVerifier = async (codeVerifier?: string) => {
    if (codeVerifier) {
      await this.storage.setItem(CODE_VERIFIER_STORAGE_KEY, codeVerifier)
    } else {
      await this.storage.removeItem(CODE_VERIFIER_STORAGE_KEY)
    }
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
