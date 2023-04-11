import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useFloating, flip, shift } from '@floating-ui/react-native';
import { View } from 'native-base';
import { useCallback, useMemo } from 'react';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native';
import { useFloatingLayoutAndroidHandler } from '../../hooks/native.js';
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
    _b = _a.placement,
    placement = _b === void 0 ? 'bottom-start' : _b,
    rest = __rest(_a, ["children", "onOpenChange", "open", "renderReference", "placement"]);
  var theme = useTheme();
  var _c = useFloating({
      placement: placement,
      middleware: [flip(), shift()]
    }),
    x = _c.x,
    y = _c.y,
    reference = _c.reference,
    floating = _c.floating;
  var _d = useFloatingLayoutAndroidHandler({
      x: x,
      y: y
    }),
    xy = _d.xy,
    onLayout = _d.onLayout;
  var getReferenceProps = useCallback(function () {
    return {
      onPress: function () {
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(!open);
      },
      onLayout: onLayout
    };
  }, [onLayout, onOpenChange, open]);
  var referenceNode = useMemo(function () {
    return renderReference({
      reference: reference,
      getReferenceProps: getReferenceProps
    });
  }, [reference, renderReference, getReferenceProps]);
  return jsxs(Fragment, {
    children: [referenceNode, open && jsx(View, __assign({
      style: [container.positionAbsolute, container.borderRadiusSM, container.shadow,
      // @ts-ignore
      // eslint-disable-next-line react-native/no-inline-styles
      {
        zIndex: 999,
        top: xy[1],
        left: xy[0],
        backgroundColor: theme.background.primary
      }],
      ref: floating
    }, rest, {
      children: children
    }))]
  });
};

export { Popover };
