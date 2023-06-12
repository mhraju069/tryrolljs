import SDK from '@roll-network/auth-sdk'
import Client from '@roll-network/api-client'
import config from '../config'

const authSdk = new SDK(
  {
    clientId: config.clientID,
    issuerUrl: config.issuerURL,
    redirectUrl: config.redirectURL,
    logoutRedirectUrl: config.redirectURL,
    scopes: config.scopes,
  },
  window.localStorage,
)

const apiClient = new Client({ baseUrl: config.apiURL }, authSdk)

export { apiClient, authSdk }
