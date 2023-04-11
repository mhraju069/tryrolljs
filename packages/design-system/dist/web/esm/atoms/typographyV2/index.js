import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useBreakpointValue } from 'native-base';
import { Text } from 'react-native-web';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import { responsiveFontStyles, fontStyles } from '../../styles/text.js';
import '../../styles/container.js';

var TypographyV2 = function (_a) {
  var children = _a.children,
    variant = _a.variant,
    style = _a.style,
    color = _a.color,
    numberOfLines = _a.numberOfLines,
    _b = _a.underline,
    underline = _b === void 0 ? false : _b,
    onPress = _a.onPress;
  var styles = useBreakpointValue({
    base: responsiveFontStyles,
    md: fontStyles
  });
  return jsx(Text, __assign({
    numberOfLines: numberOfLines,
    onPress: onPress,
    style: [styles[variant], style,
    // eslint-disable-next-line react-native/no-inline-styles
    {
      color: color,
      textDecorationLine: underline ? 'underline' : 'none'
    }]
  }, {
    children: children
  }));
};

export { TypographyV2 };
