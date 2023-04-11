import { jsx } from 'react/jsx-runtime';
import { Spinner as Spinner$1 } from 'native-base';
import { useTheme } from '../../hooks/theme.js';
import 'react';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native';

var Spinner = function (_a) {
  var style = _a.style,
    size = _a.size,
    color = _a.color;
  var theme = useTheme();
  return jsx(Spinner$1, {
    color: color || theme.text.highlight,
    size: size,
    style: style
  });
};

export { Spinner };
