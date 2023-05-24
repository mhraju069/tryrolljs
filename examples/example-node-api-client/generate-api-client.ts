import Client from '@tryrolljs/api-client'
import SDK from '@tryrolljs/auth-client-credentials-sdk'

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
    const clientAuthSdk = new SDK.default(
      {
        issuerUrl: process.env.ISSUER_URL || '',
        clientId: process.env.CLIENT_ID || '',
        clientSecret: process.env.CLIENT_SECRET || '',
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
