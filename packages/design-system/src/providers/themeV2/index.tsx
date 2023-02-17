import { PropsWithChildren, useState } from 'react'
import { lightTheme, Theme } from '../../styles/themeV2'
import { ThemeContextV2 } from '../../context'

export const ThemeProviderV2 = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <ThemeContextV2.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContextV2.Provider>
  )
}
