import { __spreadArray, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { StyleSheet, Pressable, View, FlatList } from 'react-native-web';
import 'native-base';
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
import { TypographyV2 } from '../../atoms/typographyV2/index.js';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '@floating-ui/react-dom-interactions';
import '../../utils/web3.js';
import '../../atoms/input/index.js';

var styles = StyleSheet.create({
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
  var theme = useThemeV2();
  var _c = useState(false),
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
  var optionIdsSet = new Set(__spreadArray([id], nestedOptionsIds, true));
  var hasSelectedOption = optionIdsSet.has(selectedOptionId);
  var textColor = hasSelectedOption ? theme.base.highlight1 : theme.text.black[100];
  return jsxs(Pressable, __assign({
    style: [container.fullWidth],
    onPress: handlePress
  }, {
    children: [jsxs(View, __assign({
      style: [container.fullWidth, container.alignCenter, container.row, styles.mainOptionContainer]
    }, {
      children: [hasSelectedOption && jsx(View, {
        style: [styles.selectedIndicator, {
          backgroundColor: theme.base.highlight1
        }]
      }), jsxs(View, __assign({
        style: [container.flex1, container.row, container.alignCenter]
      }, {
        children: [iconVariant && jsx(View, __assign({
          style: [margin.mr16]
        }, {
          children: jsx(Icon, {
            variant: iconVariant,
            color: textColor
          })
        })), jsx(TypographyV2, __assign({
          color: textColor,
          variant: "caption2",
          style: [container.flex1]
        }, {
          children: title
        }))]
      })), !!(nestedOptions === null || nestedOptions === void 0 ? void 0 : nestedOptions.length) && jsx(Icon, {
        variant: showNestedOptions ? 'arrowUp' : 'arrowDown2',
        color: textColor
      })]
    })), !!(nestedOptions === null || nestedOptions === void 0 ? void 0 : nestedOptions.length) && showNestedOptions && jsx(View, __assign({
      style: [padding.pl40, margin.mt16]
    }, {
      children: jsx(FlatList, {
        data: nestedOptions,
        keyExtractor: function (item) {
          return item.title;
        },
        renderItem: function (_a) {
          var item = _a.item;
          return jsx(NestedSidebarOption, __assign({}, item, {
            isSelected: item.id === selectedOptionId
          }));
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent: function () {
          return jsx(View, {
            style: [margin.mt16]
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
  var theme = useThemeV2();
  var textColor = isSelected ? theme.base.highlight1 : theme.text.black[100];
  return jsxs(Pressable, __assign({
    style: [container.fullWidth, container.alignCenter, container.row],
    onPress: onPress
  }, {
    children: [iconVariant && jsx(View, __assign({
      style: [margin.mr16]
    }, {
      children: jsx(Icon, {
        variant: iconVariant,
        color: textColor
      })
    })), jsx(TypographyV2, __assign({
      variant: "caption2",
      style: [container.flex1],
      color: textColor
    }, {
      children: title
    }))]
  }));
};

export { NestedSidebarOption, SidebarOption };
