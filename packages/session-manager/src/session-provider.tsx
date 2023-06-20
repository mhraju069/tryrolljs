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
import { useAuthSdkUser } from './hooks'

export const SessionContext = createContext<SessionContextValue>({
  logIn: Promise.resolve,
  logOut: Promise.resolve,
  refresh: Promise.resolve,
  status: 'initializing',
})

const OAUTH_CODE_URL_PARAM_KEY = 'code'
const OAUTH_STATE_URL_PARAM_KEY = 'state'
const OAUTH_SCOPE_URL_PARAM_KEY = 'scope'

const SessionProvider = ({ authSdk, children }: SessionProviderProps) => {
  const isMountedRef = useRef(false)
  const [status, setStatus] = useState<SessionStatus>('initializing')
  const user = useAuthSdkUser(authSdk)
  const [error, setError] = useState<unknown>()

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

    const initialize = async () => {
      try {
        setStatus('initializing')
        const token = await authSdk.getToken()
        if (!token) {
          await initializeNewSession()
        }
      } catch (e) {
        await initializeNewSession()
      } finally {
        setStatus('stale')
      }
    }

    initialize()
    isMountedRef.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refresh = useCallback(async () => {
    try {
      setStatus('refreshing')
      await authSdk.refreshToken(true)
    } catch (e) {
      setError(e)
    } finally {
      setStatus('stale')
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
      value={{ status, user, logIn, logOut, refresh, error }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)

export default SessionProvider
