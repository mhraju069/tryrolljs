'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
var reactNativeWeb = require('react-native-web');
var colors = require('../../styles/colors.js');
var utils = require('../../styles/utils.js');
require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');

var styles = utils.makeStyles({
  input: {
    borderWidth: 1,
    borderColor: colors.charcoalBlack
  },
  right: {
    position: 'absolute',
    right: 16,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  label: {
    color: colors.grey,
    position: 'absolute',
    top: 0,
    left: 16,
    bottom: 0,
    justifyContent: 'center'
  }
});
var Input = React.forwardRef(function (_a, ref) {
  var style = _a.style,
    right = _a.right,
    placeholder = _a.placeholder,
    value = _a.value,
    _b = _a.editable,
    editable = _b === void 0 ? true : _b,
    onFocus = _a.onFocus,
    onBlur = _a.onBlur,
    rest = tslib_es6.__rest(_a, ["style", "right", "placeholder", "value", "editable", "onFocus", "onBlur"]);
  var isEmpty = !value || value.length === 0;
  var labelTop = React.useRef(new reactNativeWeb.Animated.Value(0)).current;
  var labelFontSize = React.useRef(new reactNativeWeb.Animated.Value(14)).current;
  var scaleLabelDown = function () {
    reactNativeWeb.Animated.parallel([reactNativeWeb.Animated.timing(labelFontSize, {
      toValue: 10,
      duration: 250,
      useNativeDriver: false
    }), reactNativeWeb.Animated.timing(labelTop, {
      toValue: -20,
      duration: 250,
      useNativeDriver: false
    })]).start();
  };
  var scaleLabelUp = function () {
    reactNativeWeb.Animated.parallel([reactNativeWeb.Animated.timing(labelFontSize, {
      toValue: 14,
      duration: 250,
      useNativeDriver: false
    }), reactNativeWeb.Animated.timing(labelTop, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false
    })]).start();
  };
  var handleFocus = function (event) {
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    if (editable) {
      scaleLabelDown();
    }
  };
  var handleBlur = function (event) {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    if (isEmpty) {
      scaleLabelUp();
    }
  };
  React.useEffect(function () {
    if (!isEmpty) {
      scaleLabelDown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEmpty]);
  return jsxRuntime.jsxs(nativeBase.View, {
    children: [jsxRuntime.jsx(reactNativeWeb.TextInput, tslib_es6.__assign({}, rest, {
      ref: ref,
      style: [style, styles.input, padding.padding.ph16, placeholder ? padding.padding.pt24 : undefined, padding.padding.pv8, container.container.borderRadiusSM, container.container.fullWidth],
      value: value,
      onFocus: handleFocus,
      onBlur: handleBlur,
      editable: editable
    })), right && jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
      style: styles.right,
      pointerEvents: "none"
    }, {
      children: right
    })), placeholder && jsxRuntime.jsx(reactNativeWeb.Animated.View, tslib_es6.__assign({
      style: [styles.label, {
        top: labelTop
      }],
      pointerEvents: "none"
    }, {
      children: jsxRuntime.jsx(reactNativeWeb.Animated.Text, tslib_es6.__assign({
        style: {
          fontSize: labelFontSize
        }
      }, {
        children: placeholder
      }))
    }))]
  });
});

exports.Input = Input;
