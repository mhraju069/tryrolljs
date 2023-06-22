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

`store` is a store engine that will be used by the SDK to store tokens. You can either provide your own implementation of the `Store` interface or use the built-in `InMemoryStore` function to create a simple in-memory storage **(in-memory storage by default)**. In addition to that, there is a `KeyValueStoreAdapter` class that can be used to transform key-value store to `Store` (`new KeyValueStoreAdapter(window.localStorage)`).

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

#### Multiple users

The SDK now also supports multiple users, identified by userId. When calling token methods like `refreshToken`, `generateToken`, `isTokenExpired`, you can optionally provide the userId to handle token operations for specific users. If not provided, operations will be performed for a default user.

When there are multiple users' tokens stored, userId must be provided. Otherwise, an `UserIdRequiredError` will be thrown.

After that, you can use methods of the SDK to interact with the OAuth server:

```javascript
// Generate a new token
await sdk.generateToken({}, userId);

// Refresh the token
await sdk.refreshToken(true, userId);

// Check if the token is expired
const isExpired = await sdk.isTokenExpired(userId);

// Get login and logout URLs
const loginUrl = await sdk.getLogInUrl();
const logoutUrl = await sdk.getLogOutUrl(userId);
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

### Using with React Native

If you're using this library with React Native, please be aware that it contains modules specifically designed for the Node.js environment, and these modules are not natively compatible with React Native. However, you can work around this by mapping these Node.js-specific modules to the noop3 package using the extraNodeModules configuration in your Metro config. Here is how you can do that:

```javascript
const extraNodeModules = {
  open: require.resolve('noop3'),
  fs: require.resolve('noop3'),
  path: require.resolve('noop3'),
  child_process: require.resolve('noop3'),
  os: require.resolve('noop3'),
  net: require.resolve('noop3'),
  zlib: require.resolve('noop3'),
};
```

The noop3 package is a "no operation" (noop) package that simply exports a function which does nothing. It's used here to replace the Node.js-specific modules with a function that does nothing, essentially neutralizing their effect in the React Native environment.

Remember to install the noop3 package before using this configuration:

```
yarn add noop3
```

Please note that `Server` interaction relies on these Node.js-specific modules & won't work in non-Node environments. If you try to use `Server` interaction in any of these environments, you'll get an error thrown.

## Important Notes

- The library is primarily designed for use in Node.js environments but the `Code`, `ClientCredentials` & `MasqueradeToken` interactions can be used in a browser environment as well. 
- The `Server` interaction type uses Express server under the hood. 
