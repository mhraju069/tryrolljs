'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
var reactNative = require('react-native');
var arrowDownCircle = require('../../assets/svg/arrowDownCircle.js');
var index$1 = require('../../atoms/typography/index.js');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('../../atoms/button/index.js');
var utils = require('../../styles/utils.js');
require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
require('../../utils/web3.js');
var index_native = require('../../atoms/popover/index.js');
var index = require('../../atoms/input/index.js');

var styles = utils.makeStyles({
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
  var inputRef = React.useRef(null);
  var theme$1 = theme.useTheme();
  var _c = React.useState(false),
    isOpen = _c[0],
    setIsOpen = _c[1];
  var _d = React.useState(defaultValue),
    value = _d[0],
    setValue = _d[1];
  var _e = React.useState(''),
    searchValue = _e[0],
    setSearchValue = _e[1];
  var selectedOption = options.find(function (option) {
    return option.value === value;
  });
  var inputValue = selectedOption ? selectedOption.name : searchValue;
  var filteredOptions = options.filter(function (option) {
    return option.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  var optionOnPress = React.useMemo(function () {
    return reactNative.Platform.select({
      native: function () {
        var _a;
        return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      },
      web: function () {
        return setIsOpen(false);
      }
    });
  }, []);
  var handleChangeText = React.useCallback(function (text) {
    if (selectedOption) {
      var shouldClear = text = selectedOption.name.slice(0, selectedOption.name.length - 1);
      if (shouldClear) {
        setValue(undefined);
      }
      return;
    }
    setSearchValue(text);
  }, [selectedOption]);
  var renderReference = React.useCallback(function (_a) {
    var reference = _a.reference,
      getReferenceProps = _a.getReferenceProps;
    var referenceProps = getReferenceProps();
    var inputProps = reactNative.Platform.select({
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
    return jsxRuntime.jsx(index.Input
    // @ts-ignore
    , tslib_es6.__assign({
      // @ts-ignore
      ref: function (node) {
        // @ts-ignore
        inputRef.current = node;
        // @ts-ignore
        reference(node);
      },
      style: [styles.input, style],
      placeholder: placeholder,
      right: jsxRuntime.jsx(arrowDownCircle, {}),
      value: inputValue,
      testID: "selectInput",
      onChangeText: handleChangeText
    }, inputProps));
  }, [placeholder, inputValue, handleChangeText, style]);
  return jsxRuntime.jsx(index_native.Popover, tslib_es6.__assign({
    open: isOpen,
    onOpenChange: setIsOpen,
    renderReference: renderReference,
    openOnHover: false,
    matchReferenceWidth: true
  }, {
    children: filteredOptions.length > 0 ? filteredOptions.map(function (option) {
      return jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
        onPress: function () {
          setSearchValue('');
          setValue(option.value);
          onChange === null || onChange === void 0 ? void 0 : onChange(option.value);
          optionOnPress === null || optionOnPress === void 0 ? void 0 : optionOnPress();
        },
        style: [padding.padding.ph16, padding.padding.pv8],
        _hover: {
          style: [padding.padding.ph16, padding.padding.pv8, {
            backgroundColor: theme$1.background.highlight
          }]
        },
        _focusVisible: {
          style: [padding.padding.ph16, padding.padding.pv8, {
            backgroundColor: theme$1.background.highlight
          }]
        },
        testID: "selectOption__".concat(option.value)
      }, {
        children: jsxRuntime.jsx(index$1.Body, {
          children: option.name
        })
      }), option.value);
    }) : jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
      style: [padding.padding.ph16, padding.padding.pv8]
    }, {
      children: jsxRuntime.jsx(index$1.Body, {
        children: "There is no options available"
      })
    }))
  }));
};

exports.Select = Select;
