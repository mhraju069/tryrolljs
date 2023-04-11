'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactNativeWeb = require('react-native-web');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
var index = require('../circleImg/index.js');
var index$1 = require('../typographyV2/index.js');

var TokenSelectOptionV2 = function (_a) {
  var value = _a.value,
    name = _a.name,
    symbol = _a.symbol,
    logo = _a.logo,
    onChange = _a.onChange,
    onClose = _a.onClose;
  var theme = themeV2.useThemeV2();
  var handlePressOption = React.useCallback(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [onChange, value, onClose]);
  return jsxRuntime.jsxs(reactNativeWeb.Pressable, tslib_es6.__assign({
    style: [container.container.row, container.container.justifySpaceBetween, container.container.fullWidth, container.container.alignCenter, padding.padding.p8],
    onPress: handlePressOption,
    testID: "tokenSelectOption__".concat(value)
  }, {
    children: [jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
      style: [container.container.row, container.container.alignCenter]
    }, {
      children: [jsxRuntime.jsx(index.CircleImg, {
        size: 32,
        uri: logo
      }), jsxRuntime.jsx(index$1.TypographyV2, tslib_es6.__assign({
        variant: "caption1",
        style: margin.margin.ml16,
        color: theme.text.black[100]
      }, {
        children: symbol
      }))]
    })), jsxRuntime.jsx(index$1.TypographyV2, tslib_es6.__assign({
      variant: "text3",
      color: theme.text.black[80]
    }, {
      children: name
    }))]
  }), value);
};

exports.TokenSelectOptionV2 = TokenSelectOptionV2;
