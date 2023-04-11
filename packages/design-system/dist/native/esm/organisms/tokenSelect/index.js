import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useBreakpointValue, Pressable, Divider } from 'native-base';
import { Platform, FlatList } from 'react-native';
import { useState, useCallback, useMemo } from 'react';
import SvgArrowDownCircle from '../../assets/svg/arrowDownCircle.js';
import { SubHeader, Caption, Body } from '../../atoms/typography/index.js';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import '../../atoms/button/index.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import { text } from '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import { CircleImg } from '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import { Input } from '../../atoms/input/index.js';
import { Modal } from '../modal/index.js';

var modalBodyStyle = Platform.select({
  web: container.flex1,
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
  var theme = useTheme();
  var _f = useState(defaultValue),
    value = _f[0],
    setValue = _f[1];
  var selectedOption = options.find(function (option) {
    return option.value === value;
  });
  var inputValue = (_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.name) !== null && _b !== void 0 ? _b : '';
  var _g = useState(false),
    isModalOpen = _g[0],
    setIsModalOpen = _g[1];
  var _h = useState(''),
    searchInputValue = _h[0],
    setSearchInputValue = _h[1];
  var handleInputWrapperPress = useCallback(function () {
    setIsModalOpen(true);
  }, []);
  var handleModalClose = useCallback(function () {
    setIsModalOpen(false);
  }, []);
  var filteredOptions = useMemo(function () {
    return options.filter(function (option) {
      return option.name.toLowerCase().includes(searchInputValue.toLowerCase()) || option.address.toLowerCase().includes(searchInputValue.toLowerCase());
    });
  }, [options, searchInputValue]);
  var modalSize = useBreakpointValue({
    base: 'full',
    lg: 'md'
  });
  return jsxs(Fragment, {
    children: [jsx(Pressable, __assign({
      onPress: handleInputWrapperPress
    }, {
      children: jsx(Input, {
        style: style,
        placeholder: placeholder,
        right: jsx(SvgArrowDownCircle, {}),
        value: inputValue,
        editable: false,
        pointerEvents: "none",
        testID: "tokenSelectInput"
      })
    })), jsx(Modal, __assign({
      isOpen: isModalOpen,
      onClose: handleModalClose,
      size: modalSize,
      avoidKeyboard: true
    }, {
      children: jsxs(Modal.Content, {
        children: [jsx(Modal.CloseButton, {
          onPress: handleModalClose
        }), jsx(Modal.Header, {
          children: placeholder
        }), jsxs(Modal.Body, __assign({
          style: modalBodyStyle
        }, {
          children: [jsx(Input, {
            value: searchInputValue,
            onChangeText: setSearchInputValue,
            placeholder: searchPlaceholder,
            testID: "tokenSelectSearchInput"
          }), jsx(Divider, {
            style: [margin.mt16, margin.mb8]
          }), filteredOptions.length > 0 ? jsx(FlatList, {
            data: filteredOptions,
            renderItem: function (_a) {
              var option = _a.item;
              return jsxs(Pressable, __assign({
                style: [container.row, container.alignCenter, padding.p8],
                _hover: {
                  backgroundColor: theme.background.highlight
                },
                onPress: function () {
                  setValue(option.value);
                  onChange === null || onChange === void 0 ? void 0 : onChange(option.value);
                  handleModalClose();
                },
                testID: "tokenSelectOption__".concat(option.value)
              }, {
                children: [jsx(CircleImg, {
                  size: 32,
                  uri: option.logo
                }), jsx(SubHeader, __assign({
                  style: margin.ml16
                }, {
                  children: option.symbol
                })), jsx(Caption, __assign({
                  style: margin.mlauto
                }, {
                  children: option.name
                }))]
              }), option.value);
            }
          }) : jsx(Body, __assign({
            style: text.center
          }, {
            children: notFoundText
          }))]
        }))]
      })
    }))]
  });
};

export { TokenSelect };
