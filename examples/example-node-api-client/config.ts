import { ScopeType } from '@roll-network/auth-sdk'

export default {
  apiUrl: process.env.API_URL || '',
  issuerUrl: process.env.ISSUER_URL || '',
  clientId: process.env.CLIENT_ID || '',
  clientSecret: process.env.CLIENT_SECRET || '',
  scopes: [ScopeType.ReadTx, ScopeType.Offline],
  redirectUrl: process.env.REDIRECT_URL || '',
  logoutRedirectUrl: process.env.LOGOUT_REDIRECT_URL || '',
}
