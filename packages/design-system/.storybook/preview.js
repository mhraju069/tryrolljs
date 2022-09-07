import { ThemeProvider } from '../src/providers'

import '../src/assets/css/tailwind.css'
import { injectFonts } from '../src/styles'

injectFonts()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]
