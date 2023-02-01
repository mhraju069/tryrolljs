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
    require('../src/molecules/information/information.stories.tsx'),
    require('../src/molecules/footerV2/footerV2.stories.tsx'),
    require('../src/molecules/banner/banner.stories.tsx'),
    require('../src/organisms/modal/modal.stories.tsx'),
    require('../src/organisms/tokenSelect/tokenSelect.stories.tsx'),
  ]
}

configure(getStories, module, false)
