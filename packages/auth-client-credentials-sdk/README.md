# @tryrolljs/auth-client-credentials-sdk

## About

This package is intended to help applications that depend on the Roll API to manage their credentials, whether they are invoking endpoints as an API client or on behalf of a user via Oauth credentials.

## Install

```sh
yarn add @tryrolljs/auth-client-credentials-sdk @tryrolljs/api-client
```

```sh
npm i @tryrolljs/auth-client-credentials-sdk @tryrolljs/api-client`
```

## Quick Start

```

   import { token } from '@tryrolljs/api'
   import Client from '@tryrolljs/api-client'
   import SDK from '@tryrolljs/auth-client-credentials-sdk'



   // The Roll SDK uses the storage interface to manage oauth tokens on your behalf,
   // refreshing as needed per request. Pass in an object or class that fulfills these function signatures,
   // backed by a database, an in-memory datastore, or browser storage such as localstorage or sessionstorage

   // export interface Storage {
   //  setItem(key: string, value: string): void | Promise<void>
   //  getItem(key: string): string | undefined | Promise<string | undefined>
   //  removeItem(key: string): void | Promise<void>
   // }

    const storage = new YourStorageImplementation() (an implementation of a storage mechanism that suits your needs)

    // initialize an instance of the Roll API SDK, backed by client credentials
    const sdk = new SDK(
      {
        issuerUrl: "https://oauth.tryroll.com/oauth2",
        clientId: process.env.YOUR_CLIENT_ID,
        clientSecret: process.env.YOUR_CLIENT_SECRET,
      },
      storage
    )

    // generate an auth token for your api client
    await sdk.generateToken()

    // initialize an apiClient with your authentication manager
    const apiClient = new Client.default(
      { baseUrl: "https://api.tryroll.com" },
      sdk,
    )

    // invoke an api function while passing in the api client
    const tokenList = await token.getTokens(apiClient, { limit: 10, offset: 0})
```

## Examples

- [Node](/examples/example-node-client/)
