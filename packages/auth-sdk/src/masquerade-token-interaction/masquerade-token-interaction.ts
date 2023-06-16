import CodeTokenInteraction from '../code-token-interaction'
import {
  Storage,
  GrantType,
  TokenInteraction,
  Config,
  StorageKey,
} from '../types'
import { autoLogin, provideConsent, requestToken } from './api'
import {
  haltRedirect,
  mustGetRedirectUrl,
  mustGetCookies,
  mustGetParam,
  joinCookies,
} from './utils'

class MasqueradeTokenInteraction
  extends CodeTokenInteraction
  implements TokenInteraction<string>
{
  constructor(
    protected readonly config: Config,
    protected readonly storage: Storage,
  ) {
    super(config, storage)
    this.storage = storage
    this.config = config
  }

  public generateToken = async (autoLoginToken: string) => {
    const loginUrl = await this.getLogInUrl()
    const codeVerifier = await this.storage.getItem(StorageKey.CodeVerifier)

    let cookies: string[] = []

    const loginRedirectResponse = await haltRedirect(loginUrl)

    const loginRedirectUrl = mustGetRedirectUrl(loginRedirectResponse)
    cookies = cookies.concat(mustGetCookies(loginRedirectResponse))
    const loginChallenge = mustGetParam(loginRedirectUrl, 'login_challenge')

    const autoLoginUrl = await autoLogin(
      this.config.apiUrl ?? '',
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
      this.config.apiUrl ?? '',
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
      clientSecret: this.config.clientSecret ?? '',
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
}

export default MasqueradeTokenInteraction
