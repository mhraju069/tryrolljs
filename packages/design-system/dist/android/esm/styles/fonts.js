import openSansRegular from '../assets/fonts/OpenSans-Regular.js';
import openSansBold from '../assets/fonts/OpenSans-Bold.js';
import openSansBoldItalic from '../assets/fonts/OpenSans-BoldItalic.js';
import openSansExtraBold from '../assets/fonts/OpenSans-ExtraBold.js';
import openSansExtraBoldItalic from '../assets/fonts/OpenSans-ExtraBoldItalic.js';
import openSansItalic from '../assets/fonts/OpenSans-Italic.js';
import openSansLight from '../assets/fonts/OpenSans-Light.js';
import openSansLightItalic from '../assets/fonts/OpenSans-LightItalic.js';
import openSansSemiBold from '../assets/fonts/OpenSans-SemiBold.js';
import openSansSemiBoldItalic from '../assets/fonts/OpenSans-SemiBoldItalic.js';
import sourceCodeProRegular from '../assets/fonts/SourceCodePro-Regular.js';
import manropeBold from '../assets/fonts/Manrope-Bold.js';
import manropeMedium from '../assets/fonts/Manrope-Medium.js';
import manropeRegular from '../assets/fonts/Manrope-Regular.js';
import manropeSemiBold from '../assets/fonts/Manrope-SemiBold.js';

var fontStylesStringV2 = "\n  input:focus,\n  select:focus,\n  textarea:focus,\n  button:focus {\n      outline: none;\n  }\n\n  @font-face {\n    src: url(".concat(manropeRegular, ");\n    font-family: Manrope-Regular;\n  }\n\n  @font-face {\n    src: url(").concat(manropeMedium, ");\n    font-family: Manrope-Medium;\n  }\n  @font-face {\n    src: url(").concat(manropeSemiBold, ");\n    font-family: Manrope-SemiBold;\n  }\n  @font-face {\n    src: url(").concat(manropeBold, ");\n    font-family: Manrope-Bold;\n  }\n");
var fontStylesString = "\n  input:focus,\n  select:focus,\n  textarea:focus,\n  button:focus {\n      outline: none;\n  }\n\n  @font-face {\n    src: url(".concat(openSansRegular, ");\n    font-family: OpenSans-Regular;\n  }\n\n  @font-face {\n    src: url(").concat(openSansBold, ");\n    font-family: OpenSans-Bold;\n  }\n\n  @font-face {\n    src: url(").concat(openSansBoldItalic, ");\n    font-family: OpenSans-BoldItalic;\n  }\n\n  @font-face {\n    src: url(").concat(openSansExtraBold, ");\n    font-family: OpenSans-ExtraBold;\n  }\n\n  @font-face {\n    src: url(").concat(openSansExtraBoldItalic, ");\n    font-family: OpenSans-ExtraBoldItalic;\n  }\n\n  @font-face {\n    src: url(").concat(openSansItalic, ");\n    font-family: OpenSans-Italic;\n  }\n\n  @font-face {\n    src: url(").concat(openSansLight, ");\n    font-family: OpenSans-Light;\n  }\n\n  @font-face {\n    src: url(").concat(openSansLightItalic, ");\n    font-family: OpenSans-LightItalic;\n  }\n\n  @font-face {\n    src: url(").concat(openSansSemiBold, ");\n    font-family: OpenSans-SemiBold;\n  }\n\n  @font-face {\n    src: url(").concat(openSansSemiBoldItalic, ");\n    font-family: OpenSans-SemiBoldItalic;\n  }\n\n  @font-face {\n    src: url(").concat(sourceCodeProRegular, ");\n    font-family: SourceCodePro-Regular;\n  }\n");
var getFontStyleElement = function (version) {
  if (typeof document === 'undefined') {
    return undefined;
  }
  var fontStyles = document.createElement('style');
  var styles = version === 2 ? fontStylesStringV2 : fontStylesString;
  fontStyles.type = 'text/css';
  // @ts-ignore
  if (fontStyles.styleSheet) {
    // @ts-ignore
    fontStyles.styleSheet.cssText = styles;
  } else {
    fontStyles.appendChild(document.createTextNode(styles));
  }
  return fontStyles;
};
var injectFonts = function () {
  var fontStyleElement = getFontStyleElement(1);
  if (typeof document !== 'undefined' && fontStyleElement) {
    document.head.appendChild(fontStyleElement);
  }
};
var injectFontsV2 = function () {
  var fontStyleElement = getFontStyleElement(2);
  if (typeof document !== 'undefined' && fontStyleElement) {
    document.head.appendChild(fontStyleElement);
  }
};

export { injectFonts, injectFontsV2 };
