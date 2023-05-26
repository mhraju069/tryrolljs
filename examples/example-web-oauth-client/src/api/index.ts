import SDK from '@tryrolljs/auth-web-sdk'
import Client from '@tryrolljs/api-client'
import config from '../config'

const authSdk = new SDK(
  {
    clientId: config.clientID,
    issuerUrl: config.issuerURL,
    redirectUrl: config.redirectURL,
    logoutRedirectUrl: config.redirectURL,
    scopes: config.scopes,
  },
  window.localStorage as any,
)

const apiClient = new Client({ baseUrl: config.apiURL }, authSdk)

export { apiClient, authSdk }
