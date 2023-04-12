import axios from 'axios'
import * as qs from 'qs'
import { getRandomString } from './utils'
import {
  RequestTokenArgs,
  RequestTokenResponseData,
  RequestClientTokenArgs,
  RequestClientTokenResponseData,
  GetLogInUrlArgs,
  GetLogOutUrlArgs,
  GrantType,
  ScopeType,
} from './types'

export const requestClientToken = async ({
  clientId,
  clientSecret,
  issuerUrl,
}: RequestClientTokenArgs) => {
  try {
    const body = {
      grant_type: GrantType.ClientCredentials,
      scope: ScopeType.ReadTx,
    }
    const options = {
      method: 'POST',
      auth: {
        username: clientId,
        password: clientSecret,
      },
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(body),
      url: `${issuerUrl}/token`,
    }

    return await axios<RequestClientTokenResponseData>(options)
  } catch (e) {
    throw e
  }
}

export const requestToken = async ({
  issuerUrl,
  refreshToken,
  code,
  grantType,
  redirectUri,
  clientId,
  codeVerifier,
}: RequestTokenArgs) => {
  try {
    const body = {
      code,
      refresh_token: refreshToken,
      grant_type: grantType,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier,
    }
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(body),
      url: `${issuerUrl}/token`,
    }

    return await axios<RequestTokenResponseData>(options)
  } catch (e) {
    throw e
  }
}

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

  return `${issuerUrl}/auth?${qs.stringify(params, { arrayFormat: 'comma' })}`
}

export const getLogOutUrl = ({
  issuerUrl,
  redirectUrl,
  idToken,
}: GetLogOutUrlArgs) => {
  const url = `${issuerUrl}/sessions/logout?post_logout_redirect_uri=${redirectUrl}&state=${getRandomString()}&id_token_hint=${idToken}`
  return url
}
