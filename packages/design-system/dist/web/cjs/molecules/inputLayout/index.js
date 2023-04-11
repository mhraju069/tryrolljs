'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var reactNativeWeb = require('react-native-web');
var index = require('../../atoms/typographyV2/index.js');
require('react');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');

var CONTENT_MAX_WIDTH = 448;
var INPUT_MAX_WIDTH = 544;
var styles = reactNativeWeb.StyleSheet.create({
  inputsContainer: {
    maxWidth: INPUT_MAX_WIDTH,
    flex: reactNativeWeb.Platform.OS === 'web' ? 1 : undefined
  }
});
var InputLayout = function (_a) {
  var title = _a.title,
    description = _a.description,
    children = _a.children;
  var theme = themeV2.useThemeV2();
  var containerResponsiveStyles = nativeBase.useBreakpointValue({
    md: [container.container.row, container.container.justifySpaceBetween, container.container.alignStart]
  });
  var contentResponsiveStyles = nativeBase.useBreakpointValue({
    base: [margin.margin.mb16],
    md: [margin.margin.mr24]
  });
  return jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
    style: [containerResponsiveStyles]
  }, {
    children: [jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
      style: [contentResponsiveStyles, {
        maxWidth: CONTENT_MAX_WIDTH
      }]
    }, {
      children: [jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
        variant: "sub3",
        style: [margin.margin.mb8],
        color: theme.text.black[100]
      }, {
        children: title
      })), typeof description === 'string' ? jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
        variant: "text3",
        color: theme.text.black[80]
      }, {
        children: description
      })) : description]
    })), jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
      style: [styles.inputsContainer, {
        maxWidth: INPUT_MAX_WIDTH
      }]
    }, {
      children: children
    }))]
  }));
};

exports.InputLayout = InputLayout;
