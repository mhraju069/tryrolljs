# @tryrolljs/feature-flag

## Install

```sh
yarn add @tryrolljs/feature-flags
npx install-peerdeps @tryrolljs/feature-flags
```

## Usage

Wrap the root of your application with the provider.

```js
import { FeatureFlagProvider } from '@tryrolljs/feature-flag'

const flags = [
  {
    type: 'static',
    name: 'useNavigationV2',
    value: true,
  },
]

const App = ({ children }) => {
  return (
    <FeatureFlagProvider flags={flags}>
      {children}
    </FeatureFlagProvider>
  )
}
```

Use hook to retreive a feature flag value.

```js
import { useFeatureFlag } from '@tryrolljs/feature-flag'

import Navigation from './navigation'
import NavigationV2 from './navigationV2'

const Layout = () => {
  const shouldUseNavigationV2 = useFeatureFlag('useNavigationV2')

  return shouldUseNavigationV2 ? <NavigationV2 /> : <Navigation />
}
```

## Advanced Usage

This package allows you to inject any feature flag provider. It means that you can combine static, async & computed feature flags. Moreover, you can add an async group from an external provider (ex. LaunchDarkly).

```js
import * as LDClient from 'launchdarkly-js-client-sdk'
import { FeatureFlagProvider } from '@tryrolljs/feature-flag'

const isExternalServiceUp = async () => {
  try {
    const response = await fetch('https://external.service/api/healthcheck')
    return response.status === 200
  } catch (e) {
    return false
  }
}

const user = {
  key: 'aa0ceb'
};
const client = LDClient.initialize('LAUNCH_DARKLY_CLIENT_ID', user)
const getLDFeatureFlags = async () => {
  await client.waitUntilReady()
  return client.allFlags();
}

const flags = [
  {
    type: 'static',
    name: 'useNavigationV2',
    value: true,
  },
  {
    type: 'async',
    name: 'useExternalService',
    value: isExternalServiceUp,
    defaultValue: false,
  },
  {
    type: 'asyncGroup',
    value: getLDFeatureFlags,
    defaultValue: {
      ldFeatureFlag1: true,
      ldFeatureFlag2: 123,
      ldFeatureFlag3: 'here',
    },
  },
  {
    type: 'computed',
    name: 'useExternalServiceLinkInNavigation',
    value: flags => flags.useNavigationV2 && flags.useExternalService,
  }
]

const App = ({ children }) => {
  return (
    <FeatureFlagProvider flags={flags}>
      {children}
    </FeatureFlagProvider>
  )
}
```

