'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var reactNative = require('react-native');
require('react');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
var desktop = require('./desktop.js');
var mobile = require('./mobile.js');

var Sidebar = function (_a) {
  var children = _a.children,
    props = tslib_es6.__rest(_a, ["children"]);
  var isMobile = nativeBase.useBreakpointValue({
    base: true,
    xl: false
  });
  var theme = themeV2.useThemeV2();
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: reactNative.Platform.select({
      native: jsxRuntime.jsxs(reactNative.View, {
        children: [jsxRuntime.jsx(mobile.MobileSidebar, tslib_es6.__assign({}, props)), jsxRuntime.jsx(reactNative.ScrollView, {
          children: children
        })]
      }),
      web: jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: isMobile ? jsxRuntime.jsxs(reactNative.View, {
          children: [jsxRuntime.jsx(mobile.MobileSidebar, tslib_es6.__assign({}, props)), children]
        }) : jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
          style: [container.container.row, {
            backgroundColor: theme.background.grey
          }]
        }, {
          children: [jsxRuntime.jsx(desktop.DesktopSidebar, tslib_es6.__assign({}, props)), jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
            style: [container.container.flex1]
          }, {
            children: children
          }))]
        }))
      })
    })
  });
};

exports.Sidebar = Sidebar;
