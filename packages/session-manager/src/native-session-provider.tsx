import * as React from 'react'
import { useState, useRef, useCallback, useEffect } from 'react'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'
import * as qs from 'qs'
import { user as userAPI } from '@tryrolljs/api'
import { types } from '@tryrolljs/api-client'
import { SessionProviderProps } from './types'
import { SessionContext } from './session-provider'

const NativeSessionProvider = ({
  authSdk,
  apiClient,
  children,
}: SessionProviderProps) => {
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

  React.useEffect(() => {
    const initialize = async () => {
      try {
        await authSdk.restoreTokenFromCache()
        const user_ = await userAPI.getMe(apiClient)
        setUser(user_)
      } catch (e) {
        setUser(undefined)
        await authSdk.clear()
      } finally {
        isInitializedRef.current = true
      }
    }

    if (!isInitializedRef.current) {
      initialize()
    }
  }, [apiClient, authSdk])

  const exchangeCode = React.useCallback(
    async (url: string) => {
      try {
        const [_, query] = url.split('?')
        const { code } = qs.parse(query)
        if (typeof code === 'string') {
          await authSdk.exchangeCodeForToken(code)
          const me = await userAPI.getMe(apiClient)
          setUser(me)
        }
      } catch (e) {
        setError(e)
      }
    },
    [apiClient, authSdk],
  )

  const logIn = React.useCallback(async () => {
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

  const logOut = React.useCallback(async () => {
    try {
      await fetch(await authSdk.getLogOutUrl())
    } catch (e) {
      setError(e)
    } finally {
      setUser(undefined)
      await authSdk.clear()
    }
  }, [authSdk])

  const refresh = useCallback(async () => {
    await authSdk.refreshTokens(true)
  }, [authSdk])

  return (
    <SessionContext.Provider value={{ user, logOut, logIn, refresh, error }}>
      {children}
    </SessionContext.Provider>
  )
}

export default NativeSessionProvider
