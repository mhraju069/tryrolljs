import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useFloating, shift } from '@floating-ui/react-native';
import { useState, useCallback } from 'react';
import { View, Pressable } from 'native-base';
import { Platform } from 'react-native';
import { darkNavy, white, charcoalBlack } from '../../styles/colors.js';
import { makeStyles } from '../../styles/utils.js';
import '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import { useFloatingLayoutAndroidHandler } from '../../hooks/native.js';
import { asTextNode } from './utils.js';

var styles = makeStyles({
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
  var _c = useState(open),
    isOpen = _c[0],
    setIsOpen = _c[1];
  var _d = useFloating({
      placement: placement,
      middleware: [shift()]
    }),
    x = _d.x,
    y = _d.y,
    reference = _d.reference,
    floating = _d.floating;
  var _e = useFloatingLayoutAndroidHandler({
      x: x,
      y: y
    }),
    xy = _e.xy,
    onLayout = _e.onLayout;
  var handlePress = useCallback(function () {
    setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });
  }, []);
  return jsxs(View, {
    children: [jsx(Pressable, __assign({
      onPress: handlePress
    }, {
      children: jsx(View, __assign({
        ref: reference,
        onLayout: Platform.select({
          android: onLayout,
          default: undefined
        })
      }, {
        children: asTextNode(children)
      }))
    })), isOpen && jsx(View, __assign({
      ref: floating,
      style: [styles.tooltip, container.borderRadius, container.shadow, padding.ph16, padding.pv8, {
        top: xy[1],
        left: xy[0],
        backgroundColor: variant === 'dark' ? darkNavy : white
      }]
    }, {
      children: asTextNode(title, variant === 'dark' ? white : charcoalBlack)
    }))]
  });
};

export { Tooltip };
