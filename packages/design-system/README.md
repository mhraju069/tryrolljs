# @tryrolljs/design-system

## Install

```sh
yarn add @tryrolljs/design-system
npx install-peerdeps @tryrolljs/design-system
```


## Usage

Import CSS file if your app's target is web.

```js
import '@tryrolljs/design-system/dist/index.css'
```

Enjoy using the well-typed package available for ESM & CJS. 🥳

```js
import { Body, useTheme } from '@tryrolljs/design-system'

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Body style={{ color: theme.text.primary }}>
      @tryrolljs/design-system is awesome!
    </Body>
  )
}
```

## Development

Use Storybook to test your changes locally.

```sh
yarn start
```