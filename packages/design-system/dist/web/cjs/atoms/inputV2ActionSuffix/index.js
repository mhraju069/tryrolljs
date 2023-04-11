'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
require('react');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
require('react-native-web');
var index = require('../typographyV2/index.js');

var InputV2ActionSuffix = function (_a) {
  var title = _a.title,
    onPress = _a.onPress,
    color = _a.color,
    _b = _a.disabled,
    disabled = _b === void 0 ? false : _b;
  var theme = themeV2.useThemeV2();
  var getColor = function () {
    if (color) {
      return color;
    }
    return disabled ? theme.text.black[40] : theme.text.black[100];
  };
  return jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
    onPress: onPress,
    variant: "caption1",
    color: getColor()
  }, {
    children: title
  }));
};

exports.InputV2ActionSuffix = InputV2ActionSuffix;
