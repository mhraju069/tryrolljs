import CodeTokenInteraction from '../code-token-interaction'
import { CODE_VERIFIER_STORAGE_KEY } from '../code-token-interaction/constants'
import { Storage, GrantType, TokenInteraction, Token } from '../types'
import { autoLogin, provideConsent, requestToken } from './api'
import { AutoLoginGenerateTokenOptions, Config } from './types'
import {
  haltRedirect,
  mustGetRedirectUrl,
  mustGetCookies,
  mustGetParam,
  joinCookies,
} from './utils'

class AutoLoginTokenInteraction
  implements TokenInteraction<AutoLoginGenerateTokenOptions>
{
  private readonly codeInteraction: CodeTokenInteraction

  constructor(
    private readonly config: Config,
    private readonly storage: Storage,
  ) {
    this.storage = storage
    this.config = config
    this.codeInteraction = new CodeTokenInteraction(config, storage)
  }

  public generateToken = async ({
    autoLoginToken,
  }: AutoLoginGenerateTokenOptions) => {
    const loginUrl = await this.getLogInUrl()
    const codeVerifier = await this.storage.getItem(CODE_VERIFIER_STORAGE_KEY)

    let cookies: string[] = []

    const loginRedirectResponse = await haltRedirect(loginUrl)

    const loginRedirectUrl = mustGetRedirectUrl(loginRedirectResponse)
    cookies = cookies.concat(mustGetCookies(loginRedirectResponse))
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

    const consentRedirectResponse = await haltRedirect(
      consentRedirectUrl,
      joinCookies(cookies),
    )

    const codeRedirectUrl = mustGetRedirectUrl(consentRedirectResponse)
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

    return {
      ...response.data,
      last_update_at: new Date().getTime(),
    }
  }

  public refreshToken = (token: Token) =>
    this.codeInteraction.refreshToken(token)
  public clearCache = () => this.codeInteraction.clearCache()
  public restoreCache = () => this.codeInteraction.restoreCache()
  public getLogInUrl = () => this.codeInteraction.getLogInUrl()
  public getLogOutUrl = (token: Token) =>
    this.codeInteraction.getLogOutUrl(token)
}

export default AutoLoginTokenInteraction
