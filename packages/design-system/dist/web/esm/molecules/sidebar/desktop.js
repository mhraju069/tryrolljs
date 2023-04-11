import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { FlatList } from 'native-base';
import { Dimensions, View } from 'react-native-web';
import 'react';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import { spacing } from '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import { SidebarOption } from '../sidebarOption/index.js';

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
    paddingRight: spacing[20],
    paddingLeft: spacing[20],
    paddingTop: spacing[24],
    paddingBottom: spacing[16],
    top: 0,
    left: 0,
    boxSizing: 'border-box'
  },
  mainList: {
    overflow: 'visible'
  },
  spacer: {
    width: DESKTOP_SIDEBAR_WIDTH,
    marginRight: spacing[40]
  }
};
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
var DesktopSidebar = function (_a) {
  var sections = _a.sections,
    logo = _a.logo,
    header = _a.header,
    footerOnDesktop = _a.footerOnDesktop,
    selectedOptionId = _a.selectedOptionId;
  var theme = useThemeV2();
  var height = Dimensions.get('window').height;
  return jsxs(Fragment, {
    children: [jsxs("div", __assign({
      style: __assign(__assign({}, styles.container), {
        height: height,
        backgroundColor: theme.background.white
      })
    }, {
      children: [logo.desktop && jsx(View, __assign({
        style: [margin.mb40, container.fullWidth, container.alignCenter]
      }, {
        children: logo.desktop
      })), header && jsx(View, __assign({
        style: [margin.mb40, container.fullWidth]
      }, {
        children: header
      })), jsx(FlatList, {
        overflowX: "visible",
        overflowY: "visible",
        style: [container.fullWidth],
        data: sections,
        keyExtractor: function (section) {
          return "".concat(section.id);
        },
        ItemSeparatorComponent: Divider,
        renderItem: function (_a) {
          var section = _a.item;
          return jsx(FlatList, {
            style: [container.fullWidth],
            overflowX: "visible",
            overflowY: "visible",
            data: section.options,
            keyExtractor: function (option) {
              return option.id;
            },
            ItemSeparatorComponent: OptionsSeparator,
            renderItem: function (_a) {
              var item = _a.item;
              return jsx(SidebarOption, __assign({}, item, {
                selectedOptionId: selectedOptionId
              }));
            }
          });
        }
      }), footerOnDesktop && jsx(View, __assign({
        style: [container.positionAbsolute, {
          bottom: spacing[16]
        }]
      }, {
        children: footerOnDesktop
      }))]
    })), jsx("div", {
      style: styles.spacer
    })]
  });
};

export { DesktopSidebar };
