import {
  Config,
  GrantType,
  RequestTokenArgs,
  RequestTokenResponseData,
  Token,
  Storage,
  TokenInteraction,
} from '../types'
import { NotEnoughDataToRefreshError } from '../errors'
import { getLogInUrl, getLogOutUrl, requestToken } from './api'
import { CODE_STORAGE_KEY, CODE_VERIFIER_STORAGE_KEY } from './constants'
import { CodeVerifierMissingError, IdTokenMissingError } from './errors'
import { getRandomString, pkceChallengeFromVerifier } from './utils'
import { CodeGenerateTokenOptions } from './types'

class CodeTokenInteraction
  implements TokenInteraction<CodeGenerateTokenOptions>
{
  constructor(
    private readonly config: Config,
    private readonly storage: Storage,
  ) {
    this.storage = storage
    this.config = config
  }

  public refreshToken = async (token: Token) => {
    const code = await this.storage.getItem(CODE_STORAGE_KEY)

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

  public generateToken = async ({ code }: CodeGenerateTokenOptions) => {
    const cachedCodeVerifier = await this.storage.getItem(
      CODE_VERIFIER_STORAGE_KEY,
    )
    if (!cachedCodeVerifier) {
      throw new CodeVerifierMissingError()
    }

    try {
      const newToken = await this.requestToken(code, cachedCodeVerifier)
      await this.storage.setItem(CODE_STORAGE_KEY, code)
      return { ...newToken, last_update_at: new Date().getTime() }
    } catch (e) {
      await this.clearCache()
      throw e
    }
  }

  private getCache = async () => {
    const code = await this.storage.getItem(CODE_STORAGE_KEY)
    const codeVerifier = await this.storage.getItem(CODE_VERIFIER_STORAGE_KEY)
    const cache = { code, codeVerifier }
    return cache
  }

  public restoreCache = async () => {
    const cache = await this.getCache()

    await Promise.all([
      cache.code && this.storage.setItem(CODE_STORAGE_KEY, cache.code),
      cache.codeVerifier &&
        this.storage.setItem(CODE_VERIFIER_STORAGE_KEY, cache.codeVerifier),
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
      this.storage.removeItem(CODE_STORAGE_KEY),
      this.storage.removeItem(CODE_VERIFIER_STORAGE_KEY),
    ])
  }

  public getLogInUrl = async () => {
    const minVerifierLength = 43
    const codeVerifier = getRandomString(minVerifierLength)
    const codeChallenge = await pkceChallengeFromVerifier(codeVerifier)

    await this.storage.setItem(CODE_VERIFIER_STORAGE_KEY, codeVerifier)

    return getLogInUrl({ ...this.config, codeChallenge })
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
