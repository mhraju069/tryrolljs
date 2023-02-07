# @tryrolljs/api

## Install

```sh
yarn add @tryrolljs/api
```

## Setup

The library uses [better-queue](https://www.npmjs.com/package/better-queue) that is a browser compatible Node package. It requires [util](https://www.npmjs.com/package/util) to be installed when used within browser environment.

### CRA

If you use create-react-app, you have to

1. Install [craco](https://www.npmjs.com/package/@craco/craco).
2. Update `package.json` to use `craco` instead of `react-scripts` in the `scripts` section.
3. Create a new `craco.config.js` file with the following content:
```js
module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          util: require.resolve("util"),
        },
      },
    },
  },
};
``` 