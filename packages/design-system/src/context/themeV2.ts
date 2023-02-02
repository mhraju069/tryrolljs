import { createContext } from 'react'
import { lightTheme, Theme } from '../styles/themeV2'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContextV2 = createContext<ThemeContextValue>({
  theme: lightTheme,
  setTheme: () => null,
})
