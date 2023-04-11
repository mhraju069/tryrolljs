'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var themeV2 = require('../styles/themeV2.js');

var ThemeContextV2 = React.createContext({
  theme: themeV2.lightTheme,
  setTheme: function () {
    return null;
  }
});

exports.ThemeContextV2 = ThemeContextV2;
