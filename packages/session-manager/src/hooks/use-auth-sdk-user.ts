import SDK, { Credentials, Event, User } from '@roll-network/auth-sdk'
import { useEffect, useRef, useState } from 'react'

const useAuthSdkUser = <U extends User>(authSdk: SDK) => {
  const isSyncedRef = useRef(false)
  const [user, setUser] = useState<U>()

  useEffect(() => {
    const handleCredentialsChange = (credentials?: Credentials<U>) => {
      if (credentials?.user) {
        setUser(credentials.user)
      } else {
        setUser(undefined)
      }
    }

    authSdk.on(Event.CredentialsCreated, handleCredentialsChange)
    authSdk.on(Event.CredentialsUpdated, handleCredentialsChange)

    if (!isSyncedRef.current) {
      authSdk.syncSession()
      isSyncedRef.current = true
    }

    return () => {
      authSdk.off(Event.CredentialsCreated, handleCredentialsChange)
      authSdk.off(Event.CredentialsUpdated, handleCredentialsChange)
    }
  }, [authSdk])

  return user
}

export default useAuthSdkUser
