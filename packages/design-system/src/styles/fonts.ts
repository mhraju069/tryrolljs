import openSansRegular from '../assets/fonts/OpenSans-Regular.ttf'
import openSansBold from '../assets/fonts/OpenSans-Bold.ttf'
import openSansBoldItalic from '../assets/fonts/OpenSans-BoldItalic.ttf'
import openSansExtraBold from '../assets/fonts/OpenSans-ExtraBold.ttf'
import openSansExtraBoldItalic from '../assets/fonts/OpenSans-ExtraBoldItalic.ttf'
import openSansItalic from '../assets/fonts/OpenSans-Italic.ttf'
import openSansLight from '../assets/fonts/OpenSans-Light.ttf'
import openSansLightItalic from '../assets/fonts/OpenSans-LightItalic.ttf'
import openSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf'
import openSansSemiBoldItalic from '../assets/fonts/OpenSans-SemiBoldItalic.ttf'
import sourceCodeProRegular from '../assets/fonts/SourceCodePro-Regular.ttf'

// V2 Fonts
import manropeBold from '../assets/fonts/Manrope-Bold.ttf'
import manropeMedium from '../assets/fonts/Manrope-Medium.ttf'
import manropeRegular from '../assets/fonts/Manrope-Regular.ttf'
import manropeSemiBold from '../assets/fonts/Manrope-SemiBold.ttf'
import robotoMonoMedium from '../assets/fonts/RobotoMono-Medium.ttf'

const fontStylesStringV2 = `
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }

  @font-face {
    src: url(${manropeRegular});
    font-family: Manrope-Regular;
  }

  @font-face {
    src: url(${manropeMedium});
    font-family: Manrope-Medium;
  }
  @font-face {
    src: url(${manropeSemiBold});
    font-family: Manrope-SemiBold;
  }
  @font-face {
    src: url(${manropeBold});
    font-family: Manrope-Bold;
  }
  @font-face {
    src: url(${robotoMonoMedium});
    font-family: RobotoMono-Medium;
  }
`

const fontStylesString = `
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }

  @font-face {
    src: url(${openSansRegular});
    font-family: OpenSans-Regular;
  }

  @font-face {
    src: url(${openSansBold});
    font-family: OpenSans-Bold;
  }

  @font-face {
    src: url(${openSansBoldItalic});
    font-family: OpenSans-BoldItalic;
  }

  @font-face {
    src: url(${openSansExtraBold});
    font-family: OpenSans-ExtraBold;
  }

  @font-face {
    src: url(${openSansExtraBoldItalic});
    font-family: OpenSans-ExtraBoldItalic;
  }

  @font-face {
    src: url(${openSansItalic});
    font-family: OpenSans-Italic;
  }

  @font-face {
    src: url(${openSansLight});
    font-family: OpenSans-Light;
  }

  @font-face {
    src: url(${openSansLightItalic});
    font-family: OpenSans-LightItalic;
  }

  @font-face {
    src: url(${openSansSemiBold});
    font-family: OpenSans-SemiBold;
  }

  @font-face {
    src: url(${openSansSemiBoldItalic});
    font-family: OpenSans-SemiBoldItalic;
  }

  @font-face {
    src: url(${sourceCodeProRegular});
    font-family: SourceCodePro-Regular;
  }
`

const getFontStyleElement = (version: 1 | 2) => {
  if (typeof document === 'undefined') {
    return undefined
  }

  const fontStyles = document.createElement('style')
  const styles = version === 2 ? fontStylesStringV2 : fontStylesString
  fontStyles.type = 'text/css'
  // @ts-ignore
  if (fontStyles.styleSheet) {
    // @ts-ignore
    fontStyles.styleSheet.cssText = styles
  } else {
    fontStyles.appendChild(document.createTextNode(styles))
  }

  return fontStyles
}

export const injectFonts = () => {
  const fontStyleElement = getFontStyleElement(1)
  if (typeof document !== 'undefined' && fontStyleElement) {
    document.head.appendChild(fontStyleElement)
  }
}
export const injectFontsV2 = () => {
  const fontStyleElement = getFontStyleElement(2)
  if (typeof document !== 'undefined' && fontStyleElement) {
    document.head.appendChild(fontStyleElement)
  }
}
