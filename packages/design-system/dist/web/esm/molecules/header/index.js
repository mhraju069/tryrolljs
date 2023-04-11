import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useBreakpointValue } from 'native-base';
import { View, Platform, ScrollView } from 'react-native-web';
import { MobileSidebar } from '../sidebar/mobile.js';
import { DesktopHeader } from './desktop.js';

var HeaderV2 = function (_a) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  var isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  if (isMobile) {
    return jsxs(View, {
      children: [jsx(MobileSidebar, __assign({}, props, {
        sections: [{
          id: 'main',
          options: props.options
        }]
      })), Platform.select({
        native: jsx(ScrollView, {
          children: children
        }),
        web: children
      })]
    });
  }
  return jsxs(Fragment, {
    children: [jsx(DesktopHeader, __assign({}, props)), children]
  });
};

export { HeaderV2 };
