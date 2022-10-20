import { useContext } from 'react'
import { ThemeContext, ModalContext } from '../context'
import { Theme } from '../styles'

export const useTheme = (): Theme => {
  const { theme } = useContext(ThemeContext)
  return theme
}

export const useModal = () => useContext(ModalContext)
