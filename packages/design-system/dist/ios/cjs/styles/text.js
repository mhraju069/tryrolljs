'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNative = require('react-native');
var utils = require('./utils.js');

var openSans = {
  reg: 'OpenSans-Regular',
  bold: 'OpenSans-Bold',
  boldItalic: 'OpenSans-BoldItalic',
  extraBold: 'OpenSans-ExtraBold',
  extraBoldItalic: 'OpenSans-ExtraBoldItalic',
  italic: 'OpenSans-Italic',
  light: 'OpenSans-Light',
  lightItalic: 'OpenSans-LightItalic',
  semiBold: 'OpenSans-SemiBold',
  semiBoldItalic: 'OpenSans-SemiBoldItalic'
};
var manrope = {
  regular: 'Manrope-Regular',
  semiBold: 'Manrope-SemiBold',
  bold: 'Manrope-Bold'
};
var FONT_SIZE_SUB_CAPTION = 8;
var FONT_SIZE_CAPTION = 12;
var FONT_SIZE_BODY = 14;
var FONT_SIZE_SUB_HEADER = 16;
var FONT_SIZE_HEADER = 20;
var FONT_SIZE_LARGE_HEADER = 24;
var FONT_SIZE_TITLE = 28;
var FONT_SIZE_LARGE_TITLE = 48;
// V2 Font Sizes
var FONT_SIZE_CAPTION_2 = 12;
var FONT_SIZE_CAPTION_1 = 14;
var FONT_SIZE_TEXT_4 = 12;
var FONT_SIZE_TEXT_3 = 14;
var FONT_SIZE_TEXT_2 = 16;
var FONT_SIZE_TEXT_1 = 20;
var FONT_SIZE_BUTTON_TEXT = 16;
var FONT_SIZE_BUTTON_MEDIUM = 14;
var FONT_SIZE_BUTTON_LARGE = 20;
var FONT_SIZE_SUB_3 = 20;
var FONT_SIZE_SUB_2 = 24;
var FONT_SIZE_SUB_1 = 40;
var FONT_SIZE_H3 = 48;
var FONT_SIZE_H2 = 64;
var FONT_SIZE_H1 = 72;
// Resopnsive font sizes
var FONT_SIZE_TEXT_1_RESPONSIVE = 18;
var FONT_SIZE_SUB_3_RESPONSIVE = 18;
var FONT_SIZE_SUB_2_RESPONSIVE = 20;
var FONT_SIZE_SUB_1_RESPONSIVE = 32;
var FONT_SIZE_H3_RESPONSIVE = 32;
var FONT_SIZE_H2_RESPONSIVE = 40;
var FONT_SIZE_H1_RESPONSIVE = 48;
var getLetterSpacing = function (fontSize, percentage) {
  return fontSize * (percentage / 100) * -1;
};
var text = utils.makeStyles({
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  body: {
    fontFamily: openSans.reg
  },
  bold: {
    fontFamily: openSans.bold
  },
  semiBold: {
    fontFamily: openSans.semiBold
  },
  h1: {
    fontSize: 36
  },
  h2: {
    fontSize: 32
  },
  h3: {
    fontSize: FONT_SIZE_TITLE
  },
  h4: {
    fontSize: FONT_SIZE_LARGE_HEADER
  },
  h5: {
    fontSize: FONT_SIZE_HEADER
  },
  h6: {
    fontSize: FONT_SIZE_SUB_HEADER
  },
  caption: {
    fontSize: FONT_SIZE_CAPTION
  },
  subCaption: {
    fontSize: FONT_SIZE_SUB_CAPTION
  },
  heading: {
    fontSize: 18
  }
});
var fontStyles = reactNative.StyleSheet.create({
  caption2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_CAPTION_2,
    lineHeight: 16,
    letterSpacing: 0
  },
  caption1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_CAPTION_1,
    lineHeight: 24,
    letterSpacing: 0
  },
  text4: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_4,
    lineHeight: 16,
    letterSpacing: 0
  },
  text3: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_3,
    lineHeight: 24,
    letterSpacing: 0
  },
  text2: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_2,
    lineHeight: 24,
    letterSpacing: 0
  },
  text1: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_1,
    lineHeight: 32,
    letterSpacing: getLetterSpacing(FONT_SIZE_TEXT_1, 2)
  },
  buttonText: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_TEXT,
    lineHeight: 24,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_TEXT, 2)
  },
  buttonMedium: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_MEDIUM,
    lineHeight: 24,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_MEDIUM, 2)
  },
  buttonLarge: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_LARGE,
    lineHeight: 32,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_LARGE, 2)
  },
  sub3: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_3,
    lineHeight: 32,
    letterSpacing: getLetterSpacing(FONT_SIZE_SUB_3, 2)
  },
  sub2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_2,
    lineHeight: 32,
    letterSpacing: 0
  },
  sub1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_1,
    lineHeight: 56,
    letterSpacing: getLetterSpacing(FONT_SIZE_SUB_1, 2)
  },
  h3: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H3,
    lineHeight: 64,
    letterSpacing: getLetterSpacing(FONT_SIZE_H3, 1)
  },
  h2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H2,
    lineHeight: 76,
    letterSpacing: getLetterSpacing(FONT_SIZE_H2, 4)
  },
  h1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H1,
    lineHeight: 80,
    letterSpacing: getLetterSpacing(FONT_SIZE_H1, 6)
  }
});
var responsiveFontStyles = reactNative.StyleSheet.create({
  caption2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_CAPTION_2,
    lineHeight: 16,
    letterSpacing: 0
  },
  caption1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_CAPTION_1,
    lineHeight: 24,
    letterSpacing: 0
  },
  text4: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_4,
    lineHeight: 16,
    letterSpacing: 0
  },
  text3: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_3,
    lineHeight: 24,
    letterSpacing: 0
  },
  text2: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_2,
    lineHeight: 24,
    letterSpacing: 0
  },
  text1: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_1_RESPONSIVE,
    lineHeight: 24,
    letterSpacing: getLetterSpacing(FONT_SIZE_TEXT_1_RESPONSIVE, 2)
  },
  buttonText: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_TEXT,
    lineHeight: 24,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_TEXT, 2)
  },
  buttonMedium: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_MEDIUM,
    lineHeight: 24,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_MEDIUM, 2)
  },
  buttonLarge: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_LARGE,
    lineHeight: 24,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_LARGE, 2)
  },
  sub3: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_3_RESPONSIVE,
    lineHeight: 24,
    letterSpacing: getLetterSpacing(FONT_SIZE_SUB_3_RESPONSIVE, 2)
  },
  sub2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_2_RESPONSIVE,
    lineHeight: 32,
    letterSpacing: 0
  },
  sub1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_1_RESPONSIVE,
    lineHeight: 40,
    letterSpacing: getLetterSpacing(FONT_SIZE_SUB_1_RESPONSIVE, 2)
  },
  h3: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H3_RESPONSIVE,
    lineHeight: 40,
    letterSpacing: getLetterSpacing(FONT_SIZE_H3_RESPONSIVE, 1)
  },
  h2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H2_RESPONSIVE,
    lineHeight: 48,
    letterSpacing: getLetterSpacing(FONT_SIZE_H2_RESPONSIVE, 4)
  },
  h1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H1_RESPONSIVE,
    lineHeight: 52,
    letterSpacing: getLetterSpacing(FONT_SIZE_H1_RESPONSIVE, 6)
  }
});

