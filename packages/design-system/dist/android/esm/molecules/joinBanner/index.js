import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { StyleSheet, View } from 'react-native';
import 'native-base';
import 'react';
import '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import '../../atoms/button/index.js';
import { ButtonV2 } from '../../atoms/buttonV2/index.js';
import '../../atoms/circleImg/index.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import { TypographyV2 } from '../../atoms/typographyV2/index.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import 'react-native-svg';

var MAX_BANNER_WIDTH = 200;
var CIRCLE_BACKGROUND_COLOR = '#FFE9DF';
var CIRCLE_SIZE = 80;
var styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative'
  },
  circle: {
    borderRadius: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    position: 'absolute',
    bottom: -32,
    right: -10,
    backgroundColor: CIRCLE_BACKGROUND_COLOR
  }
});
var JoinBanner = function (_a) {
  var title = _a.title,
    description = _a.description,
    action = _a.action;
  var theme = useThemeV2();
  return jsxs(View, __assign({
    style: [styles.container, padding.ph16, padding.pv16, container.borderRadius2XL, container.fullWidth, container.alignStart, {
      backgroundColor: theme.base.highlight2[40],
      maxWidth: MAX_BANNER_WIDTH
    }]
  }, {
    children: [jsx(View, {
      style: [styles.circle]
    }), jsx(TypographyV2, __assign({
      variant: "caption1",
      style: [margin.mb4]
    }, {
      children: title
    })), jsx(TypographyV2, __assign({
      variant: "text4",
      style: [margin.mb16]
    }, {
      children: description
    })), jsx(ButtonV2, {
      variant: "primary",
      size: "small",
      title: action.title,
      onPress: action.onPress
    })]
  }));
};

export { JoinBanner };
