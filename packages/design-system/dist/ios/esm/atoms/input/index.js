import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { View } from 'native-base';
import { forwardRef, useRef, useEffect } from 'react';
import { Animated, TextInput } from 'react-native';
import { charcoalBlack, grey } from '../../styles/colors.js';
import { makeStyles } from '../../styles/utils.js';
import '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';

var styles = makeStyles({
  input: {
    borderWidth: 1,
    borderColor: charcoalBlack
  },
  right: {
    position: 'absolute',
    right: 16,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  label: {
    color: grey,
    position: 'absolute',
    top: 0,
    left: 16,
    bottom: 0,
    justifyContent: 'center'
  }
});
var Input = forwardRef(function (_a, ref) {
  var style = _a.style,
    right = _a.right,
    placeholder = _a.placeholder,
    value = _a.value,
    _b = _a.editable,
    editable = _b === void 0 ? true : _b,
    onFocus = _a.onFocus,
    onBlur = _a.onBlur,
    rest = __rest(_a, ["style", "right", "placeholder", "value", "editable", "onFocus", "onBlur"]);
  var isEmpty = !value || value.length === 0;
  var labelTop = useRef(new Animated.Value(0)).current;
  var labelFontSize = useRef(new Animated.Value(14)).current;
  var scaleLabelDown = function () {
    Animated.parallel([Animated.timing(labelFontSize, {
      toValue: 10,
      duration: 250,
      useNativeDriver: false
    }), Animated.timing(labelTop, {
      toValue: -20,
      duration: 250,
      useNativeDriver: false
    })]).start();
  };
  var scaleLabelUp = function () {
    Animated.parallel([Animated.timing(labelFontSize, {
      toValue: 14,
      duration: 250,
      useNativeDriver: false
    }), Animated.timing(labelTop, {
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
  useEffect(function () {
    if (!isEmpty) {
      scaleLabelDown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEmpty]);
  return jsxs(View, {
    children: [jsx(TextInput, __assign({}, rest, {
      ref: ref,
      style: [style, styles.input, padding.ph16, placeholder ? padding.pt24 : undefined, padding.pv8, container.borderRadiusSM, container.fullWidth],
      value: value,
      onFocus: handleFocus,
      onBlur: handleBlur,
      editable: editable
    })), right && jsx(View, __assign({
      style: styles.right,
      pointerEvents: "none"
    }, {
      children: right
    })), placeholder && jsx(Animated.View, __assign({
      style: [styles.label, {
        top: labelTop
      }],
      pointerEvents: "none"
    }, {
      children: jsx(Animated.Text, __assign({
        style: {
          fontSize: labelFontSize
        }
      }, {
        children: placeholder
      }))
    }))]
  });
});

export { Input };
