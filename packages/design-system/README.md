# @tryrolljs/design-system

## Install

```sh
yarn add @tryrolljs/design-system
npx install-peerdeps @tryrolljs/design-system
```


## Usage

Import CSS file if your app's target is web.

```js
import '@tryrolljs/design-system/dist/web/index.css'
```

Wrap the root of your application with the theme provider.

```js
import { ThemeProvider } from '@tryrolljs/design-system'

const App = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
```

Enjoy using the well-typed package available for ESM & CJS. 🥳

```js
import { Text, useTheme } from '@tryrolljs/design-system'

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Text style={{ color: theme.text.primary }}>
      @tryrolljs/design-system is awesome!
    </Text>
  )
}
```

## Development

Use Storybook to test your changes locally.

```sh
yarn start
```