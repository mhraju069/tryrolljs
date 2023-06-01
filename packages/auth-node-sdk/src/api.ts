import axios from 'axios'
import { stringify } from 'qs'
import {
  GetLogInUrlArgs,
  RedirectToResponse,
  RequestTokenArgs,
  RequestTokenResponseData,
} from './types'
import { getRandomString } from './utils'

export const getLogInUrl = ({
  clientId,
  redirectUrl,
  scopes,
  issuerUrl,
  codeChallenge,
}: GetLogInUrlArgs) => {
  const params = {
    client_id: clientId,
    redirect_uri: redirectUrl,
    scopes,
    response_type: 'code',
    response_mode: 'query',
    state: getRandomString(),
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  }

  return `${issuerUrl}/auth?${stringify(params, { arrayFormat: 'comma' })}`
}

export const autoLogin = async (
  apiUrl: string,
  autoLoginToken: string,
  loginChallenge: string,
  cookies: string,
): Promise<string> => {
  const response = await axios.post<RedirectToResponse>(
    `${apiUrl}/v2/oauth2/login?token=${autoLoginToken}&login_challenge=${loginChallenge}`,
    { withcredentials: true, headers: { Cookie: cookies } },
  )

  return response.data.redirect_to
}

export const provideConsent = async (
  apiUrl: string,
  consentChallenge: string,
  cookies: string,
): Promise<string> => {
  const { data } = await axios.post<RedirectToResponse>(
    `${apiUrl}/v2/oauth2/consent?consent_challenge=${consentChallenge}`,
    {
      withcredentials: true,
      headers: { Cookie: cookies },
      data: { isRejected: false },
    },
  )

  return data.redirect_to
}

export const requestToken = async ({
  issuerUrl,
  refreshToken,
  code,
  grantType,
  redirectUrl,
  clientId,
  codeVerifier,
  clientSecret,
}: RequestTokenArgs) => {
  try {
    const body = {
      code,
      refresh_token: refreshToken,
      grant_type: grantType,
      redirect_uri: redirectUrl,
      client_id: clientId,
      code_verifier: codeVerifier,
    }
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: stringify(body),
      url: `${issuerUrl}/token`,
      auth: {
        username: clientId,
        password: clientSecret,
      },
    }

    return await axios<RequestTokenResponseData>(options)
  } catch (e) {
    throw e
  }
}
