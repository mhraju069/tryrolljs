import { NativeBaseProvider } from 'native-base'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from '../theme'

export const TryrollProvider = ({ children }: PropsWithChildren<{}>) => (
  <NativeBaseProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </NativeBaseProvider>
)
