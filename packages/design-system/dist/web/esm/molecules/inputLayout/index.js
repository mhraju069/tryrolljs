import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useBreakpointValue } from 'native-base';
import { StyleSheet, Platform, View } from 'react-native-web';
import { TypographyV2 } from '../../atoms/typographyV2/index.js';
import 'react';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';

var CONTENT_MAX_WIDTH = 448;
var INPUT_MAX_WIDTH = 544;
var styles = StyleSheet.create({
  inputsContainer: {
    maxWidth: INPUT_MAX_WIDTH,
    flex: Platform.OS === 'web' ? 1 : undefined
  }
});
var InputLayout = function (_a) {
  var title = _a.title,
    description = _a.description,
    children = _a.children;
  var theme = useThemeV2();
  var containerResponsiveStyles = useBreakpointValue({
    md: [container.row, container.justifySpaceBetween, container.alignStart]
  });
  var contentResponsiveStyles = useBreakpointValue({
    base: [margin.mb16],
    md: [margin.mr24]
  });
  return jsxs(View, __assign({
    style: [containerResponsiveStyles]
  }, {
    children: [jsxs(View, __assign({
      style: [contentResponsiveStyles, {
        maxWidth: CONTENT_MAX_WIDTH
      }]
    }, {
      children: [jsx(TypographyV2, __assign({
        variant: "sub3",
        style: [margin.mb8],
        color: theme.text.black[100]
      }, {
        children: title
      })), typeof description === 'string' ? jsx(TypographyV2, __assign({
        variant: "text3",
        color: theme.text.black[80]
      }, {
        children: description
      })) : description]
    })), jsx(View, __assign({
      style: [styles.inputsContainer, {
        maxWidth: INPUT_MAX_WIDTH
      }]
    }, {
      children: children
    }))]
  }));
};

export { InputLayout };
