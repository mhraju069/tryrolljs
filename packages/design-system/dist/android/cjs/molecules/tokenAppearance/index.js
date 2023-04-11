'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var reactNative = require('react-native');
require('react');
require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
require('../../atoms/button/index.js');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react-native-svg');
var index$1 = require('../../atoms/typographyV2/index.js');
var index = require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');

var TokenAppearance = function (_a) {
  var logo = _a.logo,
    name = _a.name,
    symbol = _a.symbol,
    action = _a.action;
  var theme = themeV2.useThemeV2();
  var isMobile = nativeBase.useBreakpointValue({
    base: true,
    xl: false
  });
  var circleSize = nativeBase.useBreakpointValue({
    base: 24,
    xl: 32
  });
  var infoContainerStyles = nativeBase.useBreakpointValue({
    base: [container.container.row, container.container.alignCenter],
    xl: [container.container.alignCenter]
  });
  var containerStyles = nativeBase.useBreakpointValue({
    base: [container.container.row, container.container.justifySpaceBetween, container.container.alignCenter],
    xl: []
  });
  var symbolStyles = nativeBase.useBreakpointValue({
    base: [margin.margin.ml16],
    xl: [margin.margin.mb8]
  });
  return jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
    style: tslib_es6.__spreadArray([container.container.alignCenter, container.container.fullWidth], containerStyles, true)
  }, {
    children: [jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
      style: infoContainerStyles
    }, {
      children: [jsxRuntime.jsx(index.CircleImg, {
        uri: logo,
        size: circleSize
      }), !isMobile && jsxRuntime.jsx(index$1.TypographyV2, tslib_es6.__assign({
        variant: "caption2",
        color: theme.text.black[100],
        style: [margin.margin.mt4]
      }, {
        children: name
      })), jsxRuntime.jsxs(index$1.TypographyV2, tslib_es6.__assign({
        variant: "caption2",
        color: theme.text.black[30],
        style: symbolStyles
      }, {
        children: ["$", symbol]
      }))]
    })), jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
      onPress: action.onPress
    }, {
      children: jsxRuntime.jsx(index$1.TypographyV2, tslib_es6.__assign({
        variant: "caption2",
        color: theme.base.highlight1
      }, {
        children: action.title
      }))
    }))]
  }));
};

exports.TokenAppearance = TokenAppearance;
