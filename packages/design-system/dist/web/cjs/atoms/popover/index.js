'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactDomInteractions = require('@floating-ui/react-dom-interactions');
var nativeBase = require('native-base');
var theme = require('../../hooks/theme.js');
require('react');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native-web');
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
    openOnHover = _a.openOnHover,
    _b = _a.placement,
    placement = _b === void 0 ? 'bottom-start' : _b,
    matchReferenceWidth = _a.matchReferenceWidth,
    rest = tslib_es6.__rest(_a, ["children", "onOpenChange", "open", "renderReference", "openOnHover", "placement", "matchReferenceWidth"]);
  var theme$1 = theme.useTheme();
  var _c = reactDomInteractions.useFloating({
      placement: placement,
      open: open,
      onOpenChange: onOpenChange,
      middleware: [reactDomInteractions.flip(), reactDomInteractions.shift(), reactDomInteractions.size({
        apply: function (_a) {
          var rects = _a.rects,
            availableWidth = _a.availableWidth,
            availableHeight = _a.availableHeight,
            elements = _a.elements;
          Object.assign(elements.floating.style, {
            maxWidth: matchReferenceWidth ? "".concat(rects.reference.width, "px") : "".concat(availableWidth, "px"),
            width: matchReferenceWidth ? "".concat(rects.reference.width, "px") : undefined,
            maxHeight: "".concat(availableHeight, "px")
          });
        }
      })],
      // https://floating-ui.com/docs/react-dom#updating
      whileElementsMounted: function (reference_, floating_, update) {
        return reactDomInteractions.autoUpdate(reference_, floating_, update, {
          animationFrame: true
        });
      }
    }),
    x = _c.x,
    y = _c.y,
    reference = _c.reference,
    floating = _c.floating,
    strategy = _c.strategy,
    context = _c.context;
  var _d = reactDomInteractions.useInteractions([reactDomInteractions.useHover(context, {
      handleClose: reactDomInteractions.safePolygon(),
      move: false,
      enabled: openOnHover
    }), reactDomInteractions.useFocus(context)]),
    getReferenceProps = _d.getReferenceProps,
    getFloatingProps = _d.getFloatingProps;
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [renderReference({
      reference: reference,
      getReferenceProps: getReferenceProps
    }), open && jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
      style: [container.container.borderRadiusSM, container.container.shadow,
      // @ts-ignore
      // eslint-disable-next-line react-native/no-inline-styles
      {
        zIndex: 999,
        top: y !== null && y !== void 0 ? y : 0,
        left: x !== null && x !== void 0 ? x : 0,
        backgroundColor: theme$1.background.primary,
        position: strategy
      }],
      ref: floating
    }, getFloatingProps(), rest, {
      children: children
    }))]
  });
};

exports.Popover = Popover;
