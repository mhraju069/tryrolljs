import { white, aliceBlue, lightGray, lavendar, darkNavy, mistyRose, orange, ghostWhite, charcoalBlack, grey, dodgerBlue, crimson } from './colors.js';
import 'react-native-web';
import './margin.js';
import './padding.js';
import './spacing.js';
import './text.js';
import './container.js';

var lightTheme = {
  background: {
    primary: white,
    secondary: aliceBlue,
    tertiary: lightGray,
    highlight: lavendar,
    lowLight: darkNavy,
    error: mistyRose,
    warning: orange,
    page: ghostWhite
  },
  text: {
    primary: charcoalBlack,
    secondary: grey,
    highlight: dodgerBlue,
    error: crimson,
    warning: orange
  }
};

export { lightTheme };
