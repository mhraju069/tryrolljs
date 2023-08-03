import { Credentials, User } from '@roll-network/auth-sdk'
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useRef,
} from 'react'
import {
  SessionContextValue,
  SessionProviderProps,
  SessionStatus,
} from './types'
import { useUserListeners } from './hooks'

export const SessionContext = createContext<SessionContextValue>({
  logIn: Promise.resolve,
  logOut: Promise.resolve,
  refresh: Promise.resolve,
  status: SessionStatus.Initializing,
})

const OAUTH_CODE_URL_PARAM_KEY = 'code'
const OAUTH_STATE_URL_PARAM_KEY = 'state'
const OAUTH_SCOPE_URL_PARAM_KEY = 'scope'

const SessionProvider = <U extends User = User>({
  authSdk,
  children,
}: SessionProviderProps) => {
  const isMountedRef = useRef(false)
  const [status, setStatus] = useState<SessionStatus>(
    SessionStatus.Initializing,
  )
  const [user, setUser] = useState<U>()
  const [error, setError] = useState<unknown>()

  useUserListeners<U>(authSdk, setUser)

  useEffect(() => {
    if (isMountedRef.current) {
      return
    }

    const clearOauthParams = () => {
      if (typeof window !== 'undefined') {
        const nextUrl = new URL(window.location.href)
        nextUrl.searchParams.delete(OAUTH_CODE_URL_PARAM_KEY)
        nextUrl.searchParams.delete(OAUTH_STATE_URL_PARAM_KEY)
        nextUrl.searchParams.delete(OAUTH_SCOPE_URL_PARAM_KEY)
        window.history.replaceState({}, document.title, nextUrl.href)
      }
    }

    const getOauthParams = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get(OAUTH_CODE_URL_PARAM_KEY)
      const state = urlParams.get(OAUTH_STATE_URL_PARAM_KEY)

      clearOauthParams()

      return { code, state }
    }

    const initializeNewSession = async () => {
      try {
        const { code, state } = getOauthParams()
        if (code && state) {
          await authSdk.generateToken({ code, state })
        }
      } catch (e) {
        setError(e)
        await authSdk.cleanUp()
      }
    }

    const syncUserWithSession = async () => {
      const credentials = (await authSdk.syncSession()) as Credentials<U>
      if (credentials?.user) {
        setUser(credentials.user)
      }
    }

    const initialize = async () => {
      try {
        setStatus(SessionStatus.Initializing)
        const token = await authSdk.getToken()
        if (token) {
          await syncUserWithSession()
        } else {
          await initializeNewSession()
        }
      } catch (e) {
        await initializeNewSession()
      } finally {
        setStatus(SessionStatus.Stale)
      }
    }

    initialize()
    isMountedRef.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refresh = useCallback(async () => {
    try {
      setStatus(SessionStatus.Refreshing)
      await authSdk.refreshToken(true)
    } catch (e) {
      setError(e)
    } finally {
      setStatus(SessionStatus.Stale)
    }
  }, [authSdk])

  const logIn = useCallback(async () => {
    const url = await authSdk.getLogInUrl()
    window.location.href = url
  }, [authSdk])

  const logOut = useCallback(async () => {
    window.location.href = await authSdk.getLogOutUrl()
  }, [authSdk])

  return (
    <SessionContext.Provider
      value={{
        status,
        user,
        logIn,
        logOut,
        refresh,
        error,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = <U extends User = User>() =>
  useContext(SessionContext) as SessionContextValue<U>

export default SessionProvider
