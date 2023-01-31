import { useContext } from 'react'
import { ThemeContextV2 } from '../context'
import { Theme } from '../styles/themeV2'

export const useThemeV2 = (): Theme => {
  const { theme } = useContext(ThemeContextV2)
  return theme
}
