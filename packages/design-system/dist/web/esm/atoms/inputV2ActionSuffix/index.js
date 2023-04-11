import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import 'react';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import 'react-native-web';
import { TypographyV2 } from '../typographyV2/index.js';

var InputV2ActionSuffix = function (_a) {
  var title = _a.title,
    onPress = _a.onPress,
    color = _a.color,
    _b = _a.disabled,
    disabled = _b === void 0 ? false : _b;
  var theme = useThemeV2();
  var getColor = function () {
    if (color) {
      return color;
    }
    return disabled ? theme.text.black[40] : theme.text.black[100];
  };
  return jsx(TypographyV2, __assign({
    onPress: onPress,
    variant: "caption1",
    color: getColor()
  }, {
    children: title
  }));
};

export { InputV2ActionSuffix };
