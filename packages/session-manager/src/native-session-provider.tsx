import { useState, useCallback, useEffect, useRef } from 'react'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'
import * as qs from 'qs'
import { user as userAPI } from '@tryrolljs/api'
import { types } from '@tryrolljs/api-client'
import { SessionProviderProps, SessionStatus } from './types'
import { SessionContext } from './session-provider'

const NativeSessionProvider = ({
  authSdk,
  apiClient,
  getMe = userAPI.getMe,
  children,
}: SessionProviderProps) => {
  const isMountedRef = useRef(false)
  const [status, setStatus] = useState<SessionStatus>('initializing')
  const [user, setUser] = useState<userAPI.types.GetMeResponseData>()
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    const unauthorizedListener = () => authSdk.clear()
    apiClient.on(types.Event.Unauthorized, unauthorizedListener)

    return () => {
      apiClient.off(types.Event.Unauthorized, unauthorizedListener)
    }
  }, [apiClient, authSdk])

  useEffect(() => {
    if (isMountedRef.current) {
      return
    }

    const initialize = async () => {
      try {
        setStatus('initializing')
        await authSdk.restoreTokenFromCache()
        const user_ = await getMe(apiClient)
        setUser(user_.data)
      } catch (e) {
        setUser(undefined)
      } finally {
        setStatus('stale')
      }
    }

    initialize()
    isMountedRef.current = true
  }, [apiClient, authSdk, getMe])

  const exchangeCode = useCallback(
    async (url: string) => {
      try {
        const [_, query] = url.split('?')
        const { code } = qs.parse(query)
        if (typeof code === 'string') {
          await authSdk.exchangeCodeForToken(code)
          const me = await userAPI.getMe(apiClient)
          setUser(me.data)
        }
      } catch (e) {
        setError(e)
      }
    },
    [apiClient, authSdk],
  )

  const logIn = useCallback(async () => {
    const url = await authSdk.getLogInUrl()

    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.openAuth(
          url,
          authSdk.getConfig().redirectUrl,
          {
            // iOS Properties
            ephemeralWebSession: false,
            // Android Properties
            showTitle: false,
            enableUrlBarHiding: true,
            enableDefaultShare: false,
          },
        )
        if (result.type === 'success') {
          await exchangeCode(result.url)
        } else {
          InAppBrowser.closeAuth()
        }
      }
    } catch (e) {
      setError(e)
    }
  }, [authSdk, exchangeCode])

  const logOut = useCallback(async () => {
    try {
      await fetch(await authSdk.getLogOutUrl())
    } catch (e) {
      setError(e)
    } finally {
      setUser(undefined)
    }
  }, [authSdk])

  const refresh = useCallback(async () => {
    try {
      setStatus('refreshing')
      await authSdk.refreshTokens(true)
    } catch (e) {
    } finally {
      setStatus('stale')
    }
  }, [authSdk])

  return (
    <SessionContext.Provider
      value={{ status, user, logOut, logIn, refresh, error }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export default NativeSessionProvider
