'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var colors = require('./colors.js');
require('react-native');
require('./margin.js');
require('./padding.js');
require('./spacing.js');
require('./text.js');
require('./container.js');

var lightTheme = {
  background: {
    primary: colors.white,
    secondary: colors.aliceBlue,
    tertiary: colors.lightGray,
    highlight: colors.lavendar,
    lowLight: colors.darkNavy,
    error: colors.mistyRose,
    warning: colors.orange,
    page: colors.ghostWhite
  },
  text: {
    primary: colors.charcoalBlack,
    secondary: colors.grey,
    highlight: colors.dodgerBlue,
    error: colors.crimson,
    warning: colors.orange
  }
};

exports.lightTheme = lightTheme;
