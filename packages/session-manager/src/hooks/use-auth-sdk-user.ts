import SDK, { Credentials, Event, User } from '@roll-network/auth-sdk'
import { useCallback, useEffect, useRef, useState } from 'react'

const useAuthSdkUser = <U extends User>(authSdk: SDK) => {
  const isSyncScheduledRef = useRef(false)
  const isSyncedRef = useRef(false)
  const [user, setUser] = useState<U>()

  const syncUser = useCallback(async () => {
    if (!isSyncScheduledRef.current) {
      isSyncScheduledRef.current = true
      await authSdk.syncSession()
    }
  }, [authSdk])

  const setUpCredentialsListeners = useCallback(() => {
    const handleCredentialsChange = (credentials?: Credentials<U>) => {
      if (credentials?.user) {
        setUser(credentials.user)
      } else {
        setUser(undefined)
      }

      if (isSyncScheduledRef.current) {
        isSyncScheduledRef.current = false
        isSyncedRef.current = true
      }
    }

    authSdk.on(Event.CredentialsCreated, handleCredentialsChange)
    authSdk.on(Event.CredentialsUpdated, handleCredentialsChange)

    return () => {
      authSdk.off(Event.CredentialsCreated, handleCredentialsChange)
      authSdk.off(Event.CredentialsUpdated, handleCredentialsChange)
    }
  }, [authSdk])

  useEffect(() => {
    const removeListeners = setUpCredentialsListeners()

    syncUser()

    return removeListeners
  }, [setUpCredentialsListeners, syncUser])

  return { user, synced: isSyncedRef.current }
}

export default useAuthSdkUser
