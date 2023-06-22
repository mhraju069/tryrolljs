export interface Config {
  clientId: string
  issuerUrl: string
  redirectUrl: string
  logoutRedirectUrl: string
  scopes: string[]
  apiUrl: string
  clientSecret?: string
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

export interface GetLogInUrlArgs {
  issuerUrl: string
  clientId: string
  redirectUrl?: string
  scopes: string[]
  codeChallenge: string
  state: string
}

export interface GetLogOutUrlArgs {
  issuerUrl: string
  idToken: string
  redirectUrl?: string
}

export type Token = RequestTokenResponseData & {
  last_update_at?: number
}

export enum InteractionType {
  Code = 'code',
  MasqueradeToken = 'masquerade',
  ClientCredentials = 'clientcredentials',
  Server = 'server',
}

export interface TokenInteraction<T> {
  type: InteractionType
  generateToken: (options: T) => Promise<Token>
  refreshToken: (token: Token) => Promise<Token>
  clearCache?: () => Promise<void>
  getLogInUrl?: () => Promise<string>
  getLogOutUrl?: (token: Token) => Promise<string>
  getUser?: (token: Token) => Promise<User>
}

export type User = {
  userID: string
  username: string
  name: string
  profilePic: string
}

export type Credentials = {
  id: string
  token: Token
  user?: User
  interactionType: InteractionType
}

export enum Event {
  CredentialsUpdated = 'credentialsrupdated',
  CredentialsCreated = 'credentialscreated',
}

export interface CodeVerifier {
  id: string
  value: string
}
