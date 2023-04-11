'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('@floating-ui/react-native');
var nativeBase = require('native-base');
var React = require('react');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native');
var native = require('../../hooks/native.js');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');

var Popover = function (_a) {
  var children = _a.children,
    onOpenChange = _a.onOpenChange,
    open = _a.open,
    renderReference = _a.renderReference,
    _b = _a.placement,
    placement = _b === void 0 ? 'bottom-start' : _b,
    rest = tslib_es6.__rest(_a, ["children", "onOpenChange", "open", "renderReference", "placement"]);
  var theme$1 = theme.useTheme();
  var _c = reactNative.useFloating({
      placement: placement,
      middleware: [reactNative.flip(), reactNative.shift()]
    }),
    x = _c.x,
    y = _c.y,
    reference = _c.reference,
    floating = _c.floating;
  var _d = native.useFloatingLayoutAndroidHandler({
      x: x,
      y: y
    }),
    xy = _d.xy,
    onLayout = _d.onLayout;
  var getReferenceProps = React.useCallback(function () {
    return {
      onPress: function () {
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(!open);
      },
      onLayout: onLayout
    };
  }, [onLayout, onOpenChange, open]);
  var referenceNode = React.useMemo(function () {
    return renderReference({
      reference: reference,
      getReferenceProps: getReferenceProps
    });
  }, [reference, renderReference, getReferenceProps]);
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [referenceNode, open && jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
      style: [container.container.positionAbsolute, container.container.borderRadiusSM, container.container.shadow,
      // @ts-ignore
      // eslint-disable-next-line react-native/no-inline-styles
      {
        zIndex: 999,
        top: xy[1],
        left: xy[0],
        backgroundColor: theme$1.background.primary
      }],
      ref: floating
    }, rest, {
      children: children
    }))]
  });
};

exports.Popover = Popover;
