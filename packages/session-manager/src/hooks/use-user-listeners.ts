import SDK, { Credentials, Event, User } from '@roll-network/auth-sdk'
import { useEffect } from 'react'

const useUserListeners = <U extends User>(
  authSdk: SDK,
  setUser: (user?: U) => void,
) => {
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

    return () => {
      authSdk.off(Event.CredentialsCreated, handleCredentialsChange)
      authSdk.off(Event.CredentialsUpdated, handleCredentialsChange)
    }
  }, [authSdk, setUser])
}

export default useUserListeners
