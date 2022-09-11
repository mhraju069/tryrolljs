# @tryrolljs/eslint-config

This folder contains ESLint config file used in Roll.

## Install

```sh
yarn add -D @tryrolljs/eslint-config
npx install-peerdeps -D @tryrolljs/eslint-config
```

## Usage

Create a `.eslintrc.js` file in the root of your project. Add the following content:

```js
module.exports = {
  extends: '@tryrolljs/eslint-config',
}
```

[Install CLI](../cli/README.md) and run `yarn roll lint`.