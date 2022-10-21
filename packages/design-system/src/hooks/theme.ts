import { useContext } from 'react'
import { ThemeContext } from '../context'
import { Theme } from '../styles'

export const useTheme = (): Theme => {
  const { theme } = useContext(ThemeContext)
  return theme
}
