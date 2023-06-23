import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import SessionProvider, { SessionContext } from './session-provider'

const mockAuthSdk = {
  syncSession: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
} as any

describe('SessionProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with initial state', () => {
    render(
      <SessionProvider authSdk={mockAuthSdk}>
        <SessionContext.Consumer>
          {({ status }) => <div data-testid="status">{status}</div>}
        </SessionContext.Consumer>
      </SessionProvider>,
    )

    const statusElement = screen.getByTestId('status')
    expect(statusElement.textContent).toBe('initializing')
  })

  it('logs in', () => {
    const mockLogInUrl = 'https://example.com/login'
    const mockAuthSdk_ = {
      ...mockAuthSdk,
      getLogInUrl: jest.fn().mockResolvedValue(mockLogInUrl),
    }

    render(
      <SessionProvider authSdk={mockAuthSdk_}>
        <SessionContext.Consumer>
          {({ logIn }) => <button onClick={logIn}>Log In</button>}
        </SessionContext.Consumer>
      </SessionProvider>,
    )

    const logInButton = screen.getByText('Log In')
    fireEvent.click(logInButton)

    expect(mockAuthSdk_.getLogInUrl).toHaveBeenCalled()
  })

  it('logs out', () => {
    const mockLogOurUrl = 'https://example.com/logout'
    const mockAuthSdk_ = {
      ...mockAuthSdk,
      getLogOutUrl: jest.fn().mockResolvedValue(mockLogOurUrl),
    }

    render(
      <SessionProvider authSdk={mockAuthSdk_}>
        <SessionContext.Consumer>
          {({ logOut }) => <button onClick={logOut}>Log Out</button>}
        </SessionContext.Consumer>
      </SessionProvider>,
    )

    const logOutButton = screen.getByText('Log Out')
    fireEvent.click(logOutButton)

    expect(mockAuthSdk_.getLogOutUrl).toHaveBeenCalled()
  })

  it('refreshes', async () => {
    const mockAuthSdk_ = {
      ...mockAuthSdk,
      refreshToken: jest.fn(),
    }

    render(
      <SessionProvider authSdk={mockAuthSdk_}>
        <SessionContext.Consumer>
          {({ refresh, status }) => (
            <>
              <button onClick={refresh}>Refresh</button>
              <div data-testid="status">{status}</div>
            </>
          )}
        </SessionContext.Consumer>
      </SessionProvider>,
    )

    const refreshButton = screen.getByText('Refresh')
    fireEvent.click(refreshButton)

    const statusElement = screen.getByTestId('status')
    expect(statusElement.textContent).toBe('refreshing')
    expect(mockAuthSdk_.refreshToken).toHaveBeenCalled()
    await waitFor(() => {
      expect(statusElement.textContent).toBe('stale')
    })
  })
})
