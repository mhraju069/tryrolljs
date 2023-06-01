export interface Config {
  clientId: string
  clientSecret: string
  issuerUrl: string
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
}

export interface RequestTokenArgs {
  issuerUrl: string
  clientId: string
  clientSecret: string
  scopes: string[]
}

export interface RequestTokenResponseData {
  access_token: string
  expires_in: number
  token_type: string
  error?: string
}

export type Token = RequestTokenResponseData

export type Cache = Partial<{
  token: Token
  code: string
  codeVerifier: string
}>
