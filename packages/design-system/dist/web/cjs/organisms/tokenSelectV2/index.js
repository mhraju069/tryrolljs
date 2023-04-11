'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native-web');
require('../../atoms/button/index.js');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');
var index$1 = require('../../atoms/icon/index.js');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('@floating-ui/react-dom-interactions');
require('../../utils/web3.js');
require('../../atoms/input/index.js');
var index$2 = require('../modal/index.js');
require('../../molecules/accountDropdown/index.js');
require('../../molecules/collapsableView/index.js');
require('../../molecules/connectWeb3Options/index.js');
require('../../molecules/copyLink/index.js');
require('react-native-svg');
require('../../molecules/footerV2/index.js');
require('../../molecules/sidebar/mobile.js');
require('../../molecules/header/desktop.js');
require('../../molecules/sidebar/desktop.js');
require('../../molecules/joinBanner/index.js');
require('@web3-react/injected-connector');
require('@web3-react/portis-connector');
require('@web3-react/fortmatic-connector');
require('@web3-react/walletconnect-connector');
require('../../molecules/information/index.js');
require('../../molecules/select/index.js');
require('../../molecules/inputLayout/index.js');
var index = require('../../molecules/inputV2/index.js');
var index$3 = require('../../molecules/tokenSelectContentV2/index.js');

var TokenSelectV2 = function (_a) {
  var _b;
  var defaultValue = _a.defaultValue,
    _c = _a.placeholder,
    placeholder = _c === void 0 ? 'Select a token' : _c,
    style = _a.style,
    options = _a.options,
    onChange = _a.onChange,
    onClose = _a.onClose,
    props = tslib_es6.__rest(_a, ["defaultValue", "placeholder", "style", "options", "onChange", "onClose"]);
  var _d = React.useState(defaultValue),
    value = _d[0],
    setValue = _d[1];
  var selectedOption = options.find(function (option) {
    return option.value === value;
  });
  var inputValue = (_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.name) !== null && _b !== void 0 ? _b : '';
  var _e = React.useState(false),
    isModalOpen = _e[0],
    setIsModalOpen = _e[1];
  var handleInputWrapperPress = React.useCallback(function () {
    setIsModalOpen(true);
  }, []);
  var handleModalClose = React.useCallback(function () {
    onClose === null || onClose === void 0 ? void 0 : onClose();
    setIsModalOpen(false);
  }, [onClose]);
  var handleChange = React.useCallback(function (newValue) {
    setValue(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    handleModalClose();
  }, [onChange, handleModalClose]);
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
      onPress: handleInputWrapperPress
    }, {
      children: jsxRuntime.jsx(index.InputV2, {
        style: style,
        defaultValue: defaultValue,
        onChangeText: function () {
          return null;
        },
        placeholder: placeholder,
        suffix: jsxRuntime.jsx(index$1.Icon, {
          variant: "arrowDown2"
        }),
        value: inputValue,
        editable: false,
        pointerEvents: "none",
        testID: "tokenSelectInput"
      })
    })), jsxRuntime.jsx(index$2.Modal, tslib_es6.__assign({
      isOpen: isModalOpen,
      onClose: handleModalClose,
      avoidKeyboard: true,
      testID: "tokenSelectModal"
    }, {
      children: jsxRuntime.jsx(index$3.TokenSelectContentV2, tslib_es6.__assign({}, props, {
        closable: true,
        options: options,
        placeholder: placeholder,
        onChange: handleChange,
        onClose: handleModalClose
      }))
    }))]
  });
};

exports.TokenSelectV2 = TokenSelectV2;
