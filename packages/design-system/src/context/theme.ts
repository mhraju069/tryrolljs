import { createContext } from 'react'
import { lightTheme, Theme } from '../styles'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  setTheme: () => null,
})
