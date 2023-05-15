import http from 'http'
import axios from 'axios'
import Client from '@tryrolljs/api-client'
import { auth } from '@tryrolljs/sdk'
import {
  HasBalanceArgs,
  GetMeResponseData,
  HasBalanceResponseData,
  GetUserBalancesArgs,
  GetUserBalancesResponseData,
  GetUserArgs,
  GetUserResponseData,
  GetUserTokenBalanceArgs,
  Response,
  ExternalUserResponseData,
  ExternalUserArgs,
  RedirectToResponse,
} from './types'

export const getMe = (client: Client) => {
  return client.call<Response<GetMeResponseData>>({
    url: '/v1/users/session',
    method: 'GET',
    authorization: true,
  })
}

export const hasBalance = async (
  client: Client,
  { userId, tokenId, amount }: HasBalanceArgs,
) => {
  const response = await client.call<Response<HasBalanceResponseData>>({
    url: `/v1/users/${userId}/hasbalance/${tokenId}/${amount}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUserBalances = async (
  client: Client,
  { userId }: GetUserBalancesArgs,
) => {
  const response = await client.call<Response<GetUserBalancesResponseData[]>>({
    url: `/v1/users/${userId}/balances`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}

export const getUserTokenBalance = async (
  client: Client,
  { userId, tokenId }: GetUserTokenBalanceArgs,
) => {
  const response = await client.call<Response<GetUserBalancesResponseData>>({
    url: `/v1/users/${userId}/balances/${tokenId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUser = async (client: Client, { userId }: GetUserArgs) => {
  const response = await client.call<Response<GetUserResponseData>>({
    url: `/v1/users/${userId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const createPlatformUser = async (
  client: Client,
  { userType, externalUserId }: ExternalUserArgs,
) => {
  const response = await client.call<Response<ExternalUserResponseData>>({
    url: `/v1/externalUsers`,
    method: 'POST',
    body: { userType, externalUserID: externalUserId },
    authorization: true,
  })

  return response.data
}

export const getExternalUserAutoLoginToken = async (
  client: Client,
  { userId }: GetUserArgs,
) => {
  const response = await client.call<Response<{ token: string }>>({
    url: `/v1/users/${userId}/autoLoginToken`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}

const haltRedirect = (url: string, cookies?: string) => {
  return new Promise<http.IncomingMessage>((resolve, reject) => {
    try {
      const parsedUrl = new URL(url)

      const path =
        parsedUrl.pathname +
        '?' +
        new URLSearchParams(parsedUrl.search).toString()

      const opts: http.RequestOptions = {
        path: path,
        port: parsedUrl.port,
        hostname: parsedUrl.hostname,
        method: 'GET',
      }

      if (cookies) {
        opts.headers = {
          Cookie: cookies,
        }
      }

      http
        .request(opts, (response) => resolve(response))
        .on('error', (error) => reject(error))
        .end()
    } catch (err) {
      reject(err)
    }
  })
}

export const autoLogin = async (
  apiUrl: string,
  autoLoginToken: string,
  loginChallenge: string,
  cookies: string,
): Promise<string> => {
  const resp = await axios.post<RedirectToResponse>(
    `${apiUrl}/v2/oauth2/login?token=${autoLoginToken}&login_challenge=${loginChallenge}`,
    { withcredentials: true, headers: { Cookie: cookies } },
  )

  return resp.data.redirect_to
}

const mustGetRedirectUrl = (resp: http.IncomingMessage): string => {
  const location = resp.headers.location
  if (!location) {
    throw new Error('No redirect location found')
  }

  return location
}

const mustGetCookies = (resp: http.IncomingMessage): string[] => {
  const cookies = resp.headers['set-cookie']

  if (!cookies) {
    console.log(resp.headers)
    throw new Error(
      `no cookies found for request ${resp} with redirect ${location}`,
    )
  }

  return cookies
}

const mustGetParam = (url: string, param: string): string => {
  const value = new URLSearchParams(new URL(url).searchParams).get(param)

  if (!value) {
    throw new Error('no query parameter found with name: ' + param)
  }

  return value
}

const joinCookies = (cookies: string[]) => cookies.join('; ')

const provideConsent = async (
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

export const secondaryUserLogin = async (
  client: Client,
  authSdk: auth.SDK,
  clientSdk: auth.ClientSDK,
  userID: string,
) => {
  const autoLoginToken = await getExternalUserAutoLoginToken(client, {
    userId: userID,
  })

  const [loginUrl, codeVerifier] = await authSdk.getLogInUrl()

  let cookies: string[] = []

  const initLoginRedirect = await haltRedirect(loginUrl)

  const loginRedirect = mustGetRedirectUrl(initLoginRedirect)
  cookies = cookies.concat(mustGetCookies(initLoginRedirect))
  const loginChallenge = mustGetParam(loginRedirect, 'login_challenge')

  const loginRedirectUrl = await autoLogin(
    client.getBaseUrl(),
    autoLoginToken.token,
    loginChallenge,
    joinCookies(cookies),
  )

  const initConsentResp = await haltRedirect(
    loginRedirectUrl,
    joinCookies(cookies),
  )
  const consentRedirect = mustGetRedirectUrl(initConsentResp)
  cookies = cookies.concat(mustGetCookies(initConsentResp))
  const consentChallenge = mustGetParam(consentRedirect, 'consent_challenge')

  const consentRedirectUrl = await provideConsent(
    client.getBaseUrl(),
    consentChallenge,
    joinCookies(cookies),
  )

  const initExchangeCode = await haltRedirect(
    consentRedirectUrl,
    joinCookies(cookies),
  )

  const codeRedirect = mustGetRedirectUrl(initExchangeCode)
  const code = mustGetParam(codeRedirect, 'code')

  const token = await clientSdk.getClientUserToken(code, codeVerifier)

  return token
}
