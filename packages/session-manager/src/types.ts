import { PropsWithChildren } from 'react'
import SDK, { User } from '@roll-network/auth-sdk'

export type SessionStatus = 'initializing' | 'refreshing' | 'stale'

export interface SessionContextValue<U extends User = User> {
  user?: U
  logIn: () => Promise<void>
  logOut: () => Promise<void>
  refresh: () => Promise<void>
  error?: unknown
  status: SessionStatus
}

export type SessionProviderProps = PropsWithChildren<{
  authSdk: SDK
}>
