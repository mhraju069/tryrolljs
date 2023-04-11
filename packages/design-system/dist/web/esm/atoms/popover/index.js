import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useFloating, flip, shift, size, autoUpdate, useInteractions, useHover, safePolygon, useFocus } from '@floating-ui/react-dom-interactions';
import { View } from 'native-base';
import { useTheme } from '../../hooks/theme.js';
import 'react';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native-web';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';

var Popover = function (_a) {
  var children = _a.children,
    onOpenChange = _a.onOpenChange,
    open = _a.open,
    renderReference = _a.renderReference,
    openOnHover = _a.openOnHover,
    _b = _a.placement,
    placement = _b === void 0 ? 'bottom-start' : _b,
    matchReferenceWidth = _a.matchReferenceWidth,
    rest = __rest(_a, ["children", "onOpenChange", "open", "renderReference", "openOnHover", "placement", "matchReferenceWidth"]);
  var theme = useTheme();
  var _c = useFloating({
      placement: placement,
      open: open,
      onOpenChange: onOpenChange,
      middleware: [flip(), shift(), size({
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
        return autoUpdate(reference_, floating_, update, {
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
  var _d = useInteractions([useHover(context, {
      handleClose: safePolygon(),
      move: false,
      enabled: openOnHover
    }), useFocus(context)]),
    getReferenceProps = _d.getReferenceProps,
    getFloatingProps = _d.getFloatingProps;
  return jsxs(Fragment, {
    children: [renderReference({
      reference: reference,
      getReferenceProps: getReferenceProps
    }), open && jsx(View, __assign({
      style: [container.borderRadiusSM, container.shadow,
      // @ts-ignore
      // eslint-disable-next-line react-native/no-inline-styles
      {
        zIndex: 999,
        top: y !== null && y !== void 0 ? y : 0,
        left: x !== null && x !== void 0 ? x : 0,
        backgroundColor: theme.background.primary,
        position: strategy
      }],
      ref: floating
    }, getFloatingProps(), rest, {
      children: children
    }))]
  });
};

export { Popover };
