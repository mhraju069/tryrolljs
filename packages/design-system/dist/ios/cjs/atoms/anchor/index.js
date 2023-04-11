'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
var index = require('../typography/index.js');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native');

var Anchor = function (_a) {
  var children = _a.children,
    href = _a.href,
    fontSize = _a.fontSize,
    _b = _a.target,
    target = _b === void 0 ? '_blank' : _b,
    onPress = _a.onPress;
  var theme$1 = theme.useTheme();
  var handlePress = React.useCallback(function (event) {
    if (onPress && !href) {
      event === null || event === void 0 ? void 0 : event.preventDefault();
      onPress(event);
    }
  }, [onPress, href]);
  return jsxRuntime.jsx(nativeBase.Link, tslib_es6.__assign({
    href: href,
    isExternal: target === '_blank',
    onPress: handlePress
  }, {
    children: jsxRuntime.jsx(index.TypographyBase, tslib_es6.__assign({
      color: theme$1.text.highlight,
      fontSize: fontSize
    }, {
      children: children
    }))
  }));
};

exports.Anchor = Anchor;
