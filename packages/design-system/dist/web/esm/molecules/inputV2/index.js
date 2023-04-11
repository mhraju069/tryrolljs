import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useMemo } from 'react';
import { StyleSheet, View, TextInput } from 'react-native-web';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import { spacing } from '../../styles/spacing.js';
import { fontStyles } from '../../styles/text.js';
import { container } from '../../styles/container.js';
import { TypographyV2 } from '../../atoms/typographyV2/index.js';

var INPUT_BORDER_WIDTH = 1;
var INPUT_BORDER_RADIUS = 14;
var INPUT_LINE_HEIGHT = 20;
var styles = StyleSheet.create({
  count: {
    position: 'absolute',
    right: spacing[16],
    bottom: spacing[16]
  },
  inputContainer: {
    position: 'relative'
  },
  suffix: {
    position: 'absolute',
    right: spacing[16],
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  prefix: {
    position: 'absolute',
    left: spacing[16],
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
var InputV2 = forwardRef(function (_a, ref) {
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
    props = __rest(_a, ["style", "label", "maxLength", "error", "value", "info", "disabled", "counter", "prefix", "suffix"]);
  var _f = useState(false),
    isFocused = _f[0],
    setIsFocused = _f[1];
  var theme = useThemeV2();
  var backgroundColor = !disabled ? theme.base.transparent : theme.base.primary[10];
  var borderColor = useMemo(function () {
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
  return jsxs(View, {
    children: [label && jsx(TypographyV2, __assign({
      variant: "caption1",
      color: theme.text.black[100],
      style: [margin.mb8]
    }, {
      children: label
    })), jsxs(View, __assign({
      style: [styles.inputContainer]
    }, {
      children: [prefix && jsx(View, __assign({
        style: [styles.prefix]
      }, {
        children: prefix
      })), jsx(TextInput, __assign({
        ref: ref,
        style: [style, fontStyles.text3, styles.input, container.borderRadius, padding.pv16, prefix ? padding.pl48 : padding.pl16, suffix ? padding.pr48 : padding.pr16, {
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
      }, props)), suffix && jsx(View, __assign({
        style: [styles.suffix]
      }, {
        children: suffix
      })), counter && maxLength && jsx(View, __assign({
        style: [styles.count]
      }, {
        children: jsxs(TypographyV2, __assign({
          variant: "text4",
          color: theme.text.black[40]
        }, {
          children: [value.length, "/", maxLength]
        }))
      }))]
    })), (error || info) && jsx(TypographyV2, __assign({
      variant: "caption2",
      color: error ? theme.base.danger : theme.text.black[40],
      style: [margin.mt8]
    }, {
      children: error || info
    }))]
  });
});

export { InputV2 };
