import SDK, { CodeTokenInteraction } from '@tryrolljs/auth-sdk'
import Client from '@tryrolljs/api-client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import config from '../config'

const authSdk = new SDK(
  {
    clientId: config.clientID,
    issuerUrl: config.issuerURL,
    redirectUrl: config.redirectURL,
    logoutRedirectUrl: config.redirectURL,
    scopes: config.scopes,
  },
  AsyncStorage,
  CodeTokenInteraction,
)

const apiClient = new Client({ baseUrl: config.apiURL }, authSdk)

export { apiClient, authSdk }
