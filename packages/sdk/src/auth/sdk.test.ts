import type { PartialDeep } from 'type-fest'
import { NotAuthorizedCacheError } from './errors'
import { requestToken } from './api'
import type { Cache, RequestTokenResponseData } from './types'
import SDK, {
  CODE_STORAGE_KEY,
  CODE_VERIFIER_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
} from './sdk'

const config = {
  clientId: 'clientId',
  redirectUrl: 'http://localhost:8000',
  logoutRedirectUrl: 'http://localhost:8000',
  issuerUrl: 'http://localhost:3000/oauth2',
  scopes: ['offline', 'openid', 'base', 'read-tx', 'write-tx'],
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
      refresh_token: 'refresh_token',
      id_token: 'id_token',
    },
  }),
}))

const mockTokenResponse = (data: Partial<RequestTokenResponseData> = {}) => {
  mockRequestToken.mockResolvedValue({
    data: {
      access_token: data.access_token ?? 'access_token',
      expires_in: data.expires_in ?? 3600,
      refresh_token: data.refresh_token ?? 'refresh_token',
      id_token: data.id_token ?? 'id_token',
    },
  })
}

const mockCache = (cache: PartialDeep<Cache> = {}) => {
  storage.getItem.mockImplementation(async (key: string) => {
    if (key === TOKEN_STORAGE_KEY) {
      return JSON.stringify({
        access_token: cache?.token?.access_token ?? 'access_token',
        expires_in: cache?.token?.expires_in ?? 3600,
        refresh_token: cache?.token?.refresh_token ?? 'refresh_token',
        id_token: cache?.token?.id_token ?? 'id_token',
        last_update_at: cache?.token?.last_update_at ?? undefined,
      })
    }
    if (key === CODE_STORAGE_KEY) {
      return cache.code ?? 'code'
    }
    if (key === CODE_VERIFIER_STORAGE_KEY) {
      return cache.codeVerifier ?? 'code_verifier'
    }
    return undefined
  })
}

describe('SDK', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('makes session', async () => {
    mockTokenResponse()
    const realStorage = getRealStorage()
    realStorage.setItem(CODE_VERIFIER_STORAGE_KEY, '123')
    const sdk = new SDK(config, realStorage)

    await sdk.exchangeCodeForToken('code')

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(requestToken).toHaveBeenCalledWith({
      issuerUrl: 'http://localhost:3000/oauth2',
      code: 'code',
      grantType: 'authorization_code',
      redirectUri: 'http://localhost:8000',
      clientId: 'clientId',
      codeVerifier: '123',
    })
  })

  it('refreshes and updates token', async () => {
    const realStorage = getRealStorage()
    realStorage.setItem(CODE_VERIFIER_STORAGE_KEY, '123')
    const sdk = new SDK(config, realStorage)

    mockTokenResponse({ expires_in: 0 })

    await sdk.exchangeCodeForToken('code')

    mockTokenResponse({ access_token: 'new_access_token', expires_in: 0 })

    await sdk.refreshTokens()

    expect(sdk.getAccessToken()).toBe('new_access_token')
    expect(requestToken).toHaveBeenCalledTimes(2)
    expect(requestToken).toHaveBeenLastCalledWith({
      issuerUrl: 'http://localhost:3000/oauth2',
      code: 'code',
      grantType: 'refresh_token',
      redirectUri: 'http://localhost:8000',
      clientId: 'clientId',
      refreshToken: 'refresh_token',
    })
  })

  it('does not restore from cache when there is no authorized cache', async () => {
    mockCache({ token: { access_token: '' } })
    const sdk = new SDK(config, storage)

    await expect(sdk.restoreTokenFromCache()).rejects.toThrow(
      NotAuthorizedCacheError,
    )
  })

  it('refreshes from cache', async () => {
    mockCache()
    mockTokenResponse({ access_token: 'new_access_token', expires_in: 0 })

    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    const mockDateConstructor = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateInstance)

    const sdk = new SDK(config, storage)
    await sdk.restoreTokenFromCache()
    await sdk.refreshTokens()

    expect(sdk.getAccessToken()).toBe('new_access_token')
    expect(storage.setItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_TOKEN',
      JSON.stringify({
        access_token: 'access_token',
        expires_in: 3600,
        refresh_token: 'refresh_token',
        id_token: 'id_token',
      }),
    )
    expect(storage.setItem).toHaveBeenCalledWith('ROLL_AUTHSDK_CODE', 'code')

    mockDateConstructor.mockRestore()
  })

  it('refreshes when force', async () => {
    const sdk = new SDK(config, storage)
    mockTokenResponse()
    await sdk.exchangeCodeForToken('code')

    mockTokenResponse({ access_token: 'new_access_token' })
    await sdk.refreshTokens(true)

    expect(sdk.getAccessToken()).toBe('new_access_token')
  })

  it('skips refresh if tokens are up-to-date', async () => {
    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    const mockDateConstructor = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateInstance)

    mockCache({
      token: { last_update_at: mockSeconds - 3600 * 1000 + 1 },
    })
    mockTokenResponse({ access_token: 'new_access_token' })

    const sdk = new SDK(config, storage)
    await sdk.restoreTokenFromCache()
    await sdk.refreshTokens()

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(storage.setItem).toHaveBeenCalledTimes(2)
    expect(storage.setItem).toHaveBeenCalledWith(
      TOKEN_STORAGE_KEY,
      JSON.stringify({
        access_token: 'access_token',
        expires_in: 3600,
        refresh_token: 'refresh_token',
        id_token: 'id_token',
        last_update_at: 1466420890001,
      }),
    )
    expect(storage.setItem).toHaveBeenCalledWith(CODE_STORAGE_KEY, 'code')

    mockDateConstructor.mockRestore()
  })

  it('clears', async () => {
    mockCache()

    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    const mockDateConstructor = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateInstance)

    const sdk = new SDK(config, storage)
    await sdk.restoreTokenFromCache()

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(storage.setItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_TOKEN',
      JSON.stringify({
        access_token: 'access_token',
        expires_in: 3600,
        refresh_token: 'refresh_token',
        id_token: 'id_token',
      }),
    )
    expect(storage.setItem).toHaveBeenCalledWith('ROLL_AUTHSDK_CODE', 'code')

    await sdk.clear()
    expect(sdk.getAccessToken()).toBe(undefined)
    expect(storage.removeItem).toHaveBeenCalledWith('ROLL_AUTHSDK_TOKEN')
    expect(storage.removeItem).toHaveBeenCalledWith('ROLL_AUTHSDK_CODE')
    expect(storage.removeItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_CODE_VERIFIER',
    )

    mockDateConstructor.mockRestore()
  })
})
