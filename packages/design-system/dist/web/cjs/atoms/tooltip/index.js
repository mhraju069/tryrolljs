'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactDomInteractions = require('@floating-ui/react-dom-interactions');
var React = require('react');
var nativeBase = require('native-base');
var colors = require('../../styles/colors.js');
require('react-native-web');
require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
var index = require('../conditionalWrapper/index.js');
var utils = require('./utils.js');

var wrapper = function (render) {
  return jsxRuntime.jsx(reactDomInteractions.FloatingPortal, {
    children: render
  });
};
var Tooltip = function (_a) {
  var _b = _a.variant,
    variant = _b === void 0 ? 'light' : _b,
    open = _a.open,
    children = _a.children,
    title = _a.title,
    placement = _a.placement,
    _c = _a.renderInPortal,
    renderInPortal = _c === void 0 ? true : _c;
  var _d = React.useState(open),
    isOpen = _d[0],
    setIsOpen = _d[1];
  var _e = reactDomInteractions.useFloating({
      placement: placement,
      open: open,
      onOpenChange: setIsOpen,
      middleware: [reactDomInteractions.offset(8), reactDomInteractions.flip(), reactDomInteractions.shift(), reactDomInteractions.size({
        apply: function (_a) {
          var availableWidth = _a.availableWidth,
            availableHeight = _a.availableHeight,
            elements = _a.elements;
          Object.assign(elements.floating.style, {
            maxWidth: "".concat(Math.min(availableWidth, 250), "px"),
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
    context = _e.context,
    x = _e.x,
    y = _e.y,
    reference = _e.reference,
    floating = _e.floating,
    strategy = _e.strategy;
  var _f = reactDomInteractions.useInteractions([reactDomInteractions.useHover(context, {
      handleClose: reactDomInteractions.safePolygon(),
      move: false
    }), reactDomInteractions.useFocus(context)]),
    getReferenceProps = _f.getReferenceProps,
    getFloatingProps = _f.getFloatingProps;
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx("div", tslib_es6.__assign({
      ref: reference
    }, getReferenceProps(), {
      children: children
    })), jsxRuntime.jsx(index.ConditionalWrapper, tslib_es6.__assign({
      condition: renderInPortal,
      wrapper: wrapper
    }, {
      children: (isOpen || open) && jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
        style: [container.container.borderRadius, container.container.shadow, padding.padding.ph16, padding.padding.pv8,
        // @ts-ignore
        // eslint-disable-next-line react-native/no-inline-styles
        {
          zIndex: 999,
          top: y !== null && y !== void 0 ? y : 0,
          left: x !== null && x !== void 0 ? x : 0,
          backgroundColor: variant === 'dark' ? colors.darkNavy : colors.white,
          position: strategy
        }],
        ref: floating
      }, getFloatingProps(), {
        children: utils.asTextNode(title, variant === 'dark' ? colors.white : colors.charcoalBlack)
      }))
    }))]
  });
};

exports.Tooltip = Tooltip;
