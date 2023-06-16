# @roll-network/auth-sdk

`@roll-network/auth-sdk` is a library that provides functionalities for handling token interactions in Node.js and Browser environments, making it easier for developers to perform OAuth operations. The SDK provides various types of interactions based on the context, with each type corresponding to a specific OAuth flow. 

## Installation

Using npm:

```
npm install @roll-network/auth-sdk
```

Using yarn:

```
yarn add @roll-network/auth-sdk
```

## Core Concepts

The library exposes an `SDK` and `SDKPool` classes which serve as the main entry points to the functionality. The `SDK` class provides methods to perform token operations like refreshing a token, generating a new token, checking if a token is expired, and getting login and logout URLs. The `SDKPool` class manages multiple instances of the `SDK` class, each with different interaction types.

The interaction types include:

- `Code`: Implements the authorization code flow, the most common OAuth2.0 flow.

- `ClientCredentials`: Implements the client credentials flow, suitable for server-to-server authentication where a client acts on its own behalf.

- `Server`: Implements a flow that uses the user's browser to perform OAuth but with all logic executed server-side in a Node.js environment. This flow starts an express server, generates the login URL and opens it in a default browser. Once the authorization code is obtained, it is exchanged for tokens.

## Usage

Firstly, import the required classes and types:

```javascript
import SDK, { SDKPool, InteractionType } from '@roll-network/auth-sdk'
```

### Initializing `SDK`

To initialize `SDK`, you need to provide `config`, `storage` and `interaction`. 

`config` is an object that includes various configuration options, such as your OAuth credentials. 

`storage` is a storage engine that will be used by the SDK to store tokens. You can either provide your own implementation of the `Storage` interface or use the built-in `makeInMemoryStorage` function to create a simple in-memory storage. **(in-memory storage by default)**

`interaction` is an object that handles the interaction with the OAuth server. You can either provide your own implementation of the `TokenInteraction` interface or use one of the built-in interaction types. **(`CodeTokenInteraction` by default)**

Here's an example:

```javascript
const config = { /* your config */ };

const sdk = new SDK(config);
```

After that, you can use methods of the SDK to interact with the OAuth server:

```javascript
// Generate a new token
await sdk.generateToken();

// Refresh the token
await sdk.refreshToken();

// Check if the token is expired
const isExpired = await sdk.isTokenExpired();

// Get login and logout URLs
const loginUrl = await sdk.getLogInUrl();
const logoutUrl = await sdk.getLogOutUrl();
```

### Initializing `SDKPool`

`SDKPool` manages multiple instances of `SDK`, each for a different interaction type. It's useful when you need to support multiple OAuth flows in your application.

```javascript
const config = { /* your config */ };

const sdkPool = new SDKPool(config);
```

After that, you can use `getSDK` method of the `SDKPool` to get an SDK for a specific interaction type:

```javascript
const codeSdk = sdkPool.getSDK(InteractionType.Code);
const clientCredentialsSdk = sdkPool.getSDK(InteractionType.ClientCredentials);
```

Then, you can use these SDKs to interact with the OAuth server, just like in the `SDK` example above.

## Important Notes

- The library is primarily designed for use in Node.js environments but the `Code`, `ClientCredentials` & `MasqueradeToken` interactions can be used in a browser environment as well. 
- The `Server` interaction type uses Express server under the hood. 
