# @roll-network/api-client

The `@roll-network/api-client` is a JavaScript package that offers an easy and efficient way to interact with the Roll Network's API services. It provides a convenient and maintainable method to make HTTP requests and manage API tokens. 

The package primarily exports two classes: `Client` and `ClientPool`.

## Prerequisites

The library uses [better-queue](https://www.npmjs.com/package/better-queue), a browser-compatible Node package. When used in a browser environment, it requires the [util](https://www.npmjs.com/package/util) package to be installed.

You can install these packages using npm:

Using npm:

```bash
npm install util
```

Using yarn:

```bash
yarn add util
```

## Installation

Use the package manager npm to install `@roll-network/api-client`.

Using npm:

```bash
npm install @roll-network/api-client
```

Using yarn:

```bash
yarn add @roll-network/api-client
```

## Importing

You can import the package in your project using:

```javascript
import Client, { ClientPool } from '@roll-network/api-client'
```

## Usage

### Client

The `Client` class is designed to interact with the Roll Network's API services using a given configuration and SDK.

```javascript
import SDK from '@roll-network/auth-sdk'
import Client from '@roll-network/api-client'
import { user as userAPI } from '@roll-network/api'

const authSdk = new SDK(
  {
    clientId: config.clientID,
    issuerUrl: config.issuerURL,
    redirectUrl: config.redirectURL,
    logoutRedirectUrl: config.redirectURL,
    scopes: config.scopes,
  },
  window.localStorage,
)

const apiClient = new Client({ baseUrl: config.apiURL }, authSdk)
const user = await userAPI.getMe(apiClient)
```

### ClientPool

The `ClientPool` class creates a set of clients with different SDKs injected. This allows you to switch between different interaction types depending on your requirements.

```javascript
import { SDKPool, InteractionType } from '@roll-network/auth-sdk'
import { ClientPool } from '@roll-network/api-client'

const sdkPool = new SDKPool(config)

await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)
const response = await token.getTokens(
  clientPool.getClient(InteractionType.ClientCredentials),
  answers,
)

const oauthCode = 'foo' // Use a real oauth code here
await sdkPool.getSDK(InteractionType.Code).generateToken(oauthCode)
const response = await token.getTokens(
  clientPool.getClient(InteractionType.Code),
  answers,
)
```

## Errors

The library has custom errors which can be used for precise error handling:

- `CouldntRefreshTokensError`: Thrown when the client fails to refresh the tokens.
