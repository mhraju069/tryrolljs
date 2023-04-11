import Color from 'color';
import { white, cyanBlue, dodgerBlue, grey, lightGray } from '../../styles/colors.js';
import 'react-native-web';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';

var getHoverColor = function (color) {
  return Color(color).darken(0.05).hex();
};
var colorMapByVariant = {
  primary: {
    text: white,
    backgroundGradient: [cyanBlue, dodgerBlue],
    borderColor: undefined,
    hover: {
      backgroundGradient: [getHoverColor(cyanBlue), getHoverColor(dodgerBlue)]
    }
  },
  secondary: {
    text: grey,
    backgroundGradient: [white, white],
    borderColor: lightGray,
    hover: {
      backgroundGradient: [getHoverColor(white), getHoverColor(white)]
    }
  }
};
var disabledColors = {
  text: white,
  backgroundGradient: [grey, grey],
  borderColor: undefined,
  hover: {
    backgroundGradient: [grey, grey]
  }
};
var invertColors = function (colorMap) {
  return {
    text: colorMap.backgroundGradient[1],
    backgroundGradient: [colorMap.text, colorMap.text],
    borderColor: colorMap.borderColor ? undefined : colorMap.backgroundGradient[1],
    hover: {
      backgroundGradient: [getHoverColor(colorMap.text), getHoverColor(colorMap.text)]
    }
  };
};
var getColors = function (_a) {
  var disabled = _a.disabled,
    variant = _a.variant,
    inverted = _a.inverted;
  if (disabled) {
    return disabledColors;
  }
  if (inverted) {
    return invertColors(colorMapByVariant[variant]);
  }
  return colorMapByVariant[variant];
};

export { getColors };