exports.FONT_SIZE_BODY = FONT_SIZE_BODY;
exports.FONT_SIZE_BUTTON_LARGE = FONT_SIZE_BUTTON_LARGE;
exports.FONT_SIZE_BUTTON_MEDIUM = FONT_SIZE_BUTTON_MEDIUM;
exports.FONT_SIZE_BUTTON_TEXT = FONT_SIZE_BUTTON_TEXT;
exports.FONT_SIZE_CAPTION = FONT_SIZE_CAPTION;
exports.FONT_SIZE_CAPTION_1 = FONT_SIZE_CAPTION_1;
exports.FONT_SIZE_CAPTION_2 = FONT_SIZE_CAPTION_2;
exports.FONT_SIZE_H1 = FONT_SIZE_H1;
exports.FONT_SIZE_H1_RESPONSIVE = FONT_SIZE_H1_RESPONSIVE;
exports.FONT_SIZE_H2 = FONT_SIZE_H2;
exports.FONT_SIZE_H2_RESPONSIVE = FONT_SIZE_H2_RESPONSIVE;
exports.FONT_SIZE_H3 = FONT_SIZE_H3;
exports.FONT_SIZE_H3_RESPONSIVE = FONT_SIZE_H3_RESPONSIVE;
exports.FONT_SIZE_HEADER = FONT_SIZE_HEADER;
exports.FONT_SIZE_LARGE_HEADER = FONT_SIZE_LARGE_HEADER;
exports.FONT_SIZE_LARGE_TITLE = FONT_SIZE_LARGE_TITLE;
exports.FONT_SIZE_SUB_1 = FONT_SIZE_SUB_1;
exports.FONT_SIZE_SUB_1_RESPONSIVE = FONT_SIZE_SUB_1_RESPONSIVE;
exports.FONT_SIZE_SUB_2 = FONT_SIZE_SUB_2;
exports.FONT_SIZE_SUB_2_RESPONSIVE = FONT_SIZE_SUB_2_RESPONSIVE;
exports.FONT_SIZE_SUB_3 = FONT_SIZE_SUB_3;
exports.FONT_SIZE_SUB_3_RESPONSIVE = FONT_SIZE_SUB_3_RESPONSIVE;
exports.FONT_SIZE_SUB_CAPTION = FONT_SIZE_SUB_CAPTION;
exports.FONT_SIZE_SUB_HEADER = FONT_SIZE_SUB_HEADER;
exports.FONT_SIZE_TEXT_1 = FONT_SIZE_TEXT_1;
exports.FONT_SIZE_TEXT_1_RESPONSIVE = FONT_SIZE_TEXT_1_RESPONSIVE;
exports.FONT_SIZE_TEXT_2 = FONT_SIZE_TEXT_2;
exports.FONT_SIZE_TEXT_3 = FONT_SIZE_TEXT_3;
exports.FONT_SIZE_TEXT_4 = FONT_SIZE_TEXT_4;
exports.FONT_SIZE_TITLE = FONT_SIZE_TITLE;
exports.fontStyles = fontStyles;
exports.manrope = manrope;
exports.openSans = openSans;
exports.responsiveFontStyles = responsiveFontStyles;
exports.text = text;
