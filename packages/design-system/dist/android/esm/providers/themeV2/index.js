import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { lightTheme } from '../../styles/themeV2.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import { ThemeContextV2 } from '../../context/themeV2.js';

var ThemeProviderV2 = function (_a) {
  var children = _a.children;
  var _b = useState(lightTheme),
    theme = _b[0],
    setTheme = _b[1];
  return jsx(ThemeContextV2.Provider, __assign({
    value: {
      theme: theme,
      setTheme: setTheme
    }
  }, {
    children: children
  }));
};

export { ThemeProviderV2 };
