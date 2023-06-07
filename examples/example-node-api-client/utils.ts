import Client from '@tryrolljs/api-client'
import SDK, { ScopeType } from '@tryrolljs/auth-sdk'

export const makeMockStorage = () => {
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

export const makeSDK = () => {
  return new SDK.default(
    {
      issuerUrl: process.env.ISSUER_URL || '',
      clientId: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || '',
      scopes: [
        ScopeType.ReadTx,
        ScopeType.Offline,
        ScopeType.Masquerade,
        ScopeType.PlatformUser,
      ],
      redirectUrl: '',
      logoutRedirectUrl: '',
    },
    makeMockStorage(),
  )
}

export const generateAutoLoginTokenSDK = () => {
  return new SDK.default(
    {
      apiUrl: process.env.API_URL || '',
      issuerUrl: process.env.ISSUER_URL || '',
      clientId: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || '',
      redirectUrl: process.env.REDIRECT_URL || '',
      logoutRedirectUrl: process.env.REDIRECT_URL || '',
      scopes: [
        ScopeType.ReadTx,
        ScopeType.Offline,
        ScopeType.Masquerade,
        ScopeType.PlatformUser,
      ],
    },
    makeMockStorage(),
  )
}

export const generateApiClient = async (sdk: SDK.default) => {
  try {
    await sdk.generateToken()

    const apiClient = new Client.default({ baseUrl: process.env.API_URL }, sdk)

    return apiClient
  } catch (e) {
    console.error(e)
    throw e
  }
}
