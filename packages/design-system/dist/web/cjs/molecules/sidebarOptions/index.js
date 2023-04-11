'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNativeWeb = require('react-native-web');
var nativeBase = require('native-base');
require('react');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
var index = require('../sidebarOption/index.js');

var DIVIDER_HEIGHT = 1;
var SEPARATOR_HEIGHT = 24;
var Divider = function () {
  var theme = themeV2.useThemeV2();
  return jsxRuntime.jsx(reactNativeWeb.View, {
    style: [container.container.fullWidth, margin.margin.mv24, {
      height: DIVIDER_HEIGHT,
      backgroundColor: theme.background.silver
    }]
  });
};
var OptionsSeparator = function () {
  return jsxRuntime.jsx(reactNativeWeb.View, {
    style: [{
      height: SEPARATOR_HEIGHT
    }]
  });
};
var styles = reactNativeWeb.StyleSheet.create({
  mainList: {
    overflow: 'visible'
  }
});
var SidebarOptions = function (_a) {
  var sections = _a.sections,
    selectedOptionId = _a.selectedOptionId;
  return jsxRuntime.jsx(nativeBase.FlatList, {
    scrollEnabled: false,
    overflowX: "visible",
    overflowY: "visible",
    style: [container.container.fullWidth, styles.mainList],
    data: sections,
    keyExtractor: function (section) {
      return section.id;
    },
    ItemSeparatorComponent: Divider,
    renderItem: function (_a) {
      var section = _a.item;
      return jsxRuntime.jsx(nativeBase.FlatList, {
        scrollEnabled: false,
        overflowX: "visible",
        overflowY: "visible",
        style: [container.container.fullWidth, styles.mainList],
        data: section.options,
        keyExtractor: function (option) {
          return option.id;
        },
        renderItem: function (_a) {
          var item = _a.item;
          return jsxRuntime.jsx(index.SidebarOption, tslib_es6.__assign({}, item, {
            selectedOptionId: selectedOptionId
          }));
        },
        ItemSeparatorComponent: OptionsSeparator
      });
    }
  });
};

exports.SidebarOptions = SidebarOptions;
