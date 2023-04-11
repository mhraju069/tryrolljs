import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { View } from 'react-native';
import 'native-base';
import 'react';
import { LargeHeader, Body } from '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import { Button } from '../../atoms/button/index.js';
import { green, crimson, orange } from '../../styles/colors.js';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import { text } from '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';

var TEXT_COLOR_MAP = {
  success: green,
  error: crimson,
  warn: orange
};
var Result = function (_a) {
  var title = _a.title,
    description = _a.description,
    _b = _a.actions,
    actions = _b === void 0 ? [] : _b,
    layout = _a.layout,
    _c = _a.variant,
    variant = _c === void 0 ? 'success' : _c;
  var isVertical = layout === 'vertical';
  return jsxs(View, __assign({
    style: [container.center]
  }, {
    children: [jsx(LargeHeader, __assign({
      color: TEXT_COLOR_MAP[variant],
      style: margin.mb8
    }, {
      children: title
    })), jsx(Body, __assign({
      style: text.center
    }, {
      children: description
    })), actions.length > 0 && jsxs(View, __assign({
      style: [margin.mt48, container.fullWidth, container.center, !isVertical && container.row]
    }, {
      children: [actions[0] && jsx(Button, {
        variant: "primary",
        inverted: true,
        title: actions[0].title,
        onPress: actions[0].onPress,
        style: [isVertical ? margin.mb24 : margin.mr24, isVertical ? container.fullWidth : container.flex1]
      }), actions[1] && jsx(Button, {
        variant: "primary",
        title: actions[1].title,
        onPress: actions[1].onPress,
        style: [isVertical ? container.fullWidth : container.flex1]
      })]
    }))]
  }));
};

export { Result, TEXT_COLOR_MAP, Result as default };
