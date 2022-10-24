import { NativeBaseProvider } from 'native-base'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from '../theme'

export const TryrollProvider = ({ children }: PropsWithChildren<{}>) => (
  <NativeBaseProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </NativeBaseProvider>
)

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
}

export const TryrollTestProvider = ({ children }: PropsWithChildren<{}>) => (
  <NativeBaseProvider initialWindowMetrics={inset}>
    <ThemeProvider>{children}</ThemeProvider>
  </NativeBaseProvider>
)
