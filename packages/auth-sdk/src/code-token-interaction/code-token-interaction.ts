import {
  Config,
  GrantType,
  RequestTokenArgs,
  RequestTokenResponseData,
  Token,
  TokenInteraction,
} from '../types'
import {
  NotEnoughDataToRefreshError,
  InvalidGenerateTokenArgumentsError,
} from '../errors'
import { Store } from '../store'
import { CodeVerifier } from '../masquerade-token-interaction/types'
import { getLogInUrl, getLogOutUrl, requestToken } from './api'
import { CodeVerifierMissingError, IdTokenMissingError } from './errors'
import { getRandomString, pkceChallengeFromVerifier } from './utils'

class CodeTokenInteraction implements TokenInteraction<Record<string, string>> {
  constructor(
    protected readonly config: Config,
    protected readonly store: Store,
  ) {
    this.store = store
    this.config = config
    this.generateToken.bind(this)
  }

  public refreshToken = async (token: Token) => {
    if (!token.refresh_token) {
      throw new NotEnoughDataToRefreshError()
    }

    const response = await requestToken({
      issuerUrl: this.config.issuerUrl,
      grantType: GrantType.RefreshToken,
      redirectUrl: this.config.redirectUrl,
      clientId: this.config.clientId,
      refreshToken: token.refresh_token!,
    })

    return {
      ...response.data,
      last_update_at: new Date().getTime(),
    }
  }

  public async generateToken({
    code,
    state,
  }: Record<string, string>): Promise<Token> {
    if (!code || !state) {
      throw new InvalidGenerateTokenArgumentsError()
    }

    const codeVerifier = await this.store.read<CodeVerifier>(
      'code_verifier',
      state,
    )
    if (!codeVerifier) {
      throw new CodeVerifierMissingError()
    }

    await this.store.delete('code_verifier', state)

    const newToken = await this.requestToken(code, codeVerifier.value)
    return { ...newToken, last_update_at: new Date().getTime() }
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

  public getLogInUrl = async () => {
    const minVerifierLength = 43
    const state = getRandomString()
    const codeVerifier = getRandomString(minVerifierLength)
    const codeChallenge = await pkceChallengeFromVerifier(codeVerifier)

    await this.store.create('code_verifier', { id: state, value: codeVerifier })

    return getLogInUrl({ ...this.config, state, codeChallenge })
  }

  public getLogOutUrl = async (token: Token) => {
    const { id_token: idToken } = token
    if (!idToken) {
      throw new IdTokenMissingError()
    }

    const { issuerUrl, logoutRedirectUrl: redirectUrl } = this.config

    return getLogOutUrl({
      issuerUrl,
      redirectUrl,
      idToken,
    })
  }
}

export default CodeTokenInteraction
