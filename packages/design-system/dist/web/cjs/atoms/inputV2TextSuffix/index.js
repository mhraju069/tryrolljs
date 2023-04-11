'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNativeWeb = require('react-native-web');
require('react');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
var index = require('../typographyV2/index.js');

var InputV2TextSuffix = function (_a) {
  var title = _a.title,
    description = _a.description;
  var theme = themeV2.useThemeV2();
  return jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
    style: [container.container.alignEnd]
  }, {
    children: [jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
      variant: "caption1",
      color: theme.text.black[100]
    }, {
      children: title
    })), jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
      variant: "caption2",
      color: theme.text.black[40]
    }, {
      children: description
    }))]
  }));
};

exports.InputV2TextSuffix = InputV2TextSuffix;
