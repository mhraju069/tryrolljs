import { renderHook, waitFor } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import Client from '@tryrolljs/api-client'
import { auth } from '@tryrolljs/sdk'
import SessionManager, { useSession } from './index'

const getWrapper =
  ({ apiClient, authSdk }: { apiClient: Client; authSdk: auth.SDK }) =>
  ({ children }: PropsWithChildren<{}>) =>
    (
      <SessionManager apiClient={apiClient} authSdk={authSdk}>
        {children}
      </SessionManager>
    )

describe('useSession', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('restores from cache & loads user', async () => {
    const user = { foo: 'bar' }
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          restoreTokenFromCache: jest.fn().mockResolvedValue(undefined),
        } as any,
        apiClient: { call: jest.fn().mockResolvedValue(user) } as any,
      }),
    })

    await waitFor(() => {
      expect(result.current.user).toBe(user)
    })
  })

  it('initializes new session when no cache', async () => {
    const user = { foo: 'bar' }
    const oauthCode = '123'

    jest
      .spyOn(URLSearchParams.prototype, 'get')
      .mockImplementation((_key) => oauthCode)

    const exchangeCodeForToken = jest.fn().mockResolvedValue(undefined)
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          restoreTokenFromCache: jest.fn().mockRejectedValue(undefined),
          exchangeCodeForToken,
        } as any,
        apiClient: { call: jest.fn().mockResolvedValue(user) } as any,
      }),
    })

    await waitFor(() => {
      expect(exchangeCodeForToken).toHaveBeenCalledWith(oauthCode)
      expect(result.current.user).toBe(user)
    })
  })

  it('clears user & sets error when new session initialization fails', async () => {
    const user = { foo: 'bar' }
    const oauthCode = '123'

    jest
      .spyOn(URLSearchParams.prototype, 'get')
      .mockImplementation((_key) => oauthCode)

    const error = new Error('Forbidden')
    const exchangeCodeForToken = jest.fn().mockRejectedValue(error)
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          restoreTokenFromCache: jest.fn().mockRejectedValue(error),
          exchangeCodeForToken,
          clear: jest.fn(),
        } as any,
        apiClient: { call: jest.fn().mockResolvedValue(user) } as any,
      }),
    })

    await waitFor(() => {
      expect(exchangeCodeForToken).toHaveBeenCalledWith(oauthCode)
      expect(result.current.user).toBe(undefined)
      expect(result.current.error).toBe(error)
    })
  })

  it('sets nothing when no cache & no auth code', async () => {
    const user = { foo: 'bar' }

    jest
      .spyOn(URLSearchParams.prototype, 'get')
      .mockImplementation((_key) => '')

    const exchangeCodeForToken = jest.fn().mockResolvedValue(undefined)
    const call = jest.fn().mockResolvedValue(user)
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          restoreTokenFromCache: jest.fn().mockRejectedValue(undefined),
          exchangeCodeForToken,
        } as any,
        apiClient: { call } as any,
      }),
    })

    await waitFor(() => {
      expect(exchangeCodeForToken).not.toHaveBeenCalled()
      expect(call).not.toHaveBeenCalled()
      expect(result.current.user).toBe(undefined)
    })
  })

  it('sets error when getMe returns an error', async () => {
    const oauthCode = '123'

    jest
      .spyOn(URLSearchParams.prototype, 'get')
      .mockImplementation((_key) => oauthCode)

    const exchangeCodeForToken = jest.fn().mockResolvedValue(undefined)
    const error = new Error('Forbidden')
    const call = jest.fn().mockRejectedValue(error)
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          restoreTokenFromCache: jest.fn().mockRejectedValue(undefined),
          exchangeCodeForToken,
        } as any,
        apiClient: { call } as any,
      }),
    })

    await waitFor(() => {
      expect(exchangeCodeForToken).toHaveBeenCalled()
      expect(call).toHaveBeenCalled()
      expect(result.current.user).toBe(undefined)
      expect(result.current.error).toBe(error)
    })
  })
})
