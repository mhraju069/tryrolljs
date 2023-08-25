import { GluestackUIProvider, config } from '@gluestack-ui/react'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from '../theme'
import { ThemeProviderV2 } from '../themeV2'

export const TryrollProvider = ({ children }: PropsWithChildren<{}>) => (
  <GluestackUIProvider config={config.theme}>
    <ThemeProvider>
      <ThemeProviderV2>{children}</ThemeProviderV2>
    </ThemeProvider>
  </GluestackUIProvider>
)

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
}

export const TryrollTestProvider = ({ children }: PropsWithChildren<{}>) => (
  <GluestackUIProvider config={config.theme} initialWindowMetrics={inset}>
    <ThemeProvider>
      <ThemeProviderV2>{children}</ThemeProviderV2>
    </ThemeProvider>
  </GluestackUIProvider>
)
