'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
require('native-base');
require('react');
var index = require('../typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('../button/index.js');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');
require('react-native-svg');
require('../circleImg/index.js');
require('../toast/index.js');
var index_native = require('../tooltip/index.js');
var formatters = require('../../utils/formatters.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../input/index.js');

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
  return jsxRuntime.jsx(index_native.Tooltip, tslib_es6.__assign({
    placement: "top",
    title: displayValue
  }, {
    children: jsxRuntime.jsx(reactNative.View, {
      children: renderValue ? renderValue(formatters.commafy(displayValue, maxDigits)) : jsxRuntime.jsx(index.Body, tslib_es6.__assign({
        style: style
      }, {
        children: formatters.commafy(defaultVal, maxDigits)
      }))
    })
  }));
};

exports.DEFAULT_MAX_DIGITS = DEFAULT_MAX_DIGITS;
exports.Value = Value;
