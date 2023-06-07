import { InteractionType, ScopeType, Config } from './types'
import { requestToken } from './client-credentials-token-interaction/api'
import { RequestTokenResponseData } from './client-credentials-token-interaction/types'
import SDK from './sdk'

const config: Config = {
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  issuerUrl: 'http://localhost:3000/oauth2',
  scopes: [ScopeType.ReadTx, ScopeType.Offline],
  redirectUrl: '',
  logoutRedirectUrl: '',
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

describe('Client Credentials SDK', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('generates token', async () => {
    mockTokenResponse()
    const realStorage = getRealStorage()
    const sdk = new SDK(config, realStorage).with(
      InteractionType.ClientCredentials,
    )
    await sdk.generateToken()

    const token = await sdk.getToken()
    expect(token?.access_token).toBe('access_token')
    expect(requestToken).toHaveBeenCalledWith({
      issuerUrl: 'http://localhost:3000/oauth2',
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      scopes: [ScopeType.ReadTx, ScopeType.Offline],
    })
  })

  it('clears', async () => {
    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    jest.spyOn(global, 'Date').mockImplementation(() => mockDateInstance)

    const realStorage = getRealStorage()
    const sdk = new SDK(config, realStorage).with(
      InteractionType.ClientCredentials,
    )
    await sdk.generateToken()

    const token = await sdk.getToken()
    expect(token).toStrictEqual({
      access_token: 'access_token',
      expires_in: 3600,
      token_type: 'bearer',
      last_update_at: 1466424490000,
    })

    await sdk.clearCache()
    const tokenAfterClear = await sdk.getToken()
    expect(tokenAfterClear?.access_token).toBe(undefined)
  })
})
