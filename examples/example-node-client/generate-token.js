require('dotenv').config()
const { auth } = require('@tryrolljs/sdk')

function makeMockStorage() {
  let storage = {}

  return {
    setItem: function (key, value) {
      storage[key] = value || ''
    },
    getItem: function (key) {
      return key in storage ? storage[key] : null
    },
    removeItem: function (key) {
      delete storage[key]
    },
    get length() {
      return Object.keys(storage).length
    },
    key: function (i) {
      const keys = Object.keys(storage)
      return keys[i] || null
    },
  }
}

const generateToken = async () => {
  try {
    const clientAuthSdk = new auth.ClientSDK(
      {
        issuerUrl: process.env.ISSUER_URL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      },
      makeMockStorage(),
    )

    await clientAuthSdk.generateToken()

    console.log(`Your access token is: ${clientAuthSdk.getAccessToken()}.`)
  } catch (e) {
    console.error(e)
  }
}

generateToken()
