import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useFloating, offset, flip, shift, size, autoUpdate, useInteractions, useHover, safePolygon, useFocus, FloatingPortal } from '@floating-ui/react-dom-interactions';
import { useState } from 'react';
import { View } from 'native-base';
import { darkNavy, white, charcoalBlack } from '../../styles/colors.js';
import 'react-native-web';
import '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import { ConditionalWrapper } from '../conditionalWrapper/index.js';
import { asTextNode } from './utils.js';

var wrapper = function (render) {
  return jsx(FloatingPortal, {
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
  var _d = useState(open),
    isOpen = _d[0],
    setIsOpen = _d[1];
  var _e = useFloating({
      placement: placement,
      open: open,
      onOpenChange: setIsOpen,
      middleware: [offset(8), flip(), shift(), size({
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
        return autoUpdate(reference_, floating_, update, {
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
  var _f = useInteractions([useHover(context, {
      handleClose: safePolygon(),
      move: false
    }), useFocus(context)]),
    getReferenceProps = _f.getReferenceProps,
    getFloatingProps = _f.getFloatingProps;
  return jsxs(Fragment, {
    children: [jsx("div", __assign({
      ref: reference
    }, getReferenceProps(), {
      children: children
    })), jsx(ConditionalWrapper, __assign({
      condition: renderInPortal,
      wrapper: wrapper
    }, {
      children: (isOpen || open) && jsx(View, __assign({
        style: [container.borderRadius, container.shadow, padding.ph16, padding.pv8,
        // @ts-ignore
        // eslint-disable-next-line react-native/no-inline-styles
        {
          zIndex: 999,
          top: y !== null && y !== void 0 ? y : 0,
          left: x !== null && x !== void 0 ? x : 0,
          backgroundColor: variant === 'dark' ? darkNavy : white,
          position: strategy
        }],
        ref: floating
      }, getFloatingProps(), {
        children: asTextNode(title, variant === 'dark' ? white : charcoalBlack)
      }))
    }))]
  });
};

export { Tooltip };
