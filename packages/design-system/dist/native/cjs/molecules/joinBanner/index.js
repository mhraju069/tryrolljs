'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
require('native-base');
require('react');
require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
require('../../atoms/button/index.js');
var index$1 = require('../../atoms/buttonV2/index.js');
require('../../atoms/circleImg/index.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
var index = require('../../atoms/typographyV2/index.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');
require('react-native-svg');

var MAX_BANNER_WIDTH = 200;
var CIRCLE_BACKGROUND_COLOR = '#FFE9DF';
var CIRCLE_SIZE = 80;
var styles = reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative'
  },
  circle: {
    borderRadius: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    position: 'absolute',
    bottom: -32,
    right: -10,
    backgroundColor: CIRCLE_BACKGROUND_COLOR
  }
});
var JoinBanner = function (_a) {
  var title = _a.title,
    description = _a.description,
    action = _a.action;
  var theme = themeV2.useThemeV2();
  return jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
    style: [styles.container, padding.padding.ph16, padding.padding.pv16, container.container.borderRadius2XL, container.container.fullWidth, container.container.alignStart, {
      backgroundColor: theme.base.highlight2[40],
      maxWidth: MAX_BANNER_WIDTH
    }]
  }, {
    children: [jsxRuntime.jsx(reactNative.View, {
      style: [styles.circle]
    }), jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
      variant: "caption1",
      style: [margin.margin.mb4]
    }, {
      children: title
    })), jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
      variant: "text4",
      style: [margin.margin.mb16]
    }, {
      children: description
    })), jsxRuntime.jsx(index$1.ButtonV2, {
      variant: "primary",
      size: "small",
      title: action.title,
      onPress: action.onPress
    })]
  }));
};

exports.JoinBanner = JoinBanner;
