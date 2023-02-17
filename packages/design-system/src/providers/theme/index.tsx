import { PropsWithChildren, useState } from 'react'
import { lightTheme, Theme } from '../../styles'
import { ThemeContext } from '../../context'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
