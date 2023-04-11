import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { View } from 'react-native-web';
import 'react';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import { TypographyV2 } from '../typographyV2/index.js';

var InputV2TextSuffix = function (_a) {
  var title = _a.title,
    description = _a.description;
  var theme = useThemeV2();
  return jsxs(View, __assign({
    style: [container.alignEnd]
  }, {
    children: [jsx(TypographyV2, __assign({
      variant: "caption1",
      color: theme.text.black[100]
    }, {
      children: title
    })), jsx(TypographyV2, __assign({
      variant: "caption2",
      color: theme.text.black[40]
    }, {
      children: description
    }))]
  }));
};

export { InputV2TextSuffix };
