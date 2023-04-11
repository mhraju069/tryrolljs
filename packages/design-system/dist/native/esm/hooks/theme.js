import { useContext } from 'react';
import '../context/modal.js';
import { ThemeContext } from '../context/theme.js';
import '../context/web3.js';
import '../context/themeV2.js';

var useTheme = function () {
  var theme = useContext(ThemeContext).theme;
  return theme;
};

export { useTheme };
