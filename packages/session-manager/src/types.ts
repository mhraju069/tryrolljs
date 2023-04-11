import { user as userAPI } from '@tryrolljs/api'
import Client from '@tryrolljs/api-client'
import { auth } from '@tryrolljs/sdk'
import { PropsWithChildren } from 'react'

export interface SessionContextValue {
  user?: userAPI.types.GetMeResponseData
  logIn: () => Promise<void>
  logOut: () => Promise<void>
  refresh: () => Promise<void>
  error?: unknown
}

export type SessionProviderProps = PropsWithChildren<{
  apiClient: Client
  authSdk: auth.SDK
}>
