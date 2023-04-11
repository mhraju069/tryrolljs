'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
require('native-base');
require('react');
var index = require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
var index$1 = require('../../atoms/button/index.js');
var colors = require('../../styles/colors.js');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
var text = require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');

var TEXT_COLOR_MAP = {
  success: colors.green,
  error: colors.crimson,
  warn: colors.orange
};
var Result = function (_a) {
  var title = _a.title,
    description = _a.description,
    _b = _a.actions,
    actions = _b === void 0 ? [] : _b,
    layout = _a.layout,
    _c = _a.variant,
    variant = _c === void 0 ? 'success' : _c;
  var isVertical = layout === 'vertical';
  return jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
    style: [container.container.center]
  }, {
    children: [jsxRuntime.jsx(index.LargeHeader, tslib_es6.__assign({
      color: TEXT_COLOR_MAP[variant],
      style: margin.margin.mb8
    }, {
      children: title
    })), jsxRuntime.jsx(index.Body, tslib_es6.__assign({
      style: text.text.center
    }, {
      children: description
    })), actions.length > 0 && jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
      style: [margin.margin.mt48, container.container.fullWidth, container.container.center, !isVertical && container.container.row]
    }, {
      children: [actions[0] && jsxRuntime.jsx(index$1.Button, {
        variant: "primary",
        inverted: true,
        title: actions[0].title,
        onPress: actions[0].onPress,
        style: [isVertical ? margin.margin.mb24 : margin.margin.mr24, isVertical ? container.container.fullWidth : container.container.flex1]
      }), actions[1] && jsxRuntime.jsx(index$1.Button, {
        variant: "primary",
        title: actions[1].title,
        onPress: actions[1].onPress,
        style: [isVertical ? container.container.fullWidth : container.container.flex1]
      })]
    }))]
  }));
};

exports.Result = Result;
exports.TEXT_COLOR_MAP = TEXT_COLOR_MAP;
exports["default"] = Result;
