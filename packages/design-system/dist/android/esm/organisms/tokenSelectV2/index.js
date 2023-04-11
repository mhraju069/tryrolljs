import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Pressable } from 'native-base';
import { useState, useCallback } from 'react';
import '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native';
import '../../atoms/button/index.js';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';
import { Icon } from '../../atoms/icon/index.js';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import { Modal } from '../modal/index.js';
import '../../molecules/accountDropdown/index.js';
import '../../molecules/collapsableView/index.js';
import '../../molecules/connectWeb3Options/index.js';
import '../../molecules/copyLink/index.js';
import 'react-native-svg';
import '../../molecules/footerV2/index.js';
import '../../molecules/sidebar/mobile.js';
import '../../molecules/header/desktop.js';
import '../../molecules/sidebar/desktop.js';
import '../../molecules/joinBanner/index.js';
import '@web3-react/injected-connector';
import '@web3-react/portis-connector';
import '@web3-react/fortmatic-connector';
import '@web3-react/walletconnect-connector';
import '../../molecules/information/index.js';
import '../../molecules/select/index.js';
import '../../molecules/inputLayout/index.js';
import { InputV2 } from '../../molecules/inputV2/index.js';
import { TokenSelectContentV2 } from '../../molecules/tokenSelectContentV2/index.js';

var TokenSelectV2 = function (_a) {
  var _b;
  var defaultValue = _a.defaultValue,
    _c = _a.placeholder,
    placeholder = _c === void 0 ? 'Select a token' : _c,
    style = _a.style,
    options = _a.options,
    onChange = _a.onChange,
    onClose = _a.onClose,
    props = __rest(_a, ["defaultValue", "placeholder", "style", "options", "onChange", "onClose"]);
  var _d = useState(defaultValue),
    value = _d[0],
    setValue = _d[1];
  var selectedOption = options.find(function (option) {
    return option.value === value;
  });
  var inputValue = (_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.name) !== null && _b !== void 0 ? _b : '';
  var _e = useState(false),
    isModalOpen = _e[0],
    setIsModalOpen = _e[1];
  var handleInputWrapperPress = useCallback(function () {
    setIsModalOpen(true);
  }, []);
  var handleModalClose = useCallback(function () {
    onClose === null || onClose === void 0 ? void 0 : onClose();
    setIsModalOpen(false);
  }, [onClose]);
  var handleChange = useCallback(function (newValue) {
    setValue(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    handleModalClose();
  }, [onChange, handleModalClose]);
  return jsxs(Fragment, {
    children: [jsx(Pressable, __assign({
      onPress: handleInputWrapperPress
    }, {
      children: jsx(InputV2, {
        style: style,
        defaultValue: defaultValue,
        onChangeText: function () {
          return null;
        },
        placeholder: placeholder,
        suffix: jsx(Icon, {
          variant: "arrowDown2"
        }),
        value: inputValue,
        editable: false,
        pointerEvents: "none",
        testID: "tokenSelectInput"
      })
    })), jsx(Modal, __assign({
      isOpen: isModalOpen,
      onClose: handleModalClose,
      avoidKeyboard: true,
      testID: "tokenSelectModal"
    }, {
      children: jsx(TokenSelectContentV2, __assign({}, props, {
        closable: true,
        options: options,
        placeholder: placeholder,
        onChange: handleChange,
        onClose: handleModalClose
      }))
    }))]
  });
};

export { TokenSelectV2 };
