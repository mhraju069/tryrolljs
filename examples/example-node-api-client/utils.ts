import Client from '@tryrolljs/api-client'
import AuthNodeSDK, { types } from '@tryrolljs/auth-node-sdk'
import AuthClientCredentialsSDK from '@tryrolljs/auth-client-credentials-sdk'

function makeMockStorage() {
  let storage: Record<string, string> = {}

  return {
    setItem: function (key: string, value: string) {
      storage[key] = value || ''
    },
    getItem: function (key: string) {
      return key in storage ? storage[key] : undefined
    },
    removeItem: function (key: string) {
      delete storage[key]
    },
    get length() {
      return Object.keys(storage).length
    },
    key: function (i: number) {
      const keys = Object.keys(storage)
      return keys[i] || undefined
    },
  }
}

export const generateAuthClientCredentialsSDK = () => {
  return new AuthClientCredentialsSDK.default(
    {
      issuerUrl: process.env.ISSUER_URL || '',
      clientId: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || '',
      scopes: [
        types.ScopeType.ReadTx,
        types.ScopeType.Offline,
        types.ScopeType.Masquerade,
        types.ScopeType.PlatformUser,
      ],
    },
    makeMockStorage(),
  )
}

export const generateAuthNodeSDK = () => {
  return new AuthNodeSDK.default(
    {
      apiUrl: process.env.API_URL || '',
      issuerUrl: process.env.ISSUER_URL || '',
      clientId: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || '',
      redirectUrl: process.env.REDIRECT_URL || '',
      logoutRedirectUrl: process.env.REDIRECT_URL || '',
      scopes: [
        types.ScopeType.ReadTx,
        types.ScopeType.Offline,
        types.ScopeType.Masquerade,
        types.ScopeType.PlatformUser,
      ],
    },
    makeMockStorage(),
  )
}

export const generateApiClient = async (
  sdk: AuthClientCredentialsSDK.default,
) => {
  try {
    await sdk.generateToken()

    const apiClient = new Client.default({ baseUrl: process.env.API_URL }, sdk)

    return apiClient
  } catch (e) {
    console.error(e)
    throw e
  }
}
