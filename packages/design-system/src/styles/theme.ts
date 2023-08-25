import {
  charcoalBlack,
  ghostWhite,
  lavendar,
  lightGray,
  white,
  grey,
  crimson,
  dodgerBlue,
  orange,
  mistyRose,
  aliceBlue,
  darkNavy,
} from './colors'

interface PaletteBase {
  primary: string
  secondary: string
  highlight: string
  error: string
  warning: string
}

interface PaletteBackground extends PaletteBase {
  lowLight: string
  tertiary: string
  page: string
}

export type Theme = {
  background: PaletteBackground
  text: PaletteBase
}

export const lightTheme: Theme = {
  background: {
    primary: white,
    secondary: aliceBlue,
    tertiary: lightGray,
    highlight: lavendar,
    lowLight: darkNavy,
    error: mistyRose,
    warning: orange,
    page: ghostWhite,
  },
  text: {
    primary: charcoalBlack,
    secondary: grey,
    highlight: dodgerBlue,
    error: crimson,
    warning: orange,
  },
}
