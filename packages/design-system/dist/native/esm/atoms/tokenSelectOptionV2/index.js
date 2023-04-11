import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { Pressable, View } from 'react-native';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import { CircleImg } from '../circleImg/index.js';
import { TypographyV2 } from '../typographyV2/index.js';

var TokenSelectOptionV2 = function (_a) {
  var value = _a.value,
    name = _a.name,
    symbol = _a.symbol,
    logo = _a.logo,
    onChange = _a.onChange,
    onClose = _a.onClose;
  var theme = useThemeV2();
  var handlePressOption = useCallback(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [onChange, value, onClose]);
  return jsxs(Pressable, __assign({
    style: [container.row, container.justifySpaceBetween, container.fullWidth, container.alignCenter, padding.p8],
    onPress: handlePressOption,
    testID: "tokenSelectOption__".concat(value)
  }, {
    children: [jsxs(View, __assign({
      style: [container.row, container.alignCenter]
    }, {
      children: [jsx(CircleImg, {
        size: 32,
        uri: logo
      }), jsx(TypographyV2, __assign({
        variant: "caption1",
        style: margin.ml16,
        color: theme.text.black[100]
      }, {
        children: symbol
      }))]
    })), jsx(TypographyV2, __assign({
      variant: "text3",
      color: theme.text.black[80]
    }, {
      children: name
    }))]
  }), value);
};

export { TokenSelectOptionV2 };
