import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

export const makeStyles = <T = {}>(styles: StyleSheet.NamedStyles<T>) =>
  StyleSheet.create(styles)

export const makeTextStyles = (styles: StyleSheet.NamedStyles<TextStyle>) =>
  StyleSheet.create(styles)

export const makeViewStyles = (styles: StyleSheet.NamedStyles<ViewStyle>) =>
  StyleSheet.create(styles)

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

export const margins = StyleSheet.create({
  m8: { margin: 8 },
  m16: { margin: 16 },
  m24: { margin: 24 },
  m32: { margin: 32 },
  m40: { margin: 40 },
  m48: { margin: 48 },
  mb4: { marginBottom: 4 },
  mb8: { marginBottom: 8 },
  mb16: { marginBottom: 16 },
  mb24: { marginBottom: 24 },
  mb32: { marginBottom: 32 },
  mb40: { marginBottom: 40 },
  mb48: { marginBottom: 48 },
  mt8: { marginTop: 8 },
  mt16: { marginTop: 16 },
  mt24: { marginTop: 24 },
  mt32: { marginTop: 32 },
  mt40: { marginTop: 40 },
  mt48: { marginTop: 48 },
  mr4: { marginRight: 4 },
  mr8: { marginRight: 8 },
  mr16: { marginRight: 16 },
  mr24: { marginRight: 24 },
  mr32: { marginRight: 32 },
  mr40: { marginRight: 40 },
  mr48: { marginRight: 48 },
  ml4: { marginLeft: 4 },
  ml8: { marginLeft: 8 },
  ml16: { marginLeft: 16 },
  ml24: { marginLeft: 24 },
  ml32: { marginLeft: 32 },
  ml40: { marginLeft: 40 },
  ml48: { marginLeft: 48 },
  mh8: { marginHorizontal: 8 },
  mh16: { marginHorizontal: 16 },
  mh24: { marginHorizontal: 24 },
  mh32: { marginHorizontal: 32 },
  mh40: { marginHorizontal: 40 },
  mh48: { marginHorizontal: 48 },
  mv8: { marginVertical: 8 },
  mv16: { marginVertical: 16 },
  mv24: { marginVertical: 24 },
  mv32: { marginVertical: 32 },
  mv40: { marginVertical: 40 },
  mv48: { marginVertical: 48 },
})

export const padding = StyleSheet.create({
  p4: { padding: 4 },
  p8: { padding: 8 },
  p16: { padding: 16 },
  p24: { padding: 24 },
  p32: { padding: 32 },
  p40: { padding: 40 },
  p48: { padding: 48 },
  pv4: { paddingVertical: 4 },
  pv8: { paddingVertical: 8 },
  pv16: { paddingVertical: 16 },
  pv24: { paddingVertical: 24 },
  pv32: { paddingVertical: 32 },
  pv40: { paddingVertical: 40 },
  pv48: { paddingVertical: 48 },
  ph4: { paddingHorizontal: 4 },
  ph8: { paddingHorizontal: 8 },
  ph16: { paddingHorizontal: 16 },
  ph24: { paddingHorizontal: 24 },
  ph32: { paddingHorizontal: 32 },
  ph40: { paddingHorizontal: 40 },
  ph48: { paddingHorizontal: 48 },
  pl4: { paddingLeft: 4 },
  pl8: { paddingLeft: 8 },
  pl16: { paddingLeft: 16 },
  pl24: { paddingLeft: 24 },
  pl32: { paddingLeft: 32 },
  pl40: { paddingLeft: 40 },
  pl48: { paddingLeft: 48 },
  pr4: { paddingRight: 4 },
  pr8: { paddingRight: 8 },
  pr16: { paddingRight: 16 },
  pr24: { paddingRight: 24 },
  pr32: { paddingRight: 32 },
  pr40: { paddingRight: 40 },
  pr48: { paddingRight: 48 },
  pb4: { paddingBottom: 4 },
  pb8: { paddingBottom: 8 },
  pb16: { paddingBottom: 16 },
  pb24: { paddingBottom: 24 },
  pb32: { paddingBottom: 32 },
  pb40: { paddingBottom: 40 },
  pb48: { paddingBottom: 48 },
  pt4: { paddingTop: 4 },
  pt8: { paddingTop: 8 },
  pt16: { paddingTop: 16 },
  pt24: { paddingTop: 24 },
  pt32: { paddingTop: 32 },
  pt40: { paddingTop: 40 },
  pt48: { paddingTop: 48 },
})

export const containers = StyleSheet.create({
  shadowXL: {
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '50%',
  },
  fullHeight: {
    height: '100%',
  },
  flex1: {
    flex: 1,
  },
  inputRadius: {
    borderRadius: 3,
  },
  buttonRadius: {
    borderRadius: 3,
  },
  row: {
    flexDirection: 'row',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  borderRadius: {
    borderRadius: 8,
  },
  borderRadiusXL: {
    borderRadius: 12,
  },
  borderRadius2XL: {
    borderRadius: 16,
  },
  borderRadius3XL: {
    borderRadius: 24,
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
})

export const FONT_SIZE_SUB_CAPTION = 8
export const FONT_SIZE_CAPTION = 12
export const FONT_SIZE_BODY = 14
export const FONT_SIZE_SUB_HEADER = 16
export const FONT_SIZE_HEADER = 20
export const FONT_SIZE_LARGE_HEADER = 24
export const FONT_SIZE_TITLE = 28
export const FONT_SIZE_LARGE_TITLE = 48

export const text = StyleSheet.create({
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
  display: {
    color: '#1AF4FF',
  },
  faded: {
    color: 'gray',
  },
  warning: {
    color: 'red',
  },
})
