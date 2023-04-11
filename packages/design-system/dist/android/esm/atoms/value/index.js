import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { View } from 'react-native';
import 'native-base';
import 'react';
import { Body } from '../typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import '../button/index.js';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';
import 'react-native-svg';
import '../circleImg/index.js';
import '../toast/index.js';
import { Tooltip } from '../tooltip/index.js';
import { commafy } from '../../utils/formatters.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../input/index.js';

var DEFAULT_MAX_DIGITS = 4;
var maxDigitsStr = function (s, digits) {
  if (s === void 0) {
    s = '';
  }
  var _a = s.split('.'),
    n = _a[0],
    d = _a[1];
  if (d) {
    return d.length > digits ? "".concat(n, ".").concat(d.substring(0, digits)) : "".concat(n, ".").concat(d);
  }
  return "".concat(n, ".").concat(d);
};
var Value = function (_a) {
  var displayValue = _a.displayValue,
    _b = _a.maxDigits,
    maxDigits = _b === void 0 ? DEFAULT_MAX_DIGITS : _b,
    style = _a.style,
    renderValue = _a.renderValue;
  var defaultVal = maxDigitsStr(displayValue, maxDigits);
  return jsx(Tooltip, __assign({
    placement: "top",
    title: displayValue
  }, {
    children: jsx(View, {
      children: renderValue ? renderValue(commafy(displayValue, maxDigits)) : jsx(Body, __assign({
        style: style
      }, {
        children: commafy(defaultVal, maxDigits)
      }))
    })
  }));
};

export { DEFAULT_MAX_DIGITS, Value };
