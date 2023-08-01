import { renderHook, waitFor } from '@testing-library/react'
import SDK, { Event } from '@roll-network/auth-sdk'
import useUserListeners from './use-user-listeners'

const mockAuthSdk = {
  syncSession: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
} as any

const mockSetUser = jest.fn()

describe('useUserListeners', () => {
  beforeEach(() => {
    jest.clearAllMocks()
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

    renderHook(() => useUserListeners(sdk, mockSetUser))

    const mockCredentials = { user: mockUser }
    sdk.emit(Event.CredentialsCreated, mockCredentials)
    await waitFor(() => {
      expect(mockSetUser).toHaveBeenCalledWith(mockUser)
    })

    const updatedCredentials = { user: undefined }
    sdk.emit(Event.CredentialsUpdated, updatedCredentials)
    await waitFor(() => {
      expect(mockSetUser).toHaveBeenCalledWith(undefined)
    })
  })

  it('cleans up event listeners', () => {
    const { unmount } = renderHook(() =>
      useUserListeners(mockAuthSdk, mockSetUser),
    )

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
