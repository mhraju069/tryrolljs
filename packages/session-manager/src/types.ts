import { PropsWithChildren } from 'react'
import { user as userAPI } from '@roll-network/api'
import Client from '@roll-network/api-client'
import SDK from '@roll-network/auth-sdk'

export type SessionStatus = 'initializing' | 'refreshing' | 'stale'

export interface SessionContextValue {
  user?: userAPI.types.GetMeResponseData
  logIn: () => Promise<void>
  logOut: () => Promise<void>
  refresh: () => Promise<void>
  error?: unknown
  status: SessionStatus
}

export type SessionProviderProps = PropsWithChildren<{
  apiClient: Client
  authSdk: SDK
  getMe?: typeof userAPI.getMe
}>
