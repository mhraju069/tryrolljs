'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactNativeWeb = require('react-native-web');
require('native-base');
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
var index = require('../../atoms/icon/index.js');
var index$1 = require('../../atoms/typographyV2/index.js');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('@floating-ui/react-dom-interactions');
require('../../utils/web3.js');
require('../../atoms/input/index.js');

var styles = reactNativeWeb.StyleSheet.create({
  mainOptionContainer: {
    position: 'relative'
  },
  selectedIndicator: {
    width: 4,
    height: 16,
    borderTopEndRadius: 2,
    borderBottomEndRadius: 2,
    position: 'absolute',
    left: -20
  }
});
var SidebarOption = function (_a) {
  var id = _a.id,
    iconVariant = _a.iconVariant,
    title = _a.title,
    nestedOptions = _a.nestedOptions,
    onPress = _a.onPress,
    _b = _a.selectedOptionId,
    selectedOptionId = _b === void 0 ? '' : _b;
  var theme = themeV2.useThemeV2();
  var _c = React.useState(false),
    showNestedOptions = _c[0],
    setShowNestedOptions = _c[1];
  var handlePress = function () {
    if (nestedOptions === null || nestedOptions === void 0 ? void 0 : nestedOptions.length) {
      setShowNestedOptions(!showNestedOptions);
      return;
    }
    onPress === null || onPress === void 0 ? void 0 : onPress();
  };
  var nestedOptionsIds = (nestedOptions === null || nestedOptions === void 0 ? void 0 : nestedOptions.map(function (option) {
    return option.id;
  })) || [];
  var optionIdsSet = new Set(tslib_es6.__spreadArray([id], nestedOptionsIds, true));
  var hasSelectedOption = optionIdsSet.has(selectedOptionId);
  var textColor = hasSelectedOption ? theme.base.highlight1 : theme.text.black[100];
  return jsxRuntime.jsxs(reactNativeWeb.Pressable, tslib_es6.__assign({
    style: [container.container.fullWidth],
    onPress: handlePress
  }, {
    children: [jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
      style: [container.container.fullWidth, container.container.alignCenter, container.container.row, styles.mainOptionContainer]
    }, {
      children: [hasSelectedOption && jsxRuntime.jsx(reactNativeWeb.View, {
        style: [styles.selectedIndicator, {
          backgroundColor: theme.base.highlight1
        }]
      }), jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
        style: [container.container.flex1, container.container.row, container.container.alignCenter]
      }, {
        children: [iconVariant && jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
          style: [margin.margin.mr16]
        }, {
          children: jsxRuntime.jsx(index.Icon, {
            variant: iconVariant,
            color: textColor
          })
        })), jsxRuntime.jsx(index$1.TypographyV2, tslib_es6.__assign({
          color: textColor,
          variant: "caption2",
          style: [container.container.flex1]
        }, {
          children: title
        }))]
      })), !!(nestedOptions === null || nestedOptions === void 0 ? void 0 : nestedOptions.length) && jsxRuntime.jsx(index.Icon, {
        variant: showNestedOptions ? 'arrowUp' : 'arrowDown2',
        color: textColor
      })]
    })), !!(nestedOptions === null || nestedOptions === void 0 ? void 0 : nestedOptions.length) && showNestedOptions && jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
      style: [padding.padding.pl40, margin.margin.mt16]
    }, {
      children: jsxRuntime.jsx(reactNativeWeb.FlatList, {
        data: nestedOptions,
        keyExtractor: function (item) {
          return item.title;
        },
        renderItem: function (_a) {
          var item = _a.item;
          return jsxRuntime.jsx(NestedSidebarOption, tslib_es6.__assign({}, item, {
            isSelected: item.id === selectedOptionId
          }));
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent: function () {
          return jsxRuntime.jsx(reactNativeWeb.View, {
            style: [margin.margin.mt16]
          });
        }
      })
    }))]
  }));
};
var NestedSidebarOption = function (_a) {
  var iconVariant = _a.iconVariant,
    title = _a.title,
    isSelected = _a.isSelected,
    onPress = _a.onPress;
  var theme = themeV2.useThemeV2();
  var textColor = isSelected ? theme.base.highlight1 : theme.text.black[100];
  return jsxRuntime.jsxs(reactNativeWeb.Pressable, tslib_es6.__assign({
    style: [container.container.fullWidth, container.container.alignCenter, container.container.row],
    onPress: onPress
  }, {
    children: [iconVariant && jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
      style: [margin.margin.mr16]
    }, {
      children: jsxRuntime.jsx(index.Icon, {
        variant: iconVariant,
        color: textColor
      })
    })), jsxRuntime.jsx(index$1.TypographyV2, tslib_es6.__assign({
      variant: "caption2",
      style: [container.container.flex1],
      color: textColor
    }, {
      children: title
    }))]
  }));
};

exports.NestedSidebarOption = NestedSidebarOption;
exports.SidebarOption = SidebarOption;
