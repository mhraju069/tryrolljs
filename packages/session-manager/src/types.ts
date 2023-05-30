import { user as userAPI } from '@tryrolljs/api'
import Client from '@tryrolljs/api-client'
import SDK from '@tryrolljs/auth-web-sdk'
import { PropsWithChildren } from 'react'

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
