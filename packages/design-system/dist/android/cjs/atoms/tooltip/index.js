'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('@floating-ui/react-native');
var React = require('react');
var nativeBase = require('native-base');
var reactNative$1 = require('react-native');
var colors = require('../../styles/colors.js');
var utils = require('../../styles/utils.js');
require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
var native = require('../../hooks/native.js');
var utils$1 = require('./utils.js');

var styles = utils.makeStyles({
  tooltip: {
    position: 'absolute',
    maxWidth: 250
  }
});
var Tooltip = function (_a) {
  var _b = _a.variant,
    variant = _b === void 0 ? 'light' : _b,
    open = _a.open,
    children = _a.children,
    title = _a.title,
    placement = _a.placement;
  var _c = React.useState(open),
    isOpen = _c[0],
    setIsOpen = _c[1];
  var _d = reactNative.useFloating({
      placement: placement,
      middleware: [reactNative.shift()]
    }),
    x = _d.x,
    y = _d.y,
    reference = _d.reference,
    floating = _d.floating;
  var _e = native.useFloatingLayoutAndroidHandler({
      x: x,
      y: y
    }),
    xy = _e.xy,
    onLayout = _e.onLayout;
  var handlePress = React.useCallback(function () {
    setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });
  }, []);
  return jsxRuntime.jsxs(nativeBase.View, {
    children: [jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
      onPress: handlePress
    }, {
      children: jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
        ref: reference,
        onLayout: reactNative$1.Platform.select({
          android: onLayout,
          default: undefined
        })
      }, {
        children: utils$1.asTextNode(children)
      }))
    })), isOpen && jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
      ref: floating,
      style: [styles.tooltip, container.container.borderRadius, container.container.shadow, padding.padding.ph16, padding.padding.pv8, {
        top: xy[1],
        left: xy[0],
        backgroundColor: variant === 'dark' ? colors.darkNavy : colors.white
      }]
    }, {
      children: utils$1.asTextNode(title, variant === 'dark' ? colors.white : colors.charcoalBlack)
    }))]
  });
};

exports.Tooltip = Tooltip;
