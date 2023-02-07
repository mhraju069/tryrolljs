import type { PartialDeep } from 'type-fest'
import { NoCacheError, NotAuthorizedCacheError } from './errors'
import { requestToken } from './api'
import type { Cache, RequestTokenResponseData } from './types'
import AuthSDK, { STORAGE_KEY } from './sdk'

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
  storage.getItem.mockReturnValue(
    JSON.stringify({
      authState: {
        access_token: cache?.authState?.access_token ?? 'access_token',
        expires_in: cache?.authState?.expires_in ?? 3600,
        refresh_token: cache?.authState?.refresh_token ?? 'refresh_token',
        id_token: cache?.authState?.id_token ?? 'id_token',
        last_update_at: cache?.authState?.last_update_at ?? undefined,
      },
      authCode: cache?.authCode ?? 'code',
      oauthConfig: config,
    }),
  )
}

describe('AuthSDK', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('makes session', async () => {
    mockTokenResponse()

    const sdk = new AuthSDK(config, storage)

    await sdk.makeSession('code')

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(requestToken).toHaveBeenCalledWith({
      issuerUrl: 'http://localhost:3000/oauth2',
      code: 'code',
      grantType: 'authorization_code',
      redirectUri: 'http://localhost:8000',
      clientId: 'clientId',
    })
  })

  it('refreshes and updates token', async () => {
    const sdk = new AuthSDK(config, storage)

    mockTokenResponse({ expires_in: 0 })

    await sdk.makeSession('code')

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

  it('does not restore from cache when there is no cache', async () => {
    const sdk = new AuthSDK(config, storage)

    await expect(sdk.restoreFromCache()).rejects.toThrowError(NoCacheError)
  })

  it('does not restore from cache when there is no authorized cache', async () => {
    mockCache({ authState: { access_token: '' } })
    const sdk = new AuthSDK(config, storage)

    await expect(sdk.restoreFromCache()).rejects.toThrow(
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

    const sdk = new AuthSDK(config, storage)
    await sdk.restoreFromCache()
    await sdk.refreshTokens()

    expect(sdk.getAccessToken()).toBe('new_access_token')
    expect(storage.setItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_AUTH',
      JSON.stringify({
        authState: {
          access_token: 'new_access_token',
          expires_in: 0,
          refresh_token: 'refresh_token',
          id_token: 'id_token',
          last_update_at: mockSeconds,
        },
        authCode: 'code',
        oauthConfig: config,
      }),
    )

    mockDateConstructor.mockRestore()
  })

  it('refreshes when force', async () => {
    const sdk = new AuthSDK(config, storage)
    mockTokenResponse()
    await sdk.makeSession('code')

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
      authState: { last_update_at: mockSeconds - 3600 * 1000 + 1 },
    })
    mockTokenResponse({ access_token: 'new_access_token' })

    const sdk = new AuthSDK(config, storage)
    await sdk.restoreFromCache()
    await sdk.refreshTokens()

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(storage.setItem).toHaveBeenCalledTimes(1)
    expect(storage.setItem).toHaveBeenCalledWith(STORAGE_KEY, storage.getItem())

    mockDateConstructor.mockRestore()
  })

  it('clears', async () => {
    mockCache()

    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    const mockDateConstructor = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateInstance)

    const sdk = new AuthSDK(config, storage)
    await sdk.restoreFromCache()

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(storage.setItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_AUTH',
      JSON.stringify({
        authState: {
          access_token: 'access_token',
          expires_in: 3600,
          refresh_token: 'refresh_token',
          id_token: 'id_token',
        },
        authCode: 'code',
        oauthConfig: config,
      }),
    )

    await sdk.clear()
    expect(sdk.getAccessToken()).toBe(undefined)
    expect(storage.removeItem).toHaveBeenCalledWith('ROLL_AUTHSDK_AUTH')

    mockDateConstructor.mockRestore()
  })
})
