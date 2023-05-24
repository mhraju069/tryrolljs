import type { PartialDeep } from 'type-fest'
import { requestToken } from './api'
import type { ClientCache, RequestTokenResponseData } from './types'
import SDK, { TOKEN_STORAGE_KEY } from './sdk'

const config = {
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  issuerUrl: 'http://localhost:3000/oauth2',
}

const storage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}

const getRealStorage = () => ({
  storage: {} as Record<string, string>,
  getItem(key: string) {
    return this.storage[key]
  },
  setItem(key: string, value: string) {
    this.storage[key] = value
  },
  removeItem(key: string) {
    delete this.storage[key]
  },
})

const mockRequestToken = requestToken as jest.Mock
jest.mock('./api', () => ({
  requestToken: jest.fn().mockResolvedValue({
    data: {
      access_token: 'access_token',
      expires_in: 3600,
      token_type: 'bearer',
    },
  }),
}))

const mockTokenResponse = (data: Partial<RequestTokenResponseData> = {}) => {
  mockRequestToken.mockResolvedValue({
    data: {
      access_token: data.access_token ?? 'access_token',
      expires_in: data.expires_in ?? 3600,
      token_type: data.token_type ?? 'bearer',
    },
  })
}

const mockCache = (cache: PartialDeep<ClientCache> = {}) => {
  storage.getItem.mockImplementation(async (key: string) => {
    if (key === TOKEN_STORAGE_KEY) {
      return JSON.stringify({
        access_token: cache?.token?.access_token ?? 'access_token',
        expires_in: cache?.token?.expires_in ?? 3600,
        token_type: cache?.token?.token_type ?? 'bearer',
      })
    }
    return undefined
  })
}

describe('SDK', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('generates token', async () => {
    mockTokenResponse()
    const realStorage = getRealStorage()
    const sdk = new SDK(config, realStorage)

    await sdk.generateToken()

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(requestToken).toHaveBeenCalledWith({
      issuerUrl: 'http://localhost:3000/oauth2',
      clientId: 'clientId',
      clientSecret: 'clientSecret',
    })
  })

  it('clears', async () => {
    mockCache()

    const sdk = new SDK(config, storage)
    await sdk.restoreTokenFromCache()

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(storage.setItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_CLIENT_CREDENTIALS_TOKEN',
      JSON.stringify({
        access_token: 'access_token',
        expires_in: 3600,
        token_type: 'bearer',
      }),
    )

    await sdk.clear()
    expect(sdk.getAccessToken()).toBe(undefined)
    expect(storage.removeItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_CLIENT_CREDENTIALS_TOKEN',
    )
  })
})
