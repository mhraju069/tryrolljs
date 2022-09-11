# @tryrolljs/prettier-config

This folder contains Prettier config file used in Roll.

## Install

```sh
yarn add -D @tryrolljs/prettier-config
```

## Usage

Create a `.prettierrc.js` file in the root of your project. Add the following content:

```js
module.exports = {
  ...require('@tryrolljs/prettier-config'),
}
```

[Install CLI](../cli/README.md) and run `yarn roll format`.