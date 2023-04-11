'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var reactNativeWeb = require('react-native-web');
var mobile = require('../sidebar/mobile.js');
var desktop = require('./desktop.js');

var HeaderV2 = function (_a) {
  var children = _a.children,
    props = tslib_es6.__rest(_a, ["children"]);
  var isMobile = nativeBase.useBreakpointValue({
    base: true,
    md: false
  });
  if (isMobile) {
    return jsxRuntime.jsxs(reactNativeWeb.View, {
      children: [jsxRuntime.jsx(mobile.MobileSidebar, tslib_es6.__assign({}, props, {
        sections: [{
          id: 'main',
          options: props.options
        }]
      })), reactNativeWeb.Platform.select({
        native: jsxRuntime.jsx(reactNativeWeb.ScrollView, {
          children: children
        }),
        web: children
      })]
    });
  }
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx(desktop.DesktopHeader, tslib_es6.__assign({}, props)), children]
  });
};

exports.HeaderV2 = HeaderV2;
