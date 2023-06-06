import type { PartialDeep } from 'type-fest'
import { requestToken } from './code-token-interaction/api'
import {
  CODE_STORAGE_KEY,
  CODE_VERIFIER_STORAGE_KEY,
} from './code-token-interaction/constants'
import type { RequestTokenResponseData, Token } from './types'
import SDK from './sdk'
import { TOKEN_STORAGE_KEY } from './constants'
import CodeTokenInteraction from './code-token-interaction'

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
jest.mock('./code-token-interaction/api', () => ({
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

const mockCache = (
  cache: PartialDeep<{ code: string; codeVerifier: string; token: Token }> = {},
) => {
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

describe('Browser Auth SDK', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('makes session', async () => {
    mockTokenResponse()
    const realStorage = getRealStorage()
    realStorage.setItem(CODE_VERIFIER_STORAGE_KEY, '123')
    const sdk = new SDK(config, realStorage, CodeTokenInteraction)

    await sdk.generateToken({ code: 'code' })

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(requestToken).toHaveBeenCalledWith({
      issuerUrl: 'http://localhost:3000/oauth2',
      code: 'code',
      grantType: 'authorization_code',
      redirectUrl: 'http://localhost:8000',
      clientId: 'clientId',
      codeVerifier: '123',
    })
  })

  it('refreshes and updates token', async () => {
    const realStorage = getRealStorage()
    realStorage.setItem(CODE_VERIFIER_STORAGE_KEY, '123')
    const sdk = new SDK(config, realStorage, CodeTokenInteraction)

    mockTokenResponse({ expires_in: 0 })

    await sdk.generateToken({ code: 'code' })

    mockTokenResponse({ access_token: 'new_access_token', expires_in: 0 })

    await sdk.refreshToken()

    expect(sdk.getAccessToken()).toBe('new_access_token')
    expect(requestToken).toHaveBeenCalledTimes(2)
    expect(requestToken).toHaveBeenLastCalledWith({
      issuerUrl: 'http://localhost:3000/oauth2',
      code: 'code',
      grantType: 'refresh_token',
      redirectUrl: 'http://localhost:8000',
      clientId: 'clientId',
      refreshToken: 'refresh_token',
    })
  })

  it('refreshes from cache', async () => {
    mockCache()
    mockTokenResponse({ access_token: 'new_access_token', expires_in: 0 })

    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    const mockDateConstructor = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateInstance)

    const sdk = new SDK(config, storage, CodeTokenInteraction)
    await sdk.restoreCachedToken()
    await sdk.refreshToken()

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
    const sdk = new SDK(config, storage, CodeTokenInteraction)
    mockTokenResponse()
    await sdk.generateToken({ code: 'code' })

    mockTokenResponse({ access_token: 'new_access_token' })
    await sdk.refreshToken(true)

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

    const sdk = new SDK(config, storage, CodeTokenInteraction)
    await sdk.restoreCachedToken()
    await sdk.refreshToken()

    expect(sdk.getAccessToken()).toBe('access_token')
    expect(storage.setItem).toHaveBeenCalledTimes(3)
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
    expect(storage.setItem).toHaveBeenCalledWith(
      CODE_VERIFIER_STORAGE_KEY,
      'code_verifier',
    )

    mockDateConstructor.mockRestore()
  })

  it('clears', async () => {
    mockCache()

    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    const mockDateConstructor = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateInstance)

    const sdk = new SDK(config, storage, CodeTokenInteraction)
    await sdk.restoreCachedToken()

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

    await sdk.clearCache()
    expect(sdk.getAccessToken()).toBe(undefined)
    expect(storage.removeItem).toHaveBeenCalledWith('ROLL_AUTHSDK_TOKEN')
    expect(storage.removeItem).toHaveBeenCalledWith('ROLL_AUTHSDK_CODE')
    expect(storage.removeItem).toHaveBeenCalledWith(
      'ROLL_AUTHSDK_CODE_VERIFIER',
    )

    mockDateConstructor.mockRestore()
  })
})
