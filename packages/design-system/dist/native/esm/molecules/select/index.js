import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { Pressable, View } from 'native-base';
import { useRef, useState, useMemo, useCallback } from 'react';
import { Platform } from 'react-native';
import SvgArrowDownCircle from '../../assets/svg/arrowDownCircle.js';
import { Body } from '../../atoms/typography/index.js';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import '../../atoms/button/index.js';
import { makeStyles } from '../../styles/utils.js';
import '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import '../../utils/web3.js';
import { Popover } from '../../atoms/popover/index.js';
import { Input } from '../../atoms/input/index.js';

var styles = makeStyles({
  input: {
    cursor: 'pointer'
  }
});
var Select = function (_a) {
  var style = _a.style,
    placeholder = _a.placeholder,
    _b = _a.options,
    options = _b === void 0 ? [] : _b,
    defaultValue = _a.defaultValue,
    onChange = _a.onChange;
  var inputRef = useRef(null);
  var theme = useTheme();
  var _c = useState(false),
    isOpen = _c[0],
    setIsOpen = _c[1];
  var _d = useState(defaultValue),
    value = _d[0],
    setValue = _d[1];
  var _e = useState(''),
    searchValue = _e[0],
    setSearchValue = _e[1];
  var selectedOption = options.find(function (option) {
    return option.value === value;
  });
  var inputValue = selectedOption ? selectedOption.name : searchValue;
  var filteredOptions = options.filter(function (option) {
    return option.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  var optionOnPress = useMemo(function () {
    return Platform.select({
      native: function () {
        var _a;
        return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      },
      web: function () {
        return setIsOpen(false);
      }
    });
  }, []);
  var handleChangeText = useCallback(function (text) {
    if (selectedOption) {
      var shouldClear = text = selectedOption.name.slice(0, selectedOption.name.length - 1);
      if (shouldClear) {
        setValue(undefined);
      }
      return;
    }
    setSearchValue(text);
  }, [selectedOption]);
  var renderReference = useCallback(function (_a) {
    var reference = _a.reference,
      getReferenceProps = _a.getReferenceProps;
    var referenceProps = getReferenceProps();
    var inputProps = Platform.select({
      web: referenceProps,
      native: {
        onFocus: function () {
          return setIsOpen(true);
        },
        onBlur: function () {
          return setIsOpen(false);
        },
        onLayout: referenceProps.onLayout
      }
    });
    return jsx(Input
    // @ts-ignore
    , __assign({
      // @ts-ignore
      ref: function (node) {
        // @ts-ignore
        inputRef.current = node;
        // @ts-ignore
        reference(node);
      },
      style: [styles.input, style],
      placeholder: placeholder,
      right: jsx(SvgArrowDownCircle, {}),
      value: inputValue,
      testID: "selectInput",
      onChangeText: handleChangeText
    }, inputProps));
  }, [placeholder, inputValue, handleChangeText, style]);
  return jsx(Popover, __assign({
    open: isOpen,
    onOpenChange: setIsOpen,
    renderReference: renderReference,
    openOnHover: false,
    matchReferenceWidth: true
  }, {
    children: filteredOptions.length > 0 ? filteredOptions.map(function (option) {
      return jsx(Pressable, __assign({
        onPress: function () {
          setSearchValue('');
          setValue(option.value);
          onChange === null || onChange === void 0 ? void 0 : onChange(option.value);
          optionOnPress === null || optionOnPress === void 0 ? void 0 : optionOnPress();
        },
        style: [padding.ph16, padding.pv8],
        _hover: {
          style: [padding.ph16, padding.pv8, {
            backgroundColor: theme.background.highlight
          }]
        },
        _focusVisible: {
          style: [padding.ph16, padding.pv8, {
            backgroundColor: theme.background.highlight
          }]
        },
        testID: "selectOption__".concat(option.value)
      }, {
        children: jsx(Body, {
          children: option.name
        })
      }), option.value);
    }) : jsx(View, __assign({
      style: [padding.ph16, padding.pv8]
    }, {
      children: jsx(Body, {
        children: "There is no options available"
      })
    }))
  }));
};

export { Select };
