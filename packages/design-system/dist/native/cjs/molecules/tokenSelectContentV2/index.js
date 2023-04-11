'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var reactNative = require('react-native');
var React = require('react');
require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
require('../../atoms/button/index.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
var index$1 = require('../../atoms/icon/index.js');
var index$3 = require('../../atoms/spinner/index.js');
var index = require('../../atoms/typographyV2/index.js');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
var web3 = require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');
require('../accountDropdown/index.js');
require('../collapsableView/index.js');
require('../connectWeb3Options/index.js');
require('../copyLink/index.js');
require('react-native-svg');
require('../footerV2/index.js');
require('../sidebar/mobile.js');
require('../header/desktop.js');
require('../sidebar/desktop.js');
require('../joinBanner/index.js');
require('@web3-react/injected-connector');
require('@web3-react/portis-connector');
require('@web3-react/fortmatic-connector');
require('@web3-react/walletconnect-connector');
require('../information/index.js');
require('../select/index.js');
require('../inputLayout/index.js');
var index$2 = require('../inputV2/index.js');
var index$4 = require('../../atoms/tokenSelectOptionV2/index.js');

var MODAL_BORDER_RADIUS = 16;
var MODAL_MAX_WIDTH = 380;
var MODAL_MAX_HEIGHT = 552;
var styles = reactNative.StyleSheet.create({
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
  var theme = themeV2.useThemeV2();
  var _h = React.useState(''),
    searchInputValue = _h[0],
    setSearchInputValue = _h[1];
  var filteredOptions = React.useMemo(function () {
    return options.filter(function (option) {
      return option.symbol.toLowerCase().includes(searchInputValue.toLowerCase()) || option.name.toLowerCase().includes(searchInputValue.toLowerCase()) || option.address.toLowerCase().includes(searchInputValue.toLowerCase());
    });
  }, [options, searchInputValue]);
  var isEmpty = React.useMemo(function () {
    return filteredOptions.length === 0;
  }, [filteredOptions]);
  React.useEffect(function () {
    if (web3.isAddress(searchInputValue) && isEmpty) {
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchInputValue);
    }
  }, [onSearch, searchInputValue, isEmpty]);
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
      style: [padding.padding.pv24, styles.modalContainer, container.container.fullWidth, {
        backgroundColor: theme.background.white
      }]
    }, {
      children: [jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
        style: [padding.padding.ph24, container.container.row, container.container.justifySpaceBetween, container.container.alignStart]
      }, {
        children: [jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
          variant: "sub3",
          style: margin.margin.mb16,
          color: theme.text.black[100]
        }, {
          children: placeholder
        })), closable && jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
          onPress: onClose,
          testID: "tokenSelectCloseButton"
        }, {
          children: jsxRuntime.jsx(index$1.Icon, {
            variant: "close"
          })
        }))]
      })), jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
        style: [padding.padding.ph24]
      }, {
        children: jsxRuntime.jsx(index$2.InputV2, {
          label: label,
          value: searchInputValue,
          onChangeText: setSearchInputValue,
          placeholder: searchPlaceholder,
          testID: "tokenSelectSearchInput"
        })
      })), jsxRuntime.jsx(nativeBase.Divider, {
        style: [margin.margin.mv24],
        color: theme.background.silver
      }), jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
        style: [padding.padding.ph24, container.container.flex1]
      }, {
        children: [isLoading && jsxRuntime.jsx(index$3.Spinner, {
          size: "lg"
        }), !isLoading && !isEmpty && jsxRuntime.jsx(reactNative.FlatList, {
          data: filteredOptions,
          scrollEnabled: true,
          renderItem: function (_a) {
            var option = _a.item;
            return jsxRuntime.jsx(index$4.TokenSelectOptionV2, tslib_es6.__assign({}, option, {
              onClose: onClose,
              onChange: onChange
            }));
          }
        }), !isLoading && isEmpty && jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
          style: container.container.alignCenter,
          testID: "notFoundText"
        }, {
          children: jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
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

exports.TokenSelectContentV2 = TokenSelectContentV2;
