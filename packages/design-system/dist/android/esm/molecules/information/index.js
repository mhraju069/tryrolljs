import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { View, useBreakpointValue } from 'native-base';
import { Children, cloneElement } from 'react';
import { SubHeader } from '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native';
import '../../atoms/button/index.js';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';

var Information = function (_a) {
  var children = _a.children;
  var childrenCount = Children.count(children);
  return jsx(View, {
    children: Children.map(children, function (child, index) {
      var isLast = index + 1 === childrenCount;
      return child ? cloneElement(child, __assign(__assign({}, child.props), {
        style: [child.props.style, !isLast && margin.mb8]
      })) : child;
    })
  });
};
var InformationItem = function (_a) {
  var label = _a.label,
    value = _a.value,
    style = _a.style;
  var responsiveStyle = useBreakpointValue({
    base: undefined,
    lg: container.row
  });
  var labelResponsiveStyle = useBreakpointValue({
    base: margin.mb4,
    lg: undefined
  });
  return jsxs(View, __assign({
    style: [responsiveStyle, container.justifySpaceBetween, style]
  }, {
    children: [jsx(SubHeader, __assign({
      style: labelResponsiveStyle,
      weight: "semiBold"
    }, {
      children: label
    })), value]
  }));
};
Information.Item = InformationItem;

export { Information };
