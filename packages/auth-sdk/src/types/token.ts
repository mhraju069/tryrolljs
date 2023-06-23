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
  code?: string
  codeVerifier?: string | null
}

export interface RequestTokenResponseData {
  access_token: string
  expires_in: number
  refresh_token: string
  id_token: string
  error?: string
}

export type Token = RequestTokenResponseData & {
  last_update_at?: number
}

export interface CodeVerifier {
  id: string
  value: string
}
