import { user as userAPI } from '@tryrolljs/api'
import Client, { types } from '@tryrolljs/api-client'
import { auth } from '@tryrolljs/sdk'
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
} from 'react'

export const SessionContext = createContext<{
  user?: userAPI.types.GetMeResponseData
  logIn: () => Promise<void>
  logOut: () => Promise<void>
  refresh: () => Promise<void>
  error?: unknown
}>({
  logIn: Promise.resolve,
  logOut: Promise.resolve,
  refresh: Promise.resolve,
})

type Props = PropsWithChildren<{
  apiClient: Client
  authSdk: auth.SDK
}>

const OAUTH_CODE_URL_PARAM_KEY = 'code'

const SessionProvider = ({ apiClient, authSdk, children }: Props) => {
  const isInitializedRef = useRef(false)
  const [user, setUser] = useState<userAPI.types.GetMeResponseData>()
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    const listener = async () => {
      await authSdk.clear()
    }
    apiClient.on(types.Event.Unauthorized, listener)

    return () => {
      apiClient.off(types.Event.Unauthorized, listener)
    }
  }, [apiClient, authSdk])

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user_ = await userAPI.getMe(apiClient)
        setUser(user_)
      } catch (e) {
        setError(e)
      }
    }

    const getOauthCode = () => {
      const urlParams = new URLSearchParams(window.location.search)
      return urlParams.get(OAUTH_CODE_URL_PARAM_KEY)
    }

    const initializeNewSession = async () => {
      try {
        const oauthCode = getOauthCode()
        if (oauthCode) {
          await authSdk.exchangeCodeForToken(oauthCode)
          await loadUserData()
        }
      } catch (e) {
        await authSdk.clear()
        setError(e)
        setUser(undefined)
      }
    }

    const initialize = async () => {
      try {
        await authSdk.restoreTokenFromCache()
        if (authSdk.getAccessToken()) {
          await loadUserData()
        } else {
          await initializeNewSession()
        }
      } catch (e) {
        await initializeNewSession()
      }
    }

    if (!isInitializedRef.current) {
      initialize()
      isInitializedRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refresh = useCallback(async () => {
    await authSdk.refreshTokens(true)
  }, [authSdk])

  const logIn = useCallback(async () => {
    window.location.href = await authSdk.getLogInUrl()
  }, [authSdk])

  const logOut = useCallback(async () => {
    window.location.href = await authSdk.getLogOutUrl()
  }, [authSdk])

  return (
    <SessionContext.Provider value={{ user, logIn, logOut, refresh, error }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)

export default SessionProvider
