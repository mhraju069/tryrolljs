'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var reactNative = require('react-native');
var React = require('react');
var arrowDownCircle = require('../../assets/svg/arrowDownCircle.js');
var index$3 = require('../../atoms/typography/index.js');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('../../atoms/button/index.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
var text = require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react-native-svg');
var index$2 = require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
var index = require('../../atoms/input/index.js');
var index$1 = require('../modal/index.js');

var modalBodyStyle = reactNative.Platform.select({
  web: container.container.flex1,
  default: undefined
});
var TokenSelect = function (_a) {
  var _b;
  var defaultValue = _a.defaultValue,
    options = _a.options,
    _c = _a.placeholder,
    placeholder = _c === void 0 ? 'Select a token' : _c,
    _d = _a.searchPlaceholder,
    searchPlaceholder = _d === void 0 ? 'Search name or paste address' : _d,
    _e = _a.notFoundText,
    notFoundText = _e === void 0 ? 'No results found' : _e,
    onChange = _a.onChange,
    style = _a.style;
  var theme$1 = theme.useTheme();
  var _f = React.useState(defaultValue),
    value = _f[0],
    setValue = _f[1];
  var selectedOption = options.find(function (option) {
    return option.value === value;
  });
  var inputValue = (_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.name) !== null && _b !== void 0 ? _b : '';
  var _g = React.useState(false),
    isModalOpen = _g[0],
    setIsModalOpen = _g[1];
  var _h = React.useState(''),
    searchInputValue = _h[0],
    setSearchInputValue = _h[1];
  var handleInputWrapperPress = React.useCallback(function () {
    setIsModalOpen(true);
  }, []);
  var handleModalClose = React.useCallback(function () {
    setIsModalOpen(false);
  }, []);
  var filteredOptions = React.useMemo(function () {
    return options.filter(function (option) {
      return option.name.toLowerCase().includes(searchInputValue.toLowerCase()) || option.address.toLowerCase().includes(searchInputValue.toLowerCase());
    });
  }, [options, searchInputValue]);
  var modalSize = nativeBase.useBreakpointValue({
    base: 'full',
    lg: 'md'
  });
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
      onPress: handleInputWrapperPress
    }, {
      children: jsxRuntime.jsx(index.Input, {
        style: style,
        placeholder: placeholder,
        right: jsxRuntime.jsx(arrowDownCircle, {}),
        value: inputValue,
        editable: false,
        pointerEvents: "none",
        testID: "tokenSelectInput"
      })
    })), jsxRuntime.jsx(index$1.Modal, tslib_es6.__assign({
      isOpen: isModalOpen,
      onClose: handleModalClose,
      size: modalSize,
      avoidKeyboard: true
    }, {
      children: jsxRuntime.jsxs(index$1.Modal.Content, {
        children: [jsxRuntime.jsx(index$1.Modal.CloseButton, {
          onPress: handleModalClose
        }), jsxRuntime.jsx(index$1.Modal.Header, {
          children: placeholder
        }), jsxRuntime.jsxs(index$1.Modal.Body, tslib_es6.__assign({
          style: modalBodyStyle
        }, {
          children: [jsxRuntime.jsx(index.Input, {
            value: searchInputValue,
            onChangeText: setSearchInputValue,
            placeholder: searchPlaceholder,
            testID: "tokenSelectSearchInput"
          }), jsxRuntime.jsx(nativeBase.Divider, {
            style: [margin.margin.mt16, margin.margin.mb8]
          }), filteredOptions.length > 0 ? jsxRuntime.jsx(reactNative.FlatList, {
            data: filteredOptions,
            renderItem: function (_a) {
              var option = _a.item;
              return jsxRuntime.jsxs(nativeBase.Pressable, tslib_es6.__assign({
                style: [container.container.row, container.container.alignCenter, padding.padding.p8],
                _hover: {
                  backgroundColor: theme$1.background.highlight
                },
                onPress: function () {
                  setValue(option.value);
                  onChange === null || onChange === void 0 ? void 0 : onChange(option.value);
                  handleModalClose();
                },
                testID: "tokenSelectOption__".concat(option.value)
              }, {
                children: [jsxRuntime.jsx(index$2.CircleImg, {
                  size: 32,
                  uri: option.logo
                }), jsxRuntime.jsx(index$3.SubHeader, tslib_es6.__assign({
                  style: margin.margin.ml16
                }, {
                  children: option.symbol
                })), jsxRuntime.jsx(index$3.Caption, tslib_es6.__assign({
                  style: margin.margin.mlauto
                }, {
                  children: option.name
                }))]
              }), option.value);
            }
          }) : jsxRuntime.jsx(index$3.Body, tslib_es6.__assign({
            style: text.text.center
          }, {
            children: notFoundText
          }))]
        }))]
      })
    }))]
  });
};

exports.TokenSelect = TokenSelect;
