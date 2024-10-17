import { TryrollProvider } from '../src/providers'

import './index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}

export const decorators = [
  (Story) => (
    <TryrollProvider>
      <Story />
    </TryrollProvider>
  ),
]
