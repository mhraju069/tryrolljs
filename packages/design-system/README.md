# @roll-network/design-system

## Install

```sh
yarn add @roll-network/design-system
npx install-peerdeps @roll-network/design-system
```

## Setup

### Web

The web version of the package works out of the box.

### Native

The package is ready for `react-native` with a minimum amount of changes. You have to add an alias to your react-native application & it'll work smoothly.

```js
// babel.config.js

module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@roll-network/design-system": "@roll-network/design-system/dist/native/esm"
        }
      }
    ]
  ]
}
```

## Usage

Wrap the root of your application with the theme provider.

```js
import { TryrollProvider } from '@roll-network/design-system'

const App = ({ children }) => {
  return (
    <TryrollProvider>
      {children}
    </TryrollProvider>
  )
}
```

Enjoy using the well-typed package available for ESM & CJS. 🥳

```js
import { Text, useTheme } from '@roll-network/design-system'

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Text style={{ color: theme.text.primary }}>
      @roll-network/design-system is awesome!
    </Text>
  )
}
```

## Development

### Web

Use Storybook to test your changes locally.

```sh
yarn start
```

### Native

You can use React Native Storybook to test changes locally. You'll need to add your story to

1. Add your story to [storybook.requires.js](./.ondevice/storybook.requires.js).
2. Run `yarn start:native`
3. Run `yarn ios` for iOS development.
4. Run `yarn android` for Android development.