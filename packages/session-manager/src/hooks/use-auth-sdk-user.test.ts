import { renderHook, waitFor } from '@testing-library/react'
import SDK, { Event } from '@roll-network/auth-sdk'
import useAuthSdkUser from './use-auth-sdk-user'

const mockAuthSdk = {
  syncSession: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
} as any

describe('useAuthSdkUser', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('returns undefined user initially', () => {
    const { result } = renderHook(() => useAuthSdkUser(mockAuthSdk))

    expect(result.current.user).toBeUndefined()
  })

  it('updates user on credentials change', async () => {
    const sdk = new SDK({
      clientId: '',
      issuerUrl: '',
      redirectUrl: '',
      logoutRedirectUrl: '',
      scopes: [],
      apiUrl: '',
    })
    const mockUser = { id: '123', name: 'John Doe' }

    const { result } = renderHook(() => useAuthSdkUser(sdk))

    expect(result.current.user).toBeUndefined()

    const mockCredentials = { user: mockUser }
    sdk.emit(Event.CredentialsCreated, mockCredentials)
    await waitFor(() => {
      expect(result.current.user).toEqual(mockUser)
    })

    const updatedCredentials = { user: undefined }
    sdk.emit(Event.CredentialsUpdated, updatedCredentials)
    await waitFor(() => {
      expect(result.current.user).toBeUndefined()
    })
  })

  it('cleans up event listeners', () => {
    const { unmount } = renderHook(() => useAuthSdkUser(mockAuthSdk))

    unmount()

    expect(mockAuthSdk.off).toHaveBeenCalledWith(
      Event.CredentialsCreated,
      expect.any(Function),
    )
    expect(mockAuthSdk.off).toHaveBeenCalledWith(
      Event.CredentialsUpdated,
      expect.any(Function),
    )
  })
})
