'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../context/modal.js');
require('../context/theme.js');
require('../context/web3.js');
var themeV2 = require('../context/themeV2.js');

var useThemeV2 = function () {
  var theme = React.useContext(themeV2.ThemeContextV2).theme;
  return theme;
};

exports.useThemeV2 = useThemeV2;
