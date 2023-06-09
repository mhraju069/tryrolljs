import type { PartialDeep } from 'type-fest'
import { requestToken } from './code-token-interaction/api'
import {
  InteractionType,
  RequestTokenResponseData,
  Token,
  StorageKey,
} from './types'
import SDKPool from './sdk-pool'
import { getPrefixedStorageKey } from './utils'

const config = {
  clientId: 'clientId',
  redirectUrl: 'http://localhost:8000',
  logoutRedirectUrl: 'http://localhost:8000',
  issuerUrl: 'http://localhost:3000/oauth2',
  scopes: ['offline', 'openid', 'base', 'read-tx', 'write-tx'],
}

const getRealStorage = () => {
  const storage: Record<string, string> = {}
  return {
    getItem: jest.fn().mockImplementation((key: string) => {
      return storage[key]
    }),
    setItem: jest.fn().mockImplementation((key: string, value: string) => {
      storage[key] = value
    }),
    removeItem: jest.fn().mockImplementation((key: string) => {
      delete storage[key]
    }),
  }
}

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

const getRealStorageWithData = (
  cache: PartialDeep<{ code: string; codeVerifier: string; token: Token }> = {},
) => {
  const storage = getRealStorage()
  storage.setItem(
    getPrefixedStorageKey(InteractionType.Code, StorageKey.Token),
    JSON.stringify({
      access_token: cache?.token?.access_token ?? 'access_token',
      expires_in: cache?.token?.expires_in ?? 3600,
      refresh_token: cache?.token?.refresh_token ?? 'refresh_token',
      id_token: cache?.token?.id_token ?? 'id_token',
      last_update_at: cache?.token?.last_update_at ?? undefined,
    }),
  )
  storage.setItem(
    getPrefixedStorageKey(InteractionType.Code, StorageKey.Code),
    cache.code ?? 'code',
  )
  storage.setItem(
    getPrefixedStorageKey(InteractionType.Code, StorageKey.CodeVerifier),
    cache.code ?? 'code_verifier',
  )

  storage.getItem.mockClear()
  storage.setItem.mockClear()
  storage.removeItem.mockClear()

  return storage
}

describe('Code SDKPool', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('makes session', async () => {
    mockTokenResponse()
    const realStorage = getRealStorage()
    realStorage.setItem(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.CodeVerifier),
      '123',
    )
    const sdkPool = new SDKPool(config, realStorage)

    await sdkPool.getSDK(InteractionType.Code).generateToken('code')

    const token = await sdkPool.getSDK(InteractionType.Code).getToken()
    expect(token?.access_token).toBe('access_token')
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
    realStorage.setItem(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.CodeVerifier),
      '123',
    )
    const sdkPool = new SDKPool(config, realStorage)

    mockTokenResponse({ expires_in: 0 })

    await sdkPool.getSDK(InteractionType.Code).generateToken('code')

    mockTokenResponse({ access_token: 'new_access_token', expires_in: 0 })

    await sdkPool.getSDK(InteractionType.Code).refreshToken()

    const token = await sdkPool.getSDK(InteractionType.Code).getToken()
    expect(token?.access_token).toBe('new_access_token')
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
    const storage = getRealStorageWithData()
    mockTokenResponse({ access_token: 'new_access_token', expires_in: 0 })

    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    const mockDateConstructor = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateInstance)

    const sdkPool = new SDKPool(config, storage)
    await sdkPool.getSDK(InteractionType.Code).restoreCache()
    await sdkPool.getSDK(InteractionType.Code).refreshToken()

    const token = await sdkPool.getSDK(InteractionType.Code).getToken()
    expect(token?.access_token).toBe('new_access_token')
    expect(storage.setItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.Token),
      JSON.stringify({
        access_token: 'access_token',
        expires_in: 3600,
        refresh_token: 'refresh_token',
        id_token: 'id_token',
      }),
    )
    expect(storage.setItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.Code),
      'code',
    )

    mockDateConstructor.mockRestore()
  })

  it('refreshes when force', async () => {
    const storage = getRealStorageWithData()

    const sdkPool = new SDKPool(config, storage)
    mockTokenResponse()
    await sdkPool.getSDK(InteractionType.Code).generateToken('code')

    mockTokenResponse({ access_token: 'new_access_token' })
    await sdkPool.getSDK(InteractionType.Code).refreshToken(true)

    const token = await sdkPool.getSDK(InteractionType.Code).getToken()
    expect(token?.access_token).toBe('new_access_token')
  })

  it('skips refresh if tokens are up-to-date', async () => {
    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    const mockDateConstructor = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateInstance)

    const storage = getRealStorageWithData({
      token: { last_update_at: mockSeconds - 3600 * 1000 + 1 },
    })
    mockTokenResponse({ access_token: 'new_access_token' })

    const sdkPool = new SDKPool(config, storage)
    await sdkPool.getSDK(InteractionType.Code).restoreCache()
    await sdkPool.getSDK(InteractionType.Code).refreshToken()

    const token = await sdkPool.getSDK(InteractionType.Code).getToken()
    expect(token?.access_token).toBe('access_token')
    expect(storage.setItem).toHaveBeenCalledTimes(3)
    expect(storage.setItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.Token),
      JSON.stringify({
        access_token: 'access_token',
        expires_in: 3600,
        refresh_token: 'refresh_token',
        id_token: 'id_token',
        last_update_at: 1466420890001,
      }),
    )
    expect(storage.setItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.Code),
      'code',
    )
    expect(storage.setItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.CodeVerifier),
      'code_verifier',
    )

    mockDateConstructor.mockRestore()
  })

  it('clears', async () => {
    const storage = getRealStorageWithData()

    const mockSeconds = 1466424490000
    const mockDateInstance = new Date(mockSeconds)
    const mockDateConstructor = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateInstance)

    const sdkPool = new SDKPool(config, storage)
    await sdkPool.getSDK(InteractionType.Code).restoreCache()

    const token = await sdkPool.getSDK(InteractionType.Code).getToken()
    expect(token?.access_token).toBe('access_token')
    expect(storage.setItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.Token),
      JSON.stringify({
        access_token: 'access_token',
        expires_in: 3600,
        refresh_token: 'refresh_token',
        id_token: 'id_token',
      }),
    )
    expect(storage.setItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.Code),
      'code',
    )

    await sdkPool.getSDK(InteractionType.Code).clearCache()

    const tokenAfterClear = await sdkPool
      .getSDK(InteractionType.Code)
      .getToken()
    expect(tokenAfterClear?.access_token).toBe(undefined)

    expect(storage.removeItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.Token),
    )
    expect(storage.removeItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.Code),
    )
    expect(storage.removeItem).toHaveBeenCalledWith(
      getPrefixedStorageKey(InteractionType.Code, StorageKey.CodeVerifier),
    )

    mockDateConstructor.mockRestore()
  })
})
