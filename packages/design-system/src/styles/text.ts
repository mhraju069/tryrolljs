import { TypographyVariant } from '../atoms'
import { makeStyles } from './utils'

export const openSans = {
  reg: 'OpenSans-Regular',
  bold: 'OpenSans-Bold',
  boldItalic: 'OpenSans-BoldItalic',
  extraBold: 'OpenSans-ExtraBold',
  extraBoldItalic: 'OpenSans-ExtraBoldItalic',
  italic: 'OpenSans-Italic',
  light: 'OpenSans-Light',
  lightItalic: 'OpenSans-LightItalic',
  semiBold: 'OpenSans-SemiBold',
  semiBoldItalic: 'OpenSans-SemiBoldItalic',
}

export const manrope = {
  regular: 'Manrope-Regular',
  semiBold: 'Manrope-SemiBold',
  bold: 'Manrope-Bold',
}

export const roboto = {
  medium: 'RobotoMono-Medium',
}

export const FONT_SIZE_SUB_CAPTION = 8
export const FONT_SIZE_CAPTION = 12
export const FONT_SIZE_BODY = 14
export const FONT_SIZE_SUB_HEADER = 16
export const FONT_SIZE_HEADER = 20
export const FONT_SIZE_LARGE_HEADER = 24
export const FONT_SIZE_TITLE = 28
export const FONT_SIZE_LARGE_TITLE = 48

// V2 Font Sizes
export const FONT_SIZE_CAPTION_2 = 12
export const FONT_SIZE_CAPTION_1 = 14
export const FONT_SIZE_TEXT_4 = 12
export const FONT_SIZE_TEXT_3 = 14
export const FONT_SIZE_TEXT_2 = 16
export const FONT_SIZE_TEXT_1 = 20
export const FONT_SIZE_BUTTON_TEXT = 16
export const FONT_SIZE_BUTTON_MEDIUM = 14
export const FONT_SIZE_BUTTON_LARGE = 20
export const FONT_SIZE_SUB_3 = 20
export const FONT_SIZE_SUB_2 = 24
export const FONT_SIZE_SUB_1 = 40
export const FONT_SIZE_H3 = 48
export const FONT_SIZE_H2 = 64
export const FONT_SIZE_H1 = 72
// Resopnsive font sizes
export const FONT_SIZE_TEXT_1_RESPONSIVE = 18
export const FONT_SIZE_SUB_3_RESPONSIVE = 18
export const FONT_SIZE_SUB_2_RESPONSIVE = 20
export const FONT_SIZE_SUB_1_RESPONSIVE = 32
export const FONT_SIZE_H3_RESPONSIVE = 32
export const FONT_SIZE_H2_RESPONSIVE = 40
export const FONT_SIZE_H1_RESPONSIVE = 48

const getLetterSpacing = (fontSize: number, percentage: number) =>
  fontSize * (percentage / 100) * -1

export const text = makeStyles({
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  body: {
    fontFamily: openSans.reg,
  },
  bold: {
    fontFamily: openSans.bold,
  },
  semiBold: {
    fontFamily: openSans.semiBold,
  },
  h1: {
    fontSize: 36,
  },
  h2: {
    fontSize: 32,
  },
  h3: {
    fontSize: FONT_SIZE_TITLE,
  },
  h4: {
    fontSize: FONT_SIZE_LARGE_HEADER,
  },
  h5: {
    fontSize: FONT_SIZE_HEADER,
  },
  h6: {
    fontSize: FONT_SIZE_SUB_HEADER,
  },
  caption: {
    fontSize: FONT_SIZE_CAPTION,
  },
  subCaption: {
    fontSize: FONT_SIZE_SUB_CAPTION,
  },
  heading: {
    fontSize: 18,
  },
})

export const lineHeights: Record<TypographyVariant, number> = {
  caption2: 16,
  caption1: 24,
  text4: 16,
  text3: 24,
  text2: 24,
  text1: 32,
  buttonText: 24,
  buttonMedium: 24,
  buttonLarge: 32,
  sub3: 32,
  sub2: 32,
  sub1: 56,
  h3: 64,
  h2: 76,
  h1: 80,
}

export const responsiveLineHeights: Record<TypographyVariant, number> = {
  caption2: 16,
  caption1: 24,
  text4: 16,
  text3: 24,
  text2: 24,
  text1: 24,
  buttonText: 24,
  buttonMedium: 24,
  buttonLarge: 24,
  sub3: 24,
  sub2: 32,
  sub1: 40,
  h3: 40,
  h2: 48,
  h1: 52,
}

