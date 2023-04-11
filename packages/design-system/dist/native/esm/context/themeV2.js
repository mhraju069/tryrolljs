import { createContext } from 'react';
import { lightTheme } from '../styles/themeV2.js';

var ThemeContextV2 = createContext({
  theme: lightTheme,
  setTheme: function () {
    return null;
  }
});

export { ThemeContextV2 };
