'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var theme = require('../styles/theme.js');
require('react-native-web');
require('../styles/margin.js');
require('../styles/padding.js');
require('../styles/spacing.js');
require('../styles/text.js');
require('../styles/container.js');

var ThemeContext = React.createContext({
  theme: theme.lightTheme,
  setTheme: function () {
    return null;
  }
});

exports.ThemeContext = ThemeContext;
