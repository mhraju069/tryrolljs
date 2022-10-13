import { createContext, useState } from 'react'
import { NativeBaseProvider } from 'native-base'
import { lightTheme, Theme } from '../../styles'

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
        {children}
      </ThemeCtx.Provider>
    </NativeBaseProvider>
  )
}
