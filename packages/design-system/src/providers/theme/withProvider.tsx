import * as React from 'react'
import { ThemeProvider } from '.'

export const withThemeProvider = (component: React.ReactElement) => {
  return <ThemeProvider>{component}</ThemeProvider>
}
