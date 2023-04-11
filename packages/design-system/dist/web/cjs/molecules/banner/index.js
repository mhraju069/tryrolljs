'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
var index = require('../../atoms/typography/index.js');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native-web');
require('../../atoms/button/index.js');
require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('@floating-ui/react-dom-interactions');
require('../../utils/web3.js');
require('../../atoms/input/index.js');

var Banner = function (_a) {
  var title = _a.title,
    action = _a.action,
    variant = _a.variant;
  var theme$1 = theme.useTheme();
  var colors = React.useMemo(function () {
    if (variant === 'warning') {
      return {
        background: theme$1.background.error,
        text: theme$1.text.error
      };
    }
    return {
      background: theme$1.text.highlight,
      text: theme$1.background.primary
    };
  }, [variant, theme$1]);
  return jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
    style: [container.container.row, container.container.justifyCenter, padding.padding.p16, {
      backgroundColor: colors.background
    }]
  }, {
    children: [jsxRuntime.jsxs(index.Body, tslib_es6.__assign({
      weight: "bold",
      color: colors.text
    }, {
      children: [title, "\u00A0"]
    })), !!action && jsxRuntime.jsx(index.Body, tslib_es6.__assign({
      onPress: action === null || action === void 0 ? void 0 : action.onPress,
      underline: true,
      color: colors.text
    }, {
      children: action.title
    }))]
  }));
};

exports.Banner = Banner;
