import { renderHook, waitFor } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import SDK from '@roll-network/auth-sdk'
import SessionProvider, { useSession } from './session-provider'

const getWrapper =
  ({ authSdk }: { authSdk: SDK }) =>
  ({ children }: PropsWithChildren<{}>) =>
    <SessionProvider authSdk={authSdk}>{children}</SessionProvider>

describe('useSession', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('clears auth on unauthorized request', async () => {
    const clearCache = jest.fn()
    renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          clearCache,
        } as any,
      }),
    })

    await waitFor(() => {
      expect(clearCache).toHaveBeenCalled()
    })
  })

  it('restores from cache & loads user', async () => {
    const user = { foo: 'bar' }
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          getToken: jest.fn().mockReturnValue({ access_token: 'token' }),
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

    const generateToken = jest.fn().mockResolvedValue(undefined)
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          generateToken,
        } as any,
      }),
    })

    await waitFor(() => {
      expect(generateToken).toHaveBeenCalledWith(oauthCode)
      expect(result.current.user).toBe(user)
    })
  })

  it('clears user & sets error when new session initialization fails', async () => {
    const oauthCode = '123'

    jest
      .spyOn(URLSearchParams.prototype, 'get')
      .mockImplementation((_key) => oauthCode)

    const error = new Error('Forbidden')
    const generateToken = jest.fn().mockRejectedValue(error)
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          generateToken,
          clearCache: jest.fn(),
        } as any,
      }),
    })

    await waitFor(() => {
      expect(generateToken).toHaveBeenCalledWith(oauthCode)
      expect(result.current.user).toBe(undefined)
      expect(result.current.error).toBe(error)
    })
  })

  it('sets nothing when no cache & no auth code', async () => {
    const user = { foo: 'bar' }

    jest
      .spyOn(URLSearchParams.prototype, 'get')
      .mockImplementation((_key) => '')

    const generateToken = jest.fn().mockResolvedValue(undefined)
    const call = jest.fn().mockResolvedValue(user)
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          generateToken,
        } as any,
      }),
    })

    await waitFor(() => {
      expect(generateToken).not.toHaveBeenCalled()
      expect(call).not.toHaveBeenCalled()
      expect(result.current.user).toBe(undefined)
    })
  })

  it('sets error when getMe returns an error', async () => {
    const oauthCode = '123'

    jest
      .spyOn(URLSearchParams.prototype, 'get')
      .mockImplementation((_key) => oauthCode)

    const generateToken = jest.fn().mockResolvedValue(undefined)
    const error = new Error('Forbidden')
    const call = jest.fn().mockRejectedValue(error)
    const { result } = renderHook(() => useSession(), {
      wrapper: getWrapper({
        authSdk: {
          generateToken,
        } as any,
      }),
    })
    await waitFor(() => {
      expect(generateToken).toHaveBeenCalled()
      expect(call).toHaveBeenCalled()
      expect(result.current.user).toBe(undefined)
      expect(result.current.error).toBe(error)
    })
  })
})
