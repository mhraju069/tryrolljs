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
    require('../src/atoms/buttonV2/buttonV2.stories.tsx'),
    require('../src/atoms/icon/icon.stories.tsx'),
    require('../src/atoms/qrcode/qrcode.stories.tsx'),
    require('../src/atoms/radioSelect/radioSelect.stories.tsx'),
    require('../src/atoms/statusV2/statusV2.stories.tsx'),
    require('../src/atoms/switch/switch.stories.tsx'),
    require('../src/atoms/toastV2/toastv2.stories.tsx'),
    require('../src/atoms/tooltip/tooltip.stories.tsx'),
    require('../src/atoms/tooltipV2/tooltipV2.stories.tsx'),
    require('../src/atoms/typographyV2/typographyV2.stories.tsx'),
    require('../src/molecules/alertV2/alertV2.stories.tsx'),
    require('../src/molecules/analyticsCard/analyticsCard.stories.tsx'),
    require('../src/molecules/banner/banner.stories.tsx'),
    require('../src/molecules/dropdown/dropdown.stories.tsx'),
    require('../src/molecules/estimatedGas/estimatedGas.stories.tsx'),
    require('../src/molecules/featureCard/featureCard.stories.tsx'),
    require('../src/molecules/footerV2/footerV2.stories.tsx'),
    require('../src/molecules/header/header.stories.tsx'),
    require('../src/molecules/information/information.stories.tsx'),
    require('../src/molecules/inputContainer/inputContainer.stories.tsx'),
    require('../src/molecules/inputLayout/inputLayout.stories.tsx'),
    require('../src/molecules/inputV2/inputV2.stories.tsx'),
    require('../src/molecules/select/select.stories.tsx'),
    require('../src/molecules/selectV2/selectV2.stories.tsx'),
    require('../src/molecules/tokenCard/tokenCard.stories.tsx'),
    require('../src/molecules/walletCard/walletCard.stories.tsx'),
    require('../src/molecules/walletInfo/walletInfo.stories.tsx'),
    require('../src/organisms/avatarPicker/avatarPicker.stories.tsx'),
    require('../src/organisms/formStepHeader/formStepHeader.stories.tsx'),
    require('../src/organisms/layout/layout.stories.tsx'),
    require('../src/organisms/modal/modal.stories.tsx'),
    require('../src/organisms/modalV2/modalV2.stories.tsx'),
    require('../src/organisms/table/table.stories.tsx'),
    require('../src/organisms/tokenSelect/tokenSelect.stories.tsx'),
    require('../src/molecules/accountInfoDropdown/acountInfoDropdown.stories.tsx'),
  ]
}

configure(getStories, module, false)
