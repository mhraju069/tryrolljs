import SDK, { Event, User } from '@roll-network/auth-sdk'
import { useEffect, useRef, useState } from 'react'

const useAuthSdkUser = (authSdk: SDK) => {
  const isMountedRef = useRef(false)
  const [user, setUser] = useState<User>()

  useEffect(() => {
    if (isMountedRef.current) {
      return
    }

    authSdk.syncSession()
    isMountedRef.current = true
  }, [authSdk])

  useEffect(() => {
    authSdk.on(Event.UserCreated, setUser)
    authSdk.on(Event.UserUpdated, setUser)

    return () => {
      authSdk.off(Event.UserCreated, setUser)
      authSdk.off(Event.UserUpdated, setUser)
    }
  }, [authSdk])

  return user
}

export default useAuthSdkUser
