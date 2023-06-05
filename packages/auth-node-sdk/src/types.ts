export interface Config {
  clientId: string
  issuerUrl: string
  redirectUrl: string
  apiUrl: string
  logoutRedirectUrl: string
  clientSecret: string
  scopes: string[]
}

export interface Storage {
  setItem(key: string, value: string): void | Promise<void>
  getItem(key: string): string | undefined | Promise<string | undefined>
  removeItem(key: string): void | Promise<void>
}

export enum GrantType {
  AuthorizationCode = 'authorization_code',
  RefreshToken = 'refresh_token',
  ClientCredentials = 'client_credentials',
}

export enum ScopeType {
  Offline = 'offline',
  ReadTx = 'read-tx',
  Masquerade = 'masquerade',
}

export interface RequestTokenArgs {
  issuerUrl: string
  grantType: GrantType.AuthorizationCode | GrantType.RefreshToken
  clientId: string
  refreshToken?: string
  redirectUrl?: string
  code: string
  codeVerifier?: string
  clientSecret: string
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

export type Cache = Partial<{
  token: Token
  code: string
  codeVerifier: string
}>

export interface RedirectToResponse {
  redirect_to: string
}

export type Token = RequestTokenResponseData
