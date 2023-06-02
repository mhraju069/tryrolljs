import { renderHook, waitFor } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import Client from '@tryrolljs/api-client'
import SDK from '../../auth-sdk/dist/cjs'
import SessionProvider, { useSession } from './session-provider'

const getWrapper =
  ({ apiClient, authSdk }: { apiClient: Client; authSdk: SDK }) =>
  ({ children }: PropsWithChildren<{}>) =>
    (
      <SessionProvider apiClient={apiClient} authSdk={authSdk}>
        {children}
      </SessionProvider>
    )

describe('useSession', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('clears auth on unauthorized request', async () => {
    const user = { foo: 'bar' }
    const clear = jest.fn()
    renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          restoreTokenFromCache: jest.fn().mockResolvedValue(undefined),
          clear,
        } as any,
        apiClient: {
          on: jest.fn().mockImplementation((_, listener) => listener()),
          off: jest.fn(),
          call: jest.fn().mockResolvedValue(user),
        } as any,
      }),
    })

    await waitFor(() => {
      expect(clear).toHaveBeenCalled()
    })
  })

  it('restores from cache & loads user', async () => {
    const user = { foo: 'bar' }
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          restoreTokenFromCache: jest.fn().mockResolvedValue(undefined),
          getAccessToken: jest.fn().mockReturnValue('token'),
        } as any,
        apiClient: {
          on: jest.fn(),
          off: jest.fn(),
          call: jest.fn().mockResolvedValue({ data: user }),
        } as any,
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
        apiClient: {
          on: jest.fn(),
          off: jest.fn(),
          call: jest.fn().mockResolvedValue({ data: user }),
        } as any,
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
        apiClient: {
          on: jest.fn(),
          off: jest.fn(),
          call: jest.fn().mockResolvedValue(user),
        } as any,
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
        apiClient: {
          on: jest.fn(),
          off: jest.fn(),
          call,
        } as any,
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
        apiClient: {
          on: jest.fn(),
          off: jest.fn(),
          call,
        } as any,
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
