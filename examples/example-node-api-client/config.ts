import { ScopeType } from '@tryrolljs/auth-sdk'

export default {
  issuerUrl: process.env.ISSUER_URL || '',
  clientId: process.env.CLIENT_ID || '',
  clientSecret: process.env.CLIENT_SECRET || '',
  scopes: [
    ScopeType.ReadTx,
    ScopeType.Offline,
    ScopeType.Masquerade,
    ScopeType.PlatformUser,
  ],
  redirectUrl: '',
  logoutRedirectUrl: '',
}
