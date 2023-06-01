import { autoLogin, getLogInUrl, provideConsent, requestToken } from './api'
import {
  Storage,
  Config,
  Token,
  GrantType,
  RequestTokenResponseData,
} from './types'
import {
  getRandomString,
  pkceChallengeFromVerifier,
  haltRedirect,
  mustGetRedirectUrl,
  mustGetCookies,
  mustGetParam,
  joinCookies,
  safeJsonParse,
} from './utils'

export const TOKEN_STORAGE_KEY = 'ROLL_AUTHSDK_CLIENT_CREDENTIALS_TOKEN'
export const CODE_VERIFIER_STORAGE_KEY = 'ROLL_AUTHSDK_CODE_VERIFIER'

class SDK {
  private readonly config: Config
  private readonly storage: Storage
  private token?: Token

  constructor(config: Config, storage: Storage) {
    this.config = config
    this.storage = storage
  }

  public getLogInUrl = async () => {
    const minVerifierLength = 43
    const codeVerifier = getRandomString(minVerifierLength)
    const codeChallenge = await pkceChallengeFromVerifier(codeVerifier)

    await this.setCodeVerifier(codeVerifier)

    return getLogInUrl({ ...this.config, codeChallenge })
  }

  public generateToken = async (autoLoginToken: string) => {
    const loginUrl = await this.getLogInUrl()
    const codeVerifier = await this.storage.getItem(CODE_VERIFIER_STORAGE_KEY)

    let cookies: string[] = []

    const loginRedirectReponse = await haltRedirect(loginUrl)

    const loginRedirectUrl = mustGetRedirectUrl(loginRedirectReponse)
    cookies = cookies.concat(mustGetCookies(loginRedirectReponse))
    const loginChallenge = mustGetParam(loginRedirectUrl, 'login_challenge')

    const autoLoginUrl = await autoLogin(
      this.config.apiUrl,
      autoLoginToken,
      loginChallenge,
      joinCookies(cookies),
    )

    const autoLoginRedirectUrl = await haltRedirect(
      autoLoginUrl,
      joinCookies(cookies),
    )
    const consentUrl = mustGetRedirectUrl(autoLoginRedirectUrl)
    cookies = cookies.concat(mustGetCookies(autoLoginRedirectUrl))
    const consentChallenge = mustGetParam(consentUrl, 'consent_challenge')

    const consentRedirectUrl = await provideConsent(
      this.config.apiUrl,
      consentChallenge,
      joinCookies(cookies),
    )

    const consentRedirectREsponse = await haltRedirect(
      consentRedirectUrl,
      joinCookies(cookies),
    )

    const codeRedirectUrl = mustGetRedirectUrl(consentRedirectREsponse)
    const code = mustGetParam(codeRedirectUrl, 'code')

    const response = await requestToken({
      issuerUrl: this.config.issuerUrl,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      code,
      codeVerifier,
      grantType: GrantType.AuthorizationCode,
      redirectUrl: this.config.redirectUrl,
    })

    this.saveTokenFromResponse(response.data)
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

  private saveTokenFromResponse = async (data: RequestTokenResponseData) => {
    if (data.error) {
      await this.clear()
      throw new Error(data.error)
    } else {
      await this.setToken(data)
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
