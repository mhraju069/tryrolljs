export interface OauthConfig {
  clientId: string
  issuerUrl: string
  redirectUrl: string
  logoutRedirectUrl: string
  scopes: string[]
}

export interface Storage {
  setItem(key: string, value: string): void | Promise<void>
  getItem(key: string): string | undefined | Promise<string | undefined>
  removeItem(key: string): void | Promise<void>
}

export interface RequestTokenArgs {
  issuerUrl: string
  grantType: 'authorization_code' | 'refresh_token'
  clientId: string
  refreshToken?: string
  redirectUri?: string
  code: string
  codeVerifier?: string
}

export interface RequestTokenResponseData {
  access_token: string
  expires_in: number
  refresh_token: string
  id_token: string
  error?: string
}

export interface GetLogInUrlArgs {
  issuerUrl: string
  clientId: string
  redirectUrl?: string
  scopes: string[]
  codeChallenge: string
}

export interface GetLogOutUrlArgs {
  issuerUrl: string
  idToken: string
  redirectUrl?: string
}

export type Token = RequestTokenResponseData & {
  last_update_at?: number
}

export type Cache = Partial<{
  token: Token
  code: string
  codeVerifier: string
}>

export enum GrantType {
  AuthorizationCode = 'authorization_code',
  RefreshToken = 'refresh_token',
}
