'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../context/modal.js');
var theme = require('../context/theme.js');
require('../context/web3.js');
require('../context/themeV2.js');

var useTheme = function () {
  var theme$1 = React.useContext(theme.ThemeContext).theme;
  return theme$1;
};

exports.useTheme = useTheme;
