import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { StyleSheet, View } from 'react-native-web';
import { FlatList } from 'native-base';
import 'react';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import { SidebarOption } from '../sidebarOption/index.js';

var DIVIDER_HEIGHT = 1;
var SEPARATOR_HEIGHT = 24;
var Divider = function () {
  var theme = useThemeV2();
  return jsx(View, {
    style: [container.fullWidth, margin.mv24, {
      height: DIVIDER_HEIGHT,
      backgroundColor: theme.background.silver
    }]
  });
};
var OptionsSeparator = function () {
  return jsx(View, {
    style: [{
      height: SEPARATOR_HEIGHT
    }]
  });
};
var styles = StyleSheet.create({
  mainList: {
    overflow: 'visible'
  }
});
var SidebarOptions = function (_a) {
  var sections = _a.sections,
    selectedOptionId = _a.selectedOptionId;
  return jsx(FlatList, {
    scrollEnabled: false,
    overflowX: "visible",
    overflowY: "visible",
    style: [container.fullWidth, styles.mainList],
    data: sections,
    keyExtractor: function (section) {
      return section.id;
    },
    ItemSeparatorComponent: Divider,
    renderItem: function (_a) {
      var section = _a.item;
      return jsx(FlatList, {
        scrollEnabled: false,
        overflowX: "visible",
        overflowY: "visible",
        style: [container.fullWidth, styles.mainList],
        data: section.options,
        keyExtractor: function (option) {
          return option.id;
        },
        renderItem: function (_a) {
          var item = _a.item;
          return jsx(SidebarOption, __assign({}, item, {
            selectedOptionId: selectedOptionId
          }));
        },
        ItemSeparatorComponent: OptionsSeparator
      });
    }
  });
};

export { SidebarOptions };
