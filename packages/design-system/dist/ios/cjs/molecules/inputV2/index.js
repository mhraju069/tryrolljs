'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactNative = require('react-native');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
var spacing = require('../../styles/spacing.js');
var text = require('../../styles/text.js');
var container = require('../../styles/container.js');
var index = require('../../atoms/typographyV2/index.js');

var INPUT_BORDER_WIDTH = 1;
var INPUT_BORDER_RADIUS = 14;
var INPUT_LINE_HEIGHT = 20;
var styles = reactNative.StyleSheet.create({
  count: {
    position: 'absolute',
    right: spacing.spacing[16],
    bottom: spacing.spacing[16]
  },
  inputContainer: {
    position: 'relative'
  },
  suffix: {
    position: 'absolute',
    right: spacing.spacing[16],
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  prefix: {
    position: 'absolute',
    left: spacing.spacing[16],
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: INPUT_BORDER_WIDTH,
    borderRadius: INPUT_BORDER_RADIUS,
    lineHeight: INPUT_LINE_HEIGHT
  }
});
var InputV2 = React.forwardRef(function (_a, ref) {
  var style = _a.style,
    label = _a.label,
    maxLength = _a.maxLength,
    error = _a.error,
    _b = _a.value,
    value = _b === void 0 ? '' : _b,
    _c = _a.info,
    info = _c === void 0 ? '' : _c,
    _d = _a.disabled,
    disabled = _d === void 0 ? false : _d,
    _e = _a.counter,
    counter = _e === void 0 ? false : _e,
    prefix = _a.prefix,
    suffix = _a.suffix,
    props = tslib_es6.__rest(_a, ["style", "label", "maxLength", "error", "value", "info", "disabled", "counter", "prefix", "suffix"]);
  var _f = React.useState(false),
    isFocused = _f[0],
    setIsFocused = _f[1];
  var theme = themeV2.useThemeV2();
  var backgroundColor = !disabled ? theme.base.transparent : theme.base.primary[10];
  var borderColor = React.useMemo(function () {
    if (disabled) {
      return theme.base.transparent;
    } else if (isFocused) {
      return theme.base.primary[100];
    } else if (error) {
      return theme.base.danger;
    } else {
      return theme.base.primary[20];
    }
  }, [disabled, isFocused, theme, error]);
  return jsxRuntime.jsxs(reactNative.View, {
    children: [label && jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
      variant: "caption1",
      color: theme.text.black[100],
      style: [margin.margin.mb8]
    }, {
      children: label
    })), jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
      style: [styles.inputContainer]
    }, {
      children: [prefix && jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
        style: [styles.prefix]
      }, {
        children: prefix
      })), jsxRuntime.jsx(reactNative.TextInput, tslib_es6.__assign({
        ref: ref,
        style: [style, text.fontStyles.text3, styles.input, container.container.borderRadius, padding.padding.pv16, prefix ? padding.padding.pl48 : padding.padding.pl16, suffix ? padding.padding.pr48 : padding.padding.pr16, {
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          color: theme.text.black[100]
        }],
        value: value,
        multiline: counter,
        onFocus: function () {
          return setIsFocused(true);
        },
        onBlur: function () {
          return setIsFocused(false);
        },
        editable: !disabled,
        placeholderTextColor: theme.text.black[40]
      }, props)), suffix && jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
        style: [styles.suffix]
      }, {
        children: suffix
      })), counter && maxLength && jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
        style: [styles.count]
      }, {
        children: jsxRuntime.jsxs(index.TypographyV2, tslib_es6.__assign({
          variant: "text4",
          color: theme.text.black[40]
        }, {
          children: [value.length, "/", maxLength]
        }))
      }))]
    })), (error || info) && jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
      variant: "caption2",
      color: error ? theme.base.danger : theme.text.black[40],
      style: [margin.margin.mt8]
    }, {
      children: error || info
    }))]
  });
});

exports.InputV2 = InputV2;
