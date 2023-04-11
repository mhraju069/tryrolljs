'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
var index = require('../typography/index.js');

var Tag = function (_a) {
  var title = _a.title,
    color = _a.color;
  return jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
    style: [container.container.borderRadius2XL, padding.padding.p8, {
      backgroundColor: color
    }]
  }, {
    children: jsxRuntime.jsx(index.Body, {
      children: title
    })
  }));
};

exports.Tag = Tag;
