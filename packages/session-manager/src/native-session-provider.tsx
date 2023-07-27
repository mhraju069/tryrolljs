import { useState, useCallback, useEffect, useRef } from 'react'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'
import { parse } from 'qs'
import { SessionProviderProps, SessionStatus } from './types'
import { SessionContext } from './session-provider'
import { useAuthSdkUser } from './hooks'
import { getSessionStatus } from './utils'

const NativeSessionProvider = ({ authSdk, children }: SessionProviderProps) => {
  const isMountedRef = useRef(false)
  const [status, setStatus] = useState<SessionStatus>(
    SessionStatus.Initializing,
  )
  const { user, synced } = useAuthSdkUser(authSdk)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    if (isMountedRef.current) {
      return
    }

    const initialize = async () => {
      try {
        setStatus(SessionStatus.Initializing)
      } catch (e) {
        await authSdk.cleanUp()
      } finally {
        setStatus(SessionStatus.Stale)
      }
    }

    initialize()
    isMountedRef.current = true
  }, [authSdk])

  const exchangeCode = useCallback(
    async (url: string) => {
      try {
        const [_, query] = url.split('?')
        const { code, state } = parse(query)
        if (typeof code === 'string' && typeof state === 'string') {
          await authSdk.generateToken({ code, state })
        }
      } catch (e) {
        setError(e)
      }
    },
    [authSdk],
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
      await authSdk.cleanUp()
    }
  }, [authSdk])

  const refresh = useCallback(async () => {
    try {
      setStatus(SessionStatus.Refreshing)
      await authSdk.refreshToken(true)
    } catch (e) {
    } finally {
      setStatus(SessionStatus.Stale)
    }
  }, [authSdk])

  return (
    <SessionContext.Provider
      value={{
        status: getSessionStatus(status, synced),
        user,
        logOut,
        logIn,
        refresh,
        error,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export default NativeSessionProvider
