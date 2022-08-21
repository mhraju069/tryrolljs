const fs = require('fs')
const path = require('path')

const pathToTsConfig = path.join(process.cwd(), 'tsconfig.json')
const doesTsConfigExist = fs.existsSync(pathToTsConfig)

module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config',
    'standard-with-typescript',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: doesTsConfigExist ? pathToTsConfig : undefined,
  },
  env: {
    'react-native/react-native': true,
  },
}
