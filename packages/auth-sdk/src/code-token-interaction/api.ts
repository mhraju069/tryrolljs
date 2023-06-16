import axios from 'axios'
import { stringify } from 'qs'
import {
  RequestTokenArgs,
  RequestTokenResponseData,
  GetLogInUrlArgs,
  GetLogOutUrlArgs,
} from '../types'
import { getRandomString } from './utils'

export const requestToken = async ({
  issuerUrl,
  refreshToken,
  code,
  grantType,
  redirectUrl,
  clientId,
  codeVerifier,
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
  state,
}: GetLogInUrlArgs) => {
  const params = {
    client_id: clientId,
    redirect_uri: redirectUrl,
    scopes,
    response_type: 'code',
    response_mode: 'query',
    state,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  }

  return `${issuerUrl}/auth?${stringify(params, { arrayFormat: 'comma' })}`
}

export const getLogOutUrl = ({
  issuerUrl,
  redirectUrl,
  idToken,
}: GetLogOutUrlArgs) => {
  const url = `${issuerUrl}/sessions/logout?post_logout_redirect_uri=${redirectUrl}&state=${getRandomString()}&id_token_hint=${idToken}`
  return url
}
