'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var reactNative = require('react-native');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
var text = require('../../styles/text.js');
require('../../styles/container.js');

var TypographyV2 = function (_a) {
  var children = _a.children,
    variant = _a.variant,
    style = _a.style,
    color = _a.color,
    numberOfLines = _a.numberOfLines,
    _b = _a.underline,
    underline = _b === void 0 ? false : _b,
    onPress = _a.onPress;
  var styles = nativeBase.useBreakpointValue({
    base: text.responsiveFontStyles,
    md: text.fontStyles
  });
  return jsxRuntime.jsx(reactNative.Text, tslib_es6.__assign({
    numberOfLines: numberOfLines,
    onPress: onPress,
    style: [styles[variant], style,
    // eslint-disable-next-line react-native/no-inline-styles
    {
      color: color,
      textDecorationLine: underline ? 'underline' : 'none'
    }]
  }, {
    children: children
  }));
};

exports.TypographyV2 = TypographyV2;
