import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { Link } from 'native-base';
import { useCallback } from 'react';
import { TypographyBase } from '../typography/index.js';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native-web';

var Anchor = function (_a) {
  var children = _a.children,
    href = _a.href,
    fontSize = _a.fontSize,
    _b = _a.target,
    target = _b === void 0 ? '_blank' : _b,
    onPress = _a.onPress;
  var theme = useTheme();
  var handlePress = useCallback(function (event) {
    if (onPress && !href) {
      event === null || event === void 0 ? void 0 : event.preventDefault();
      onPress(event);
    }
  }, [onPress, href]);
  return jsx(Link, __assign({
    href: href,
    isExternal: target === '_blank',
    onPress: handlePress
  }, {
    children: jsx(TypographyBase, __assign({
      color: theme.text.highlight,
      fontSize: fontSize
    }, {
      children: children
    }))
  }));
};

export { Anchor };
