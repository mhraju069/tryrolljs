import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from '@storybook/react-native'

import '@storybook/addon-ondevice-notes/register'
import '@storybook/addon-ondevice-controls/register'
import '@storybook/addon-ondevice-backgrounds/register'
import '@storybook/addon-ondevice-actions/register'

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs'

import { decorators, parameters } from './preview'

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator))
}

if (parameters) {
  addParameters(parameters)
}

argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer))

const getStories = () => {
  return [
    require('../src/atoms/tooltip/tooltip.stories.tsx'),
    require('../src/molecules/dropdown/dropdown.stories.tsx'),
    require('../src/molecules/select/select.stories.tsx'),
  ]
}

configure(getStories, module, false)
