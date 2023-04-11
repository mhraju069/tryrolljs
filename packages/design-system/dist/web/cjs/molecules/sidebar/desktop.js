'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var reactNativeWeb = require('react-native-web');
require('react');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
var spacing = require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
var index = require('../sidebarOption/index.js');

var DESKTOP_SIDEBAR_WIDTH = 240;
var DIVIDER_HEIGHT = 1;
var SEPARATOR_HEIGHT = 24;
var styles = {
  container: {
    width: DESKTOP_SIDEBAR_WIDTH,
    display: 'flex',
    position: 'fixed',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: spacing.spacing[20],
    paddingLeft: spacing.spacing[20],
    paddingTop: spacing.spacing[24],
    paddingBottom: spacing.spacing[16],
    top: 0,
    left: 0,
    boxSizing: 'border-box'
  },
  mainList: {
    overflow: 'visible'
  },
  spacer: {
    width: DESKTOP_SIDEBAR_WIDTH,
    marginRight: spacing.spacing[40]
  }
};
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
var DesktopSidebar = function (_a) {
  var sections = _a.sections,
    logo = _a.logo,
    header = _a.header,
    footerOnDesktop = _a.footerOnDesktop,
    selectedOptionId = _a.selectedOptionId;
  var theme = themeV2.useThemeV2();
  var height = reactNativeWeb.Dimensions.get('window').height;
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs("div", tslib_es6.__assign({
      style: tslib_es6.__assign(tslib_es6.__assign({}, styles.container), {
        height: height,
        backgroundColor: theme.background.white
      })
    }, {
      children: [logo.desktop && jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
        style: [margin.margin.mb40, container.container.fullWidth, container.container.alignCenter]
      }, {
        children: logo.desktop
      })), header && jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
        style: [margin.margin.mb40, container.container.fullWidth]
      }, {
        children: header
      })), jsxRuntime.jsx(nativeBase.FlatList, {
        overflowX: "visible",
        overflowY: "visible",
        style: [container.container.fullWidth],
        data: sections,
        keyExtractor: function (section) {
          return "".concat(section.id);
        },
        ItemSeparatorComponent: Divider,
        renderItem: function (_a) {
          var section = _a.item;
          return jsxRuntime.jsx(nativeBase.FlatList, {
            style: [container.container.fullWidth],
            overflowX: "visible",
            overflowY: "visible",
            data: section.options,
            keyExtractor: function (option) {
              return option.id;
            },
            ItemSeparatorComponent: OptionsSeparator,
            renderItem: function (_a) {
              var item = _a.item;
              return jsxRuntime.jsx(index.SidebarOption, tslib_es6.__assign({}, item, {
                selectedOptionId: selectedOptionId
              }));
            }
          });
        }
      }), footerOnDesktop && jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
        style: [container.container.positionAbsolute, {
          bottom: spacing.spacing[16]
        }]
      }, {
        children: footerOnDesktop
      }))]
    })), jsxRuntime.jsx("div", {
      style: styles.spacer
    })]
  });
};

exports.DesktopSidebar = DesktopSidebar;
