import {
  Config,
  GrantType,
  RequestTokenArgs,
  RequestTokenResponseData,
  Token,
  Storage,
  TokenInteraction,
  StorageKey,
} from '../types'
import { NotEnoughDataToRefreshError } from '../errors'
import { getLogInUrl, getLogOutUrl, requestToken } from './api'
import { CodeVerifierMissingError, IdTokenMissingError } from './errors'
import { getRandomString, pkceChallengeFromVerifier } from './utils'

class CodeTokenInteraction implements TokenInteraction<string> {
  constructor(
    protected readonly config: Config,
    protected readonly storage: Storage,
  ) {
    this.storage = storage
    this.config = config

    this.generateToken.bind(this)
  }

  public refreshToken = async (token: Token) => {
    const code = await this.storage.getItem(StorageKey.Code)

    if (!code) {
      throw new NotEnoughDataToRefreshError()
    }

    try {
      const response = await requestToken({
        issuerUrl: this.config.issuerUrl,
        grantType: GrantType.RefreshToken,
        redirectUrl: this.config.redirectUrl,
        clientId: this.config.clientId,
        refreshToken: token.refresh_token!,
        code,
      })

      return {
        ...response.data,
        last_update_at: new Date().getTime(),
      }
    } catch (e) {
      await this.clearCache()
      throw e
    }
  }

  public async generateToken(code: string): Promise<Token> {
    const cachedCodeVerifier = await this.storage.getItem(
      StorageKey.CodeVerifier,
    )
    if (!cachedCodeVerifier) {
      throw new CodeVerifierMissingError()
    }

    try {
      const newToken = await this.requestToken(code, cachedCodeVerifier)
      await this.storage.setItem(StorageKey.Code, code)
      return { ...newToken, last_update_at: new Date().getTime() }
    } catch (e) {
      await this.clearCache()
      throw e
    }
  }

  private getCache = async () => {
    const code = await this.storage.getItem(StorageKey.Code)
    const codeVerifier = await this.storage.getItem(StorageKey.CodeVerifier)
    const cache = { code, codeVerifier }
    return cache
  }

  public restoreCache = async () => {
    const cache = await this.getCache()

    await Promise.all([
      cache.code && this.storage.setItem(StorageKey.Code, cache.code),
      cache.codeVerifier &&
        this.storage.setItem(StorageKey.CodeVerifier, cache.codeVerifier),
    ])
  }

  private requestToken = async (
    code: string,
    codeVerifier: string,
  ): Promise<RequestTokenResponseData> => {
    const args: RequestTokenArgs = {
      issuerUrl: this.config.issuerUrl,
      grantType: GrantType.AuthorizationCode,
      redirectUrl: this.config?.redirectUrl,
      clientId: this.config?.clientId,
      code,
      codeVerifier,
    }

    const { data } = await requestToken(args)

    return data
  }

  public clearCache = async () => {
    await Promise.all([
      this.storage.removeItem(StorageKey.Code),
      this.storage.removeItem(StorageKey.CodeVerifier),
      this.storage.removeItem(StorageKey.State),
    ])
  }

  public getLogInUrl = async () => {
    const minVerifierLength = 43
    const state = getRandomString()
    const codeVerifier = getRandomString(minVerifierLength)
    const codeChallenge = await pkceChallengeFromVerifier(codeVerifier)

    await Promise.all([
      this.storage.setItem(StorageKey.CodeVerifier, codeVerifier),
      this.storage.setItem(StorageKey.State, state),
    ])

    return getLogInUrl({ ...this.config, state, codeChallenge })
  }

  public getLogOutUrl = async (token: Token) => {
    const { id_token: idToken } = token
    if (!idToken) {
      throw new IdTokenMissingError()
    }

    const { issuerUrl, logoutRedirectUrl: redirectUrl } = this.config

    await this.clearCache()

    return getLogOutUrl({
      issuerUrl,
      redirectUrl,
      idToken,
    })
  }
}

export default CodeTokenInteraction
