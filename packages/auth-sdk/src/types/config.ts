export interface Config {
  clientId: string
  issuerUrl: string
  redirectUrl: string
  logoutRedirectUrl: string
  scopes: string[]
  apiUrl: string
  clientSecret?: string
}
