'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var index = require('../theme/index.js');
var index$1 = require('../themeV2/index.js');

var TryrollProvider = function (_a) {
  var children = _a.children;
  return jsxRuntime.jsx(nativeBase.NativeBaseProvider, {
    children: jsxRuntime.jsx(index.ThemeProvider, {
      children: jsxRuntime.jsx(index$1.ThemeProviderV2, {
        children: children
      })
    })
  });
};
var inset = {
  frame: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  insets: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};
var TryrollTestProvider = function (_a) {
  var children = _a.children;
  return jsxRuntime.jsx(nativeBase.NativeBaseProvider, tslib_es6.__assign({
    initialWindowMetrics: inset
  }, {
    children: jsxRuntime.jsx(index.ThemeProvider, {
      children: jsxRuntime.jsx(index$1.ThemeProviderV2, {
        children: children
      })
    })
  }));
};

exports.TryrollProvider = TryrollProvider;
exports.TryrollTestProvider = TryrollTestProvider;
