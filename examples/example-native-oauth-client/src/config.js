const config = {
  apiURL: 'https://api.tryroll.com',
  clientID: 'roll-app',
  issuerURL: 'https://oauth.tryroll.com/oauth2',
  redirectURL: 'roll://wallet',
  scopes: ['offline', 'openid', 'base', 'read-tx', 'write-tx'],
}

export default config
