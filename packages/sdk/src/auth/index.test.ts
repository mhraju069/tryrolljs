import type { RequestTokenResponseData } from '@tryrolljs/api'
import { requestToken } from '@tryrolljs/api'
import type { PartialDeep } from 'type-fest'
import { NoCacheError, NotAuthorizedCacheError } from './errors'
import type { Cache } from './types'
import AuthSDK from '.'

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
  clear: jest.fn(),
}

const mockRequestToken = requestToken as jest.Mock
jest.mock('@tryrolljs/api', () => ({
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
      tokenData: {
        access_token: cache?.tokenData?.access_token ?? 'access_token',
        expires_in: cache?.tokenData?.expires_in ?? 3600,
        refresh_token: cache?.tokenData?.refresh_token ?? 'refresh_token',
        id_token: cache?.tokenData?.id_token ?? 'id_token',
      },
      oauthCode: cache?.oauthCode ?? 'code',
      oauthConfig: config,
      lastUpdateTimestamp: cache?.lastUpdateTimestamp ?? undefined,
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
    mockCache({ tokenData: { access_token: '' } })
    const sdk = new AuthSDK(config, storage)

    await expect(sdk.restoreFromCache()).rejects.toThrow(
      NotAuthorizedCacheError,
    )
  })

  it('refreshes from cache', async () => {
    mockCache()
    mockTokenResponse({ access_token: 'new_access_token', expires_in: 0 })

    const sdk = new AuthSDK(config, storage)
    await sdk.restoreFromCache()
    await sdk.refreshTokens()

    expect(sdk.getAccessToken()).toBe('new_access_token')
    expect(storage.setItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_AUTH',
      JSON.stringify({
        tokenData: {
          access_token: 'new_access_token',
          expires_in: 0,
          refresh_token: 'refresh_token',
          id_token: 'id_token',
        },
        oauthCode: 'code',
        oauthConfig: config,
        lastUpdateTimestamp: new Date().getTime(),
      }),
    )
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
    mockCache({ lastUpdateTimestamp: new Date().getTime() - 3601 })
    mockTokenResponse({ access_token: 'new_access_token' })

    const sdk = new AuthSDK(config, storage)
    await sdk.restoreFromCache()
    await sdk.refreshTokens()

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(storage.setItem).not.toHaveBeenCalled()
  })
})
