import { createContext } from 'react';
import { lightTheme } from '../styles/theme.js';
import 'react-native-web';
import '../styles/margin.js';
import '../styles/padding.js';
import '../styles/spacing.js';
import '../styles/text.js';
import '../styles/container.js';

var ThemeContext = createContext({
  theme: lightTheme,
  setTheme: function () {
    return null;
  }
});

export { ThemeContext };
