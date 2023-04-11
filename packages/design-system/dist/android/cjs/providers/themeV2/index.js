'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var themeV2 = require('../../styles/themeV2.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
var themeV2$1 = require('../../context/themeV2.js');

var ThemeProviderV2 = function (_a) {
  var children = _a.children;
  var _b = React.useState(themeV2.lightTheme),
    theme = _b[0],
    setTheme = _b[1];
  return jsxRuntime.jsx(themeV2$1.ThemeContextV2.Provider, tslib_es6.__assign({
    value: {
      theme: theme,
      setTheme: setTheme
    }
  }, {
    children: children
  }));
};

exports.ThemeProviderV2 = ThemeProviderV2;
