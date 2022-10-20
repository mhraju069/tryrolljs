import * as React from 'react'
import { ThemeProvider } from '../../providers'

const withThemeProvider = (component: React.ReactElement) => {
  return <ThemeProvider>{component}</ThemeProvider>
}

export default withThemeProvider
