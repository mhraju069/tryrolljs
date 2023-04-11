import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { View } from 'native-base';
import { useMemo } from 'react';
import { Body } from '../../atoms/typography/index.js';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native-web';
import '../../atoms/button/index.js';
import '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '@floating-ui/react-dom-interactions';
import '../../utils/web3.js';
import '../../atoms/input/index.js';

var Banner = function (_a) {
  var title = _a.title,
    action = _a.action,
    variant = _a.variant;
  var theme = useTheme();
  var colors = useMemo(function () {
    if (variant === 'warning') {
      return {
        background: theme.background.error,
        text: theme.text.error
      };
    }
    return {
      background: theme.text.highlight,
      text: theme.background.primary
    };
  }, [variant, theme]);
  return jsxs(View, __assign({
    style: [container.row, container.justifyCenter, padding.p16, {
      backgroundColor: colors.background
    }]
  }, {
    children: [jsxs(Body, __assign({
      weight: "bold",
      color: colors.text
    }, {
      children: [title, "\u00A0"]
    })), !!action && jsx(Body, __assign({
      onPress: action === null || action === void 0 ? void 0 : action.onPress,
      underline: true,
      color: colors.text
    }, {
      children: action.title
    }))]
  }));
};

export { Banner };
