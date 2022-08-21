# @tryrolljs/cli-tools

This repository contains the code for the share CLI tools used in Roll.

## Installation

The package is not published to NPM yet, so you have to install it directly from Github:

```sh
yarn add https://github.com/TuringAdvisoryGroup/cli-tools -D
```

## Usage

### Linting

Create a config file that'll override the file from the package:

```sh
touch .eslintrc.js
echo "const path = require('path'); module.exports = { extends: path.resolve('node_modules/@tryrolljs/cli-tools/.eslintrc.js') }" > .eslintrc.js
```

Run the command:

```sh
yarn roll lint
```

You can pass `--changed` option to affect only changed files in a git repo.

### Formatting

Create a config file that'll override the file from the package:

```sh
touch prettier.config.js
echo "module.exports = { ...require('@tryrolljs/cli-tools/prettier.config.js') }" > prettier.config.js
```

Run the command:

```sh
yarn roll format
```

You can pass `--changed` option to affect only changed files in a git repo.