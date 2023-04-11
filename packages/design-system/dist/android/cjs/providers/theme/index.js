'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var theme = require('../../styles/theme.js');
require('react-native');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');
require('../../context/modal.js');
var theme$1 = require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');

var ThemeProvider = function (_a) {
  var children = _a.children;
  var _b = React.useState(theme.lightTheme),
    theme$2 = _b[0],
    setTheme = _b[1];
  return jsxRuntime.jsx(theme$1.ThemeContext.Provider, tslib_es6.__assign({
    value: {
      theme: theme$2,
      setTheme: setTheme
    }
  }, {
    children: children
  }));
};

exports.ThemeProvider = ThemeProvider;
