import { createContext, useState } from 'react'
import { NativeBaseProvider } from 'native-base'
import { lightTheme, Theme } from '../../styles/theme'
import ToastProvider from '../toast'

type ThemeContext = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeCtx = createContext<ThemeContext>({
  theme: lightTheme,
  setTheme: () => null,
})

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <NativeBaseProvider>
      <ThemeCtx.Provider value={{ theme, setTheme }}>
        <>
          {children}
          <ToastProvider />
        </>
      </ThemeCtx.Provider>
    </NativeBaseProvider>
  )
}
