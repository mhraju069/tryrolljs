'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNativeWeb = require('react-native-web');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
var index = require('../circleImg/index.js');
var index$1 = require('../typography/index.js');

var TokenChip = function (_a) {
  var symbol = _a.symbol,
    logo = _a.logo,
    _b = _a.size,
    size = _b === void 0 ? 24 : _b;
  return jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
    style: [container.container.row, container.container.alignCenter]
  }, {
    children: [jsxRuntime.jsx(index.CircleImg, {
      size: size,
      uri: logo
    }), jsxRuntime.jsx(index$1.Body, tslib_es6.__assign({
      style: margin.margin.ml4
    }, {
      children: symbol
    }))]
  }));
};

exports.TokenChip = TokenChip;
