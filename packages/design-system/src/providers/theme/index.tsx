import { createContext, useState } from 'react'
import { lightTheme, Theme } from '../../styles/theme'

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
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  )
}
