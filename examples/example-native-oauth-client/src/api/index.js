import SDK, { KeyValueStoreAdapter } from '@roll-network/auth-sdk'
import Client from '@roll-network/api-client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import config from '../config'

const authSdk = new SDK(
  {
    apiUrl: config.apiURL,
    clientId: config.clientID,
    issuerUrl: config.issuerURL,
    redirectUrl: config.redirectURL,
    logoutRedirectUrl: config.redirectURL,
    scopes: config.scopes,
  },
  new KeyValueStoreAdapter(AsyncStorage),
)

const apiClient = new Client({ baseUrl: config.apiURL }, authSdk)

export { apiClient, authSdk }
