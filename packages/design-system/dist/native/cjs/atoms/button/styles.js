'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Color = require('color');
var colors = require('../../styles/colors.js');
require('react-native');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Color__default = /*#__PURE__*/_interopDefaultLegacy(Color);

var getHoverColor = function (color) {
  return Color__default["default"](color).darken(0.05).hex();
};
var colorMapByVariant = {
  primary: {
    text: colors.white,
    backgroundGradient: [colors.cyanBlue, colors.dodgerBlue],
    borderColor: undefined,
    hover: {
      backgroundGradient: [getHoverColor(colors.cyanBlue), getHoverColor(colors.dodgerBlue)]
    }
  },
  secondary: {
    text: colors.grey,
    backgroundGradient: [colors.white, colors.white],
    borderColor: colors.lightGray,
    hover: {
      backgroundGradient: [getHoverColor(colors.white), getHoverColor(colors.white)]
    }
  }
};
var disabledColors = {
  text: colors.white,
  backgroundGradient: [colors.grey, colors.grey],
  borderColor: undefined,
  hover: {
    backgroundGradient: [colors.grey, colors.grey]
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

exports.getColors = getColors;
