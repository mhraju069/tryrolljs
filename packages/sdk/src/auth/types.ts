import { auth } from '@tryrolljs/api'

export interface OauthConfig {
  clientId: string
  issuerUrl: string
  redirectUrl: string
  logoutRedirectUrl: string
  scopes: string[]
}

export interface Storage {
  setItem(key: string, value: string | undefined): void | Promise<void>
  getItem(key: string): string | undefined | Promise<string | undefined>
}

export type AuthState = auth.types.RequestTokenResponseData & {
  last_update_at?: number
}

export type Cache = Partial<{
  oauthConfig: OauthConfig
  authState: AuthState
  authCode?: string
}>

export enum GrantType {
  AuthorizationCode = 'authorization_code',
  RefreshToken = 'refresh_token',
}

export enum Event {
  AuthStateChange = 'AuthStateChange',
}
