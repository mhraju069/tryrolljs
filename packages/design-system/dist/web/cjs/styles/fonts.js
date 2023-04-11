'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var OpenSansRegular = require('../assets/fonts/OpenSans-Regular.js');
var OpenSansBold = require('../assets/fonts/OpenSans-Bold.js');
var OpenSansBoldItalic = require('../assets/fonts/OpenSans-BoldItalic.js');
var OpenSansExtraBold = require('../assets/fonts/OpenSans-ExtraBold.js');
var OpenSansExtraBoldItalic = require('../assets/fonts/OpenSans-ExtraBoldItalic.js');
var OpenSansItalic = require('../assets/fonts/OpenSans-Italic.js');
var OpenSansLight = require('../assets/fonts/OpenSans-Light.js');
var OpenSansLightItalic = require('../assets/fonts/OpenSans-LightItalic.js');
var OpenSansSemiBold = require('../assets/fonts/OpenSans-SemiBold.js');
var OpenSansSemiBoldItalic = require('../assets/fonts/OpenSans-SemiBoldItalic.js');
var SourceCodeProRegular = require('../assets/fonts/SourceCodePro-Regular.js');
var ManropeBold = require('../assets/fonts/Manrope-Bold.js');
var ManropeMedium = require('../assets/fonts/Manrope-Medium.js');
var ManropeRegular = require('../assets/fonts/Manrope-Regular.js');
var ManropeSemiBold = require('../assets/fonts/Manrope-SemiBold.js');

var fontStylesStringV2 = "\n  input:focus,\n  select:focus,\n  textarea:focus,\n  button:focus {\n      outline: none;\n  }\n\n  @font-face {\n    src: url(".concat(ManropeRegular, ");\n    font-family: Manrope-Regular;\n  }\n\n  @font-face {\n    src: url(").concat(ManropeMedium, ");\n    font-family: Manrope-Medium;\n  }\n  @font-face {\n    src: url(").concat(ManropeSemiBold, ");\n    font-family: Manrope-SemiBold;\n  }\n  @font-face {\n    src: url(").concat(ManropeBold, ");\n    font-family: Manrope-Bold;\n  }\n");
var fontStylesString = "\n  input:focus,\n  select:focus,\n  textarea:focus,\n  button:focus {\n      outline: none;\n  }\n\n  @font-face {\n    src: url(".concat(OpenSansRegular, ");\n    font-family: OpenSans-Regular;\n  }\n\n  @font-face {\n    src: url(").concat(OpenSansBold, ");\n    font-family: OpenSans-Bold;\n  }\n\n  @font-face {\n    src: url(").concat(OpenSansBoldItalic, ");\n    font-family: OpenSans-BoldItalic;\n  }\n\n  @font-face {\n    src: url(").concat(OpenSansExtraBold, ");\n    font-family: OpenSans-ExtraBold;\n  }\n\n  @font-face {\n    src: url(").concat(OpenSansExtraBoldItalic, ");\n    font-family: OpenSans-ExtraBoldItalic;\n  }\n\n  @font-face {\n    src: url(").concat(OpenSansItalic, ");\n    font-family: OpenSans-Italic;\n  }\n\n  @font-face {\n    src: url(").concat(OpenSansLight, ");\n    font-family: OpenSans-Light;\n  }\n\n  @font-face {\n    src: url(").concat(OpenSansLightItalic, ");\n    font-family: OpenSans-LightItalic;\n  }\n\n  @font-face {\n    src: url(").concat(OpenSansSemiBold, ");\n    font-family: OpenSans-SemiBold;\n  }\n\n  @font-face {\n    src: url(").concat(OpenSansSemiBoldItalic, ");\n    font-family: OpenSans-SemiBoldItalic;\n  }\n\n  @font-face {\n    src: url(").concat(SourceCodeProRegular, ");\n    font-family: SourceCodePro-Regular;\n  }\n");
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

exports.injectFonts = injectFonts;
exports.injectFontsV2 = injectFontsV2;
