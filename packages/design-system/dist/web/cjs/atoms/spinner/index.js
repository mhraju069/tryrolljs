'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var theme = require('../../hooks/theme.js');
require('react');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native-web');

var Spinner = function (_a) {
  var style = _a.style,
    size = _a.size,
    color = _a.color;
  var theme$1 = theme.useTheme();
  return jsxRuntime.jsx(nativeBase.Spinner, {
    color: color || theme$1.text.highlight,
    size: size,
    style: style
  });
};

exports.Spinner = Spinner;
