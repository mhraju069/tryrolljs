require('dotenv').config()
const { auth } = require('@tryrolljs/sdk')

const index = async () => {
  const clientAuthSdk = new auth.ClientSDK({
    issuerUrl: 'https://oauth.tryroll.com/oauth2',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  await clientAuthSdk.generateToken()

  console.log(`Your access token is: ${clientAuthSdk.getAccessToken()}.`)
}

index()
