import { useState } from 'react'
import { lightTheme, Theme } from '../../styles'
import { ThemeContext } from '../../context'

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
