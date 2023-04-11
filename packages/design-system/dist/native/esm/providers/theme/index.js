import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { lightTheme } from '../../styles/theme.js';
import 'react-native';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';
import '../../context/modal.js';
import { ThemeContext } from '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';

var ThemeProvider = function (_a) {
  var children = _a.children;
  var _b = useState(lightTheme),
    theme = _b[0],
    setTheme = _b[1];
  return jsx(ThemeContext.Provider, __assign({
    value: {
      theme: theme,
      setTheme: setTheme
    }
  }, {
    children: children
  }));
};

export { ThemeProvider };
