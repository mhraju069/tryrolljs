import { TryrollProvider } from '../src/providers'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'

export const parameters = {
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: 'hotpink' },
    { name: 'cool', value: 'deepskyblue' },
  ],
}

export const decorators = [
  withBackgrounds,
  (Story) => (
    <TryrollProvider>
      <Story />
    </TryrollProvider>
  ),
]
