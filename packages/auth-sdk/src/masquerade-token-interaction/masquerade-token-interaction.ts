import { Store } from '../store'
import CodeTokenInteraction, {
  CodeVerifierMissingError,
} from '../code-token-interaction'
import { GrantType, TokenInteraction, Config, CodeVerifier } from '../types'
import { InvalidGenerateTokenArgumentsError } from '../errors'
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
  implements TokenInteraction<Record<string, string>>
{
  constructor(
    protected readonly config: Config,
    protected readonly store: Store,
  ) {
    super(config, store)
    this.store = store
    this.config = config
  }

  public override generateToken = async ({
    clientToken,
    masqueradeToken,
  }: Record<string, string>) => {
    if (!clientToken || !masqueradeToken) {
      throw new InvalidGenerateTokenArgumentsError()
    }

    const loginUrl = await this.getLogInUrl()
    const state = mustGetParam(loginUrl, 'state')
    const codeVerifier = await this.store.read<CodeVerifier>(
      'code_verifier',
      state,
    )

    if (!codeVerifier) {
      throw new CodeVerifierMissingError()
    }

    if (!clientToken || !masqueradeToken) {
      throw new InvalidGenerateTokenArgumentsError()
    }

    let cookies: string[] = []
    const loginRedirectResponse = await haltRedirect(loginUrl)

    const loginRedirectUrl = mustGetRedirectUrl(loginRedirectResponse)
    cookies = cookies.concat(mustGetCookies(loginRedirectResponse))
    const loginChallenge = mustGetParam(loginRedirectUrl, 'login_challenge')

    const autoLoginUrl = await autoLogin(
      this.config.apiUrl ?? '',
      clientToken,
      masqueradeToken,
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
      codeVerifier: codeVerifier.value,
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
