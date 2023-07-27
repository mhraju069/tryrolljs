import SDK, { Credentials, Event, User } from '@roll-network/auth-sdk'
import { useCallback, useEffect, useState } from 'react'

const useAuthSdkUser = <U extends User>(authSdk: SDK) => {
  const [isSynced, setIsSynced] = useState(false)
  const [user, setUser] = useState<U>()

  const syncUser = useCallback(async () => {
    if (!isSynced) {
      await authSdk.syncSession()
      setIsSynced(true)
    }
  }, [isSynced, authSdk])

  const setUpCredentialsListeners = useCallback(() => {
    const handleCredentialsChange = (credentials?: Credentials<U>) => {
      if (credentials?.user) {
        setUser(credentials.user)
      } else {
        setUser(undefined)
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

  return { user, synced: isSynced }
}

export default useAuthSdkUser
