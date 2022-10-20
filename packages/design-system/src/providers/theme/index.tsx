import { useState } from 'react'
import { NativeBaseProvider } from 'native-base'
import { lightTheme, Theme } from '../../styles'
import { ThemeContext } from '../../context'

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <NativeBaseProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </NativeBaseProvider>
  )
}