export const fontStyles = makeStyles({
  caption2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_CAPTION_2,
    lineHeight: lineHeights.caption2,
    letterSpacing: 0,
  },
  caption1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_CAPTION_1,
    lineHeight: lineHeights.caption1,
    letterSpacing: 0,
  },
  text4: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_4,
    lineHeight: lineHeights.text4,
    letterSpacing: 0,
  },
  text3: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_3,
    lineHeight: lineHeights.text3,
    letterSpacing: 0,
  },
  text2: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_2,
    lineHeight: lineHeights.text2,
    letterSpacing: 0,
  },
  text1: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_1,
    lineHeight: lineHeights.text1,
    letterSpacing: getLetterSpacing(FONT_SIZE_TEXT_1, 2),
  },
  buttonText: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_TEXT,
    lineHeight: lineHeights.buttonText,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_TEXT, 2),
  },
  buttonMedium: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_MEDIUM,
    lineHeight: lineHeights.buttonMedium,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_MEDIUM, 2),
  },
  buttonLarge: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_LARGE,
    lineHeight: lineHeights.buttonLarge,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_LARGE, 2),
  },
  sub3: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_3,
    lineHeight: lineHeights.sub3,
    letterSpacing: getLetterSpacing(FONT_SIZE_SUB_3, 2),
  },
  sub2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_2,
    lineHeight: lineHeights.sub2,
    letterSpacing: 0,
  },
  sub1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_1,
    lineHeight: lineHeights.sub1,
    letterSpacing: getLetterSpacing(FONT_SIZE_SUB_1, 2),
  },
  h3: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H3,
    lineHeight: lineHeights.h3,
    letterSpacing: getLetterSpacing(FONT_SIZE_H3, 1),
  },
  h2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H2,
    lineHeight: lineHeights.h2,
    letterSpacing: getLetterSpacing(FONT_SIZE_H2, 4),
  },
  h1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H1,
    lineHeight: lineHeights.h1,
    letterSpacing: getLetterSpacing(FONT_SIZE_H1, 6),
  },
})

export const responsiveFontStyles = makeStyles({
  caption2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_CAPTION_2,
    lineHeight: responsiveLineHeights.caption2,
    letterSpacing: 0,
  },
  caption1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_CAPTION_1,
    lineHeight: responsiveLineHeights.caption1,
    letterSpacing: 0,
  },
  text4: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_4,
    lineHeight: responsiveLineHeights.text4,
    letterSpacing: 0,
  },
  text3: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_3,
    lineHeight: responsiveLineHeights.text3,
    letterSpacing: 0,
  },
  text2: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_2,
    lineHeight: responsiveLineHeights.text2,
    letterSpacing: 0,
  },
  text1: {
    fontFamily: manrope.regular,
    fontSize: FONT_SIZE_TEXT_1_RESPONSIVE,
    lineHeight: responsiveLineHeights.text1,
    letterSpacing: getLetterSpacing(FONT_SIZE_TEXT_1_RESPONSIVE, 2),
  },
  buttonText: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_TEXT,
    lineHeight: responsiveLineHeights.buttonText,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_TEXT, 2),
  },
  buttonMedium: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_MEDIUM,
    lineHeight: responsiveLineHeights.buttonMedium,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_MEDIUM, 2),
  },
  buttonLarge: {
    fontFamily: manrope.semiBold,
    fontSize: FONT_SIZE_BUTTON_LARGE,
    lineHeight: responsiveLineHeights.buttonLarge,
    letterSpacing: getLetterSpacing(FONT_SIZE_BUTTON_LARGE, 2),
  },
  sub3: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_3_RESPONSIVE,
    lineHeight: responsiveLineHeights.sub3,
    letterSpacing: getLetterSpacing(FONT_SIZE_SUB_3_RESPONSIVE, 2),
  },
  sub2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_2_RESPONSIVE,
    lineHeight: responsiveLineHeights.sub2,
    letterSpacing: 0,
  },
  sub1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_SUB_1_RESPONSIVE,
    lineHeight: responsiveLineHeights.sub1,
    letterSpacing: getLetterSpacing(FONT_SIZE_SUB_1_RESPONSIVE, 2),
  },
  h3: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H3_RESPONSIVE,
    lineHeight: responsiveLineHeights.h3,
    letterSpacing: getLetterSpacing(FONT_SIZE_H3_RESPONSIVE, 1),
  },
  h2: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H2_RESPONSIVE,
    lineHeight: responsiveLineHeights.h2,
    letterSpacing: getLetterSpacing(FONT_SIZE_H2_RESPONSIVE, 4),
  },
  h1: {
    fontFamily: manrope.bold,
    fontSize: FONT_SIZE_H1_RESPONSIVE,
    lineHeight: responsiveLineHeights.h1,
    letterSpacing: getLetterSpacing(FONT_SIZE_H1_RESPONSIVE, 6),
  },
})
