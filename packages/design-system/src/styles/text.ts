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

export const FONT_SIZE_SUB_CAPTION = 8
export const FONT_SIZE_CAPTION = 12
export const FONT_SIZE_BODY = 14
export const FONT_SIZE_SUB_HEADER = 16
export const FONT_SIZE_HEADER = 20
export const FONT_SIZE_LARGE_HEADER = 24
export const FONT_SIZE_TITLE = 28
export const FONT_SIZE_LARGE_TITLE = 48

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
