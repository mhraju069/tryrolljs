export interface Config {
  clientId: string
  issuerUrl: string
  redirectUrl: string
  logoutRedirectUrl: string
  scopes: string[]
}

export interface Storage {
  setItem(key: string, value: string): void | Promise<void>
  getItem(
    key: string,
  ): string | undefined | null | Promise<string | undefined | null>
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
  PlatformUser = 'platform-user',
}

export interface RequestTokenArgs {
  issuerUrl: string
  grantType: GrantType
  clientId: string
  refreshToken?: string
  redirectUrl?: string
  code: string
  codeVerifier?: string | null
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

export interface TokenInteraction<T> {
  refreshToken?: (token: Token) => Promise<Token>
  generateToken(arg: T): Promise<Token>
  clearCache?: () => Promise<void>
  restoreCache?: () => Promise<void>
  getLogInUrl?: () => Promise<string>
  getLogOutUrl?: (token: Token) => Promise<string>
}
