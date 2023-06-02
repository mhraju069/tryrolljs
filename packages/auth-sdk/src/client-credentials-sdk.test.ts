import type { PartialDeep } from 'type-fest'
import { ScopeType } from './types'
import { requestToken } from './client-credentials-token-interaction/api'
import {
  Config,
  Token,
  RequestTokenResponseData,
} from './client-credentials-token-interaction/types'
import SDK from './sdk'
import { TOKEN_STORAGE_KEY } from './constants'
import ClientCredentialsTokenInteraction from './client-credentials-token-interaction'

const config: Config = {
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  issuerUrl: 'http://localhost:3000/oauth2',
  scopes: [ScopeType.ReadTx, ScopeType.Offline],
  redirectUrl: '',
  logoutRedirectUrl: '',
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
jest.mock('./client-credentials-token-interaction/api', () => ({
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

const mockCache = (cache: PartialDeep<{ token: Token }> = {}) => {
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

describe('Client Credentials Auth SDK', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('generates token', async () => {
    mockTokenResponse()
    const realStorage = getRealStorage()
    const sdk = new SDK(config, realStorage, ClientCredentialsTokenInteraction)

    await sdk.generateToken(undefined)

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(requestToken).toHaveBeenCalledWith({
      issuerUrl: 'http://localhost:3000/oauth2',
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      scopes: [ScopeType.ReadTx, ScopeType.Offline],
    })
  })

  it('clears', async () => {
    mockCache()

    const sdk = new SDK(config, storage, ClientCredentialsTokenInteraction)
    await sdk.restoreCachedToken()

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(storage.setItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_TOKEN',
      JSON.stringify({
        access_token: 'access_token',
        expires_in: 3600,
        token_type: 'bearer',
      }),
    )

    await sdk.clearCache()
    expect(sdk.getAccessToken()).toBe(undefined)
    expect(storage.removeItem).toHaveBeenCalledWith('ROLL_AUTHSDK_TOKEN')
  })
})
