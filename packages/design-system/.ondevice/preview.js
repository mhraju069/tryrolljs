import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { TextEncoder, TextDecoder } from 'util'
import { TryrollProvider } from '../src/providers'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

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
