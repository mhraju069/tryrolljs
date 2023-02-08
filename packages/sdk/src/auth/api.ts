import axios from 'axios'
import * as qs from 'qs'
import { getRandomString } from './utils'
import {
  RequestTokenArgs,
  RequestTokenResponseData,
  GetLogInUrlArgs,
  GetLogOutUrlArgs,
} from './types'

export const requestToken = async ({
  issuerUrl,
  refreshToken,
  code,
  grantType,
  redirectUri,
  clientId,
}: RequestTokenArgs) => {
  try {
    const body = {
      code,
      refresh_token: refreshToken,
      grant_type: grantType,
      redirect_uri: redirectUri,
      client_id: clientId,
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
}: GetLogInUrlArgs) => {
  const params = {
    client_id: clientId,
    redirect_uri: redirectUrl,
    scopes,
    response_type: 'code',
    response_mode: 'query',
    state: getRandomString(),
    nonce: getRandomString(),
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
