import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from '../theme/index.js';
import { ThemeProviderV2 } from '../themeV2/index.js';

var TryrollProvider = function (_a) {
  var children = _a.children;
  return jsx(NativeBaseProvider, {
    children: jsx(ThemeProvider, {
      children: jsx(ThemeProviderV2, {
        children: children
      })
    })
  });
};
var inset = {
  frame: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  insets: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};
var TryrollTestProvider = function (_a) {
  var children = _a.children;
  return jsx(NativeBaseProvider, __assign({
    initialWindowMetrics: inset
  }, {
    children: jsx(ThemeProvider, {
      children: jsx(ThemeProviderV2, {
        children: children
      })
    })
  }));
};

export { TryrollProvider, TryrollTestProvider };
