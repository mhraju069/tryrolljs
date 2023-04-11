import { __assign, __spreadArray } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useBreakpointValue, Pressable } from 'native-base';
import { View } from 'react-native-web';
import 'react';
import '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import '../../atoms/button/index.js';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import { TypographyV2 } from '../../atoms/typographyV2/index.js';
import { CircleImg } from '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '@floating-ui/react-dom-interactions';
import '../../utils/web3.js';
import '../../atoms/input/index.js';

var TokenAppearance = function (_a) {
  var logo = _a.logo,
    name = _a.name,
    symbol = _a.symbol,
    action = _a.action;
  var theme = useThemeV2();
  var isMobile = useBreakpointValue({
    base: true,
    xl: false
  });
  var circleSize = useBreakpointValue({
    base: 24,
    xl: 32
  });
  var infoContainerStyles = useBreakpointValue({
    base: [container.row, container.alignCenter],
    xl: [container.alignCenter]
  });
  var containerStyles = useBreakpointValue({
    base: [container.row, container.justifySpaceBetween, container.alignCenter],
    xl: []
  });
  var symbolStyles = useBreakpointValue({
    base: [margin.ml16],
    xl: [margin.mb8]
  });
  return jsxs(View, __assign({
    style: __spreadArray([container.alignCenter, container.fullWidth], containerStyles, true)
  }, {
    children: [jsxs(View, __assign({
      style: infoContainerStyles
    }, {
      children: [jsx(CircleImg, {
        uri: logo,
        size: circleSize
      }), !isMobile && jsx(TypographyV2, __assign({
        variant: "caption2",
        color: theme.text.black[100],
        style: [margin.mt4]
      }, {
        children: name
      })), jsxs(TypographyV2, __assign({
        variant: "caption2",
        color: theme.text.black[30],
        style: symbolStyles
      }, {
        children: ["$", symbol]
      }))]
    })), jsx(Pressable, __assign({
      onPress: action.onPress
    }, {
      children: jsx(TypographyV2, __assign({
        variant: "caption2",
        color: theme.base.highlight1
      }, {
        children: action.title
      }))
    }))]
  }));
};

export { TokenAppearance };
