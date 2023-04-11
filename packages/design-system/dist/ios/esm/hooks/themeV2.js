import { useContext } from 'react';
import '../context/modal.js';
import '../context/theme.js';
import '../context/web3.js';
import { ThemeContextV2 } from '../context/themeV2.js';

var useThemeV2 = function () {
  var theme = useContext(ThemeContextV2).theme;
  return theme;
};

export { useThemeV2 };
