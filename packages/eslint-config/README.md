# @roll-network/eslint-config

This folder contains ESLint config file used in Roll.

## Install

```sh
yarn add -D @roll-network/eslint-config
npx install-peerdeps -D @roll-network/eslint-config
```

## Usage

Create a `.eslintrc.js` file in the root of your project. Add the following content:

```js
module.exports = {
  extends: '@roll-network/eslint-config',
}
```

[Install CLI](../cli/README.md) and run `yarn roll lint`.