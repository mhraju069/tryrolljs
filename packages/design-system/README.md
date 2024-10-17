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

### Fonts

The font-families used in this design system are available at `@roll-network/design-system/dist/fonts`. Add a CSS file with the following content to import fonts to your web app:

```
/* V2 */
@font-face {
  font-family: 'Manrope-Regular';
  src: local('Manrope-Regular'),
    url('@roll-network/design-system/dist/fonts/Manrope-Regular.ttf');
}

@font-face {
  font-family: 'Manrope-Medium';
  src: local('Manrope-Medium'),
    url('@roll-network/design-system/dist/fonts/Manrope-Medium.ttf');
}

@font-face {
  font-family: 'Manrope-SemiBold';
  src: local('Manrope-SemiBold'),
    url('@roll-network/design-system/dist/fonts/Manrope-SemiBold.ttf');
}

@font-face {
  font-family: 'Manrope-Bold';
  src: local('Manrope-Bold'),
    url('@roll-network/design-system/dist/fonts/Manrope-Bold.ttf');
}

@font-face {
  font-family: 'RobotoMono-Medium';
  src: local('RobotoMono-Medium'),
    url('@roll-network/design-system/dist/fonts/RobotoMono-Medium.ttf');
}

/* V1 */
@font-face {
  src: local('OpenSans-Regular'),
    url('@roll-network/design-system/dist/fonts/OpenSans-Regular.ttf');
  font-family: 'OpenSans-Regular';
}

@font-face {
  src: local('OpenSans-Bold'),
    url('@roll-network/design-system/dist/fonts/OpenSans-Bold.ttf');
  font-family: 'OpenSans-Bold';
}

@font-face {
  src: local('OpenSans-BoldItalic'),
    url('@roll-network/design-system/dist/fonts/OpenSans-BoldItalic.ttf');
  font-family: 'OpenSans-BoldItalic';
}

@font-face {
  src: local('OpenSans-ExtraBold'),
    url('@roll-network/design-system/dist/fonts/OpenSans-ExtraBold.ttf');
  font-family: 'OpenSans-ExtraBold';
}

@font-face {
  src: local('OpenSans-ExtraBoldItalic'),
    url('@roll-network/design-system/dist/fonts/OpenSans-ExtraBoldItalic.ttf');
  font-family: 'OpenSans-ExtraBoldItalic';
}

@font-face {
  src: local('OpenSans-Italic'),
    url('@roll-network/design-system/dist/fonts/OpenSans-Italic.ttf');
  font-family: 'OpenSans-Italic';
}

@font-face {
  src: local('OpenSans-Light'),
    url('@roll-network/design-system/dist/fonts/OpenSans-Light.ttf');
  font-family: 'OpenSans-Light';
}

@font-face {
  src: local('OpenSans-LightItalic'),
    url('@roll-network/design-system/dist/fonts/OpenSans-LightItalic.ttf');
  font-family: 'OpenSans-LightItalic';
}

@font-face {
  src: local('OpenSans-SemiBold'),
    url('@roll-network/design-system/dist/fonts/OpenSans-SemiBold.ttf');
  font-family: 'OpenSans-SemiBold';
}

@font-face {
  src: local('OpenSans-SemiBoldItalic'),
    url('@roll-network/design-system/dist/fonts/OpenSans-SemiBoldItalic.ttf');
  font-family: 'OpenSans-SemiBoldItalic';
}

@font-face {
  src: local('SourceCodePro-Regular'),
    url('@roll-network/design-system/dist/fonts/SourceCodePro-Regular.ttf');
  font-family: 'SourceCodePro-Regular';
}
```

Or use `react-native-assets` with the following config to import fonts into your native app:

```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./node_modules/@roll-network/design-system/dist/fonts'],
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

### Troubleshooting

#### Modal

If you face an issue (specifically on Web) when rendering a Modal, ensure that your application doesn't run in StrictMode. Otherwise, `native-base` (the lib backing our design system up) will break. (https://github.com/adobe/react-spectrum/issues/3515#issuecomment-1246872872)