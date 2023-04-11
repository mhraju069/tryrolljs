import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useBreakpointValue } from 'native-base';
import { Platform, View, ScrollView } from 'react-native-web';
import 'react';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import { DesktopSidebar } from './desktop.js';
import { MobileSidebar } from './mobile.js';

var Sidebar = function (_a) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  var isMobile = useBreakpointValue({
    base: true,
    xl: false
  });
  var theme = useThemeV2();
  return jsx(Fragment, {
    children: Platform.select({
      native: jsxs(View, {
        children: [jsx(MobileSidebar, __assign({}, props)), jsx(ScrollView, {
          children: children
        })]
      }),
      web: jsx(Fragment, {
        children: isMobile ? jsxs(View, {
          children: [jsx(MobileSidebar, __assign({}, props)), children]
        }) : jsxs(View, __assign({
          style: [container.row, {
            backgroundColor: theme.background.grey
          }]
        }, {
          children: [jsx(DesktopSidebar, __assign({}, props)), jsx(View, __assign({
            style: [container.flex1]
          }, {
            children: children
          }))]
        }))
      })
    })
  });
};

export { Sidebar };
