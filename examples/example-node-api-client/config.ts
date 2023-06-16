import { ScopeType } from '@roll-network/auth-sdk'

const config = {
  apiUrl: process.env.API_URL || '',
  issuerUrl: process.env.ISSUER_URL || '',
  clientId: process.env.CLIENT_ID || '',
  clientSecret: process.env.CLIENT_SECRET || '',
  scopes: [ScopeType.ReadTx, ScopeType.Offline],
  redirectUrl: process.env.REDIRECT_URL || '',
  logoutRedirectUrl: process.env.LOGOUT_REDIRECT_URL || '',
}

export const platformUserConfig = {
  ...config,
  scopes: [...config.scopes, ScopeType.Masquerade, ScopeType.PlatformUser],
}

export default config
