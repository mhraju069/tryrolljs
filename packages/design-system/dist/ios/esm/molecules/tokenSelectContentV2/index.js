import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Pressable, Divider } from 'native-base';
import { StyleSheet, View, FlatList } from 'react-native';
import { useState, useMemo, useEffect } from 'react';
import '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import '../../atoms/button/index.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import { Icon } from '../../atoms/icon/index.js';
import { Spinner } from '../../atoms/spinner/index.js';
import { TypographyV2 } from '../../atoms/typographyV2/index.js';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import { isAddress } from '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import '../accountDropdown/index.js';
import '../collapsableView/index.js';
import '../connectWeb3Options/index.js';
import '../copyLink/index.js';
import 'react-native-svg';
import '../footerV2/index.js';
import '../sidebar/mobile.js';
import '../header/desktop.js';
import '../sidebar/desktop.js';
import '../joinBanner/index.js';
import '@web3-react/injected-connector';
import '@web3-react/portis-connector';
import '@web3-react/fortmatic-connector';
import '@web3-react/walletconnect-connector';
import '../information/index.js';
import '../select/index.js';
import '../inputLayout/index.js';
import { InputV2 } from '../inputV2/index.js';
import { TokenSelectOptionV2 } from '../../atoms/tokenSelectOptionV2/index.js';

var MODAL_BORDER_RADIUS = 16;
var MODAL_MAX_WIDTH = 380;
var MODAL_MAX_HEIGHT = 552;
var styles = StyleSheet.create({
  modalContainer: {
    borderRadius: MODAL_BORDER_RADIUS,
    maxWidth: MODAL_MAX_WIDTH,
    maxHeight: MODAL_MAX_HEIGHT,
    overflow: 'hidden'
  }
});
var TokenSelectContentV2 = function (_a) {
  var options = _a.options,
    _b = _a.closable,
    closable = _b === void 0 ? false : _b,
    _c = _a.label,
    label = _c === void 0 ? 'Search name or paste contract address' : _c,
    _d = _a.placeholder,
    placeholder = _d === void 0 ? 'Select a token' : _d,
    _e = _a.searchPlaceholder,
    searchPlaceholder = _e === void 0 ? 'Search name or paste address' : _e,
    _f = _a.notFoundText,
    notFoundText = _f === void 0 ? 'No results found' : _f,
    _g = _a.isLoading,
    isLoading = _g === void 0 ? false : _g,
    onChange = _a.onChange,
    onClose = _a.onClose,
    onSearch = _a.onSearch;
  var theme = useThemeV2();
  var _h = useState(''),
    searchInputValue = _h[0],
    setSearchInputValue = _h[1];
  var filteredOptions = useMemo(function () {
    return options.filter(function (option) {
      return option.symbol.toLowerCase().includes(searchInputValue.toLowerCase()) || option.name.toLowerCase().includes(searchInputValue.toLowerCase()) || option.address.toLowerCase().includes(searchInputValue.toLowerCase());
    });
  }, [options, searchInputValue]);
  var isEmpty = useMemo(function () {
    return filteredOptions.length === 0;
  }, [filteredOptions]);
  useEffect(function () {
    if (isAddress(searchInputValue) && isEmpty) {
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchInputValue);
    }
  }, [onSearch, searchInputValue, isEmpty]);
  return jsx(Fragment, {
    children: jsxs(View, __assign({
      style: [padding.pv24, styles.modalContainer, container.fullWidth, {
        backgroundColor: theme.background.white
      }]
    }, {
      children: [jsxs(View, __assign({
        style: [padding.ph24, container.row, container.justifySpaceBetween, container.alignStart]
      }, {
        children: [jsx(TypographyV2, __assign({
          variant: "sub3",
          style: margin.mb16,
          color: theme.text.black[100]
        }, {
          children: placeholder
        })), closable && jsx(Pressable, __assign({
          onPress: onClose,
          testID: "tokenSelectCloseButton"
        }, {
          children: jsx(Icon, {
            variant: "close"
          })
        }))]
      })), jsx(View, __assign({
        style: [padding.ph24]
      }, {
        children: jsx(InputV2, {
          label: label,
          value: searchInputValue,
          onChangeText: setSearchInputValue,
          placeholder: searchPlaceholder,
          testID: "tokenSelectSearchInput"
        })
      })), jsx(Divider, {
        style: [margin.mv24],
        color: theme.background.silver
      }), jsxs(View, __assign({
        style: [padding.ph24, container.flex1]
      }, {
        children: [isLoading && jsx(Spinner, {
          size: "lg"
        }), !isLoading && !isEmpty && jsx(FlatList, {
          data: filteredOptions,
          scrollEnabled: true,
          renderItem: function (_a) {
            var option = _a.item;
            return jsx(TokenSelectOptionV2, __assign({}, option, {
              onClose: onClose,
              onChange: onChange
            }));
          }
        }), !isLoading && isEmpty && jsx(View, __assign({
          style: container.alignCenter,
          testID: "notFoundText"
        }, {
          children: jsx(TypographyV2, __assign({
            variant: "text3",
            color: theme.text.black[80]
          }, {
            children: notFoundText
          }))
        }))]
      }))]
    }))
  });
};

export { TokenSelectContentV2 };
