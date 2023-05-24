import Client from '@tryrolljs/api-client'
import { auth } from '@tryrolljs/sdk'
import { ScopeType } from '@tryrolljs/sdk/dist/cjs/auth/types.js'

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

export const generateApiClient = async () => {
  try {
    const clientAuthSdk = new auth.ClientSDK(
      {
        issuerUrl: process.env.ISSUER_URL || '',
        clientId: process.env.CLIENT_ID || '',
        clientSecret: process.env.CLIENT_SECRET || '',
        scopes: [ScopeType.ReadTx, ScopeType.Offline, ScopeType.Masquerade],
      },
      makeMockStorage(),
    )

    await clientAuthSdk.generateToken()

    const apiClient = new Client.default(
      { baseUrl: process.env.API_URL },
      clientAuthSdk,
    )

    return apiClient
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const newApiClient = (sdkInst: auth.SDK | auth.ClientSDK) => {
  return new Client.default({ baseUrl: process.env.API_URL }, sdkInst)
}

export const newClientSDK = async () => {
  console.log('client sdk with clientID: ', process.env.CLIENT_ID)
  const clientAuthSdk = new auth.ClientSDK(
    {
      issuerUrl: process.env.ISSUER_URL || '',
      clientId: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || '',
      scopes: [ScopeType.ReadTx, ScopeType.Offline, ScopeType.Masquerade],
    },
    makeMockStorage(),
  )

  await clientAuthSdk.generateToken()

  return clientAuthSdk
}

export const newAuthSDK = () => {
  return new auth.SDK(
    {
      issuerUrl: process.env.ISSUER_URL || '',
      clientId: process.env.CLIENT_ID || '',
      redirectUrl: process.env.REDIRECT_URL || '',
      logoutRedirectUrl: process.env.REDIRECT_URL || '',
      scopes: ['openid', 'offline_access'],
    },
    makeMockStorage(),
  )
}

export const generateAuthClient = async (): Promise<
  [Client.default, auth.SDK]
> => {
  try {
    const authSdk = new auth.SDK(
      {
        issuerUrl: process.env.ISSUER_URL || '',
        clientId: process.env.CLIENT_ID || '',
        redirectUrl: process.env.REDIRECT_URL || '',
        logoutRedirectUrl: process.env.REDIRECT_URL || '',
        scopes: ['openid', 'offline_access'],
      },
      makeMockStorage(),
    )

    const apiClient = new Client.default(
      { baseUrl: process.env.API_URL },
      authSdk,
    )

    return [apiClient, authSdk]
  } catch (e) {
    console.error(e)
    throw e
  }
}
