'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNativeWeb = require('react-native-web');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');

var Surface = function (_a) {
  var style = _a.style,
    children = _a.children;
  return jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
    style: [container.container.borderRadius, container.container.shadow, style]
  }, {
    children: children
  }));
};

exports.Surface = Surface;
