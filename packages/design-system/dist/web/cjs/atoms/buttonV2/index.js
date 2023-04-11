'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
var reactNativeWeb = require('react-native-web');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
var text = require('../../styles/text.js');
var container = require('../../styles/container.js');
var index$1 = require('../icon/index.js');
var index = require('../spinner/index.js');
var index$2 = require('../typographyV2/index.js');
var types = require('./types.js');

var BaseButton = function (_a) {
  var variant = _a.variant,
    title = _a.title,
    rest = _a.rest,
    hover = _a.hover,
    disabled = _a.disabled,
    active = _a.active,
    paddingHorizontal = _a.paddingHorizontal,
    paddingVertical = _a.paddingVertical,
    borderRadius = _a.borderRadius,
    size = _a.size,
    textSize = _a.textSize,
    icon = _a.icon,
    iconVariant = _a.iconVariant,
    _b = _a.isDisabled,
    isDisabled = _b === void 0 ? false : _b,
    _c = _a.isLoading,
    isLoading = _c === void 0 ? false : _c,
    iconColor = _a.iconColor,
    iconBackgroundColor = _a.iconBackgroundColor,
    onPress = _a.onPress;
  var _d = React.useState(false),
    isHover = _d[0],
    setIsHover = _d[1];
  var _e = React.useState(false),
    isActive = _e[0],
    setIsActive = _e[1];
  var getStylesBasedOnState = function () {
    if (isDisabled || isLoading) return disabled;
    if (isActive) return active;
    if (isHover) return hover;
    return rest;
  };
  var stylesBasedOnState = getStylesBasedOnState();
  var isUnderlined = variant === 'text' && isHover && !isDisabled;
  var styles = reactNativeWeb.StyleSheet.create({
    container: tslib_es6.__assign({
      position: 'relative',
      itemsCenter: 'center',
      justContent: 'center',
      paddingHorizontal: variant === 'icon' ? paddingVertical : paddingHorizontal,
      paddingVertical: paddingVertical,
      borderRadius: borderRadius,
      backgroundColor: iconBackgroundColor || stylesBasedOnState.backgroundColor
    }, reactNativeWeb.Platform.select({
      native: {
        borderWidth: stylesBasedOnState.borderWidth,
        borderColor: stylesBasedOnState.borderColor
      }
    })),
    borderContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderWidth: stylesBasedOnState.borderWidth,
      borderColor: stylesBasedOnState.borderColor,
      borderRadius: borderRadius
    },
    title: {
      fontWeight: '600',
      color: stylesBasedOnState.textColor,
      borderBottomWidth: 1,
      borderBottomColor: isUnderlined ? stylesBasedOnState.textColor : 'transparent'
    },
    iconContainer: {
      color: stylesBasedOnState.textColor,
      marginRight: (icon || iconVariant) && variant !== 'icon' ? 12 : 0
    }
  });
  var fontBasedOnVariantAndSize = variant === 'text' && size === 'large' ? 'buttonText' : types.fontsBasedOnSize[size];
  return jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
    style: [container.container.alignCenter]
  }, {
    children: jsxRuntime.jsxs(nativeBase.Pressable, tslib_es6.__assign({
      isDisabled: isLoading || isDisabled,
      onHoverIn: function () {
        return setIsHover(true);
      },
      onHoverOut: function () {
        return setIsHover(false);
      },
      onPressIn: function () {
        return setIsActive(true);
      },
      onPressOut: function () {
        return setIsActive(false);
      },
      onPress: onPress,
      isHovered: isHover,
      isFocused: isActive,
      style: [styles.container, container.container.row, container.container.alignCenter, container.container.justifyCenter]
    }, {
      children: [reactNativeWeb.Platform.OS === 'web' && jsxRuntime.jsx(reactNativeWeb.View, {
        style: [container.container.fullWidth, container.container.fullHeight, styles.borderContainer]
      }), isLoading ? jsxRuntime.jsx(index.Spinner, {
        size: textSize,
        color: stylesBasedOnState.textColor
      }) : jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [iconVariant && variant !== 'text' && jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
          style: [styles.iconContainer]
        }, {
          children: jsxRuntime.jsx(index$1.Icon, {
            variant: iconVariant,
            width: types.iconBasedOnSize[size],
            height: types.iconBasedOnSize[size],
            color: iconColor || stylesBasedOnState.textColor
          })
        })), !iconVariant && icon && variant !== 'text' && jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
          style: [styles.iconContainer]
        }, {
          children: icon
        })), variant !== 'icon' && jsxRuntime.jsx(index$2.TypographyV2, tslib_es6.__assign({
          variant: fontBasedOnVariantAndSize,
          color: stylesBasedOnState.textColor,
          style: [styles.title]
        }, {
          children: title
        }))]
      })]
    }))
  }));
};
var useVariantsProps = function (variant) {
  var theme = themeV2.useThemeV2();
  switch (variant) {
    case 'primary':
      {
        return {
          rest: {
            textColor: theme.text.white[100],
            backgroundColor: theme.base.primary[100],
            borderColor: theme.base.transparent,
            borderWidth: 2
          },
          hover: {
            textColor: theme.text.white[100],
            backgroundColor: theme.base.primary[80],
            borderColor: theme.base.transparent,
            borderWidth: 2
          },
          active: {
            textColor: theme.text.white[100],
            backgroundColor: theme.base.primary[80],
            borderColor: theme.base.primary[100],
            borderWidth: 2
          },
          disabled: {
            textColor: theme.text.white[100],
            backgroundColor: theme.base.primary[10],
            borderColor: theme.base.transparent,
            borderWidth: 2
          }
        };
      }
    case 'secondary':
      {
        return {
          rest: {
            textColor: theme.text.black[100],
            backgroundColor: theme.base.transparent,
            borderColor: theme.base.primary[100],
            borderWidth: 1
          },
          hover: {
            textColor: theme.text.black[100],
            backgroundColor: theme.base.transparent,
            borderColor: theme.base.primary[100],
            borderWidth: 2
          },
          active: {
            textColor: theme.text.black[100],
            backgroundColor: theme.base.transparent,
            borderColor: theme.base.primary[100],
            borderWidth: 3
          },
          disabled: {
            textColor: theme.text.black[30],
            backgroundColor: theme.base.transparent,
            borderColor: theme.base.primary[10],
            borderWidth: 1
          }
        };
      }
    case 'tertiary':
      {
        return {
          rest: {
            textColor: theme.text.black[100],
            backgroundColor: 'transparent',
            borderColor: theme.base.primary[10],
            borderWidth: 1
          },
          hover: {
            textColor: theme.text.black[100],
            backgroundColor: 'transparent',
            borderColor: theme.base.primary[100],
            borderWidth: 1
          },
          active: {
            textColor: theme.text.black[100],
            backgroundColor: 'transparent',
            borderColor: theme.base.primary[100],
            borderWidth: 2
          },
          disabled: {
            textColor: theme.text.black[30],
            backgroundColor: 'transparent',
            borderColor: theme.base.primary[10],
            borderWidth: 1
          }
        };
      }
    case 'text':
      {
        return {
          rest: {
            textColor: theme.text.black[100],
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0
          },
          hover: {
            textColor: theme.text.black[100],
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0
          },
          active: {
            textColor: theme.text.black[100],
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0
          },
          disabled: {
            textColor: theme.text.black[30],
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0
          }
        };
      }
    case 'icon':
      {
        return {
          rest: {
            textColor: theme.text.black[100],
            backgroundColor: 'transparent',
            borderColor: theme.base.primary[10],
            borderWidth: 1
          },
          hover: {
            textColor: theme.text.black[100],
            backgroundColor: 'transparent',
            borderColor: theme.base.primary[100],
            borderWidth: 1
          },
          active: {
            textColor: theme.text.black[100],
            backgroundColor: 'transparent',
            borderColor: theme.base.primary[100],
            borderWidth: 2
          },
          disabled: {
            textColor: theme.text.black[30],
            backgroundColor: 'transparent',
            borderColor: theme.base.primary[10],
            borderWidth: 1
          }
        };
      }
  }
};
var useSizeProps = function (size) {
  switch (size) {
    case 'xsmall':
      {
        return {
          paddingHorizontal: 8,
          paddingVertical: 8,
          textSize: text.FONT_SIZE_BUTTON_TEXT,
          borderRadius: 10
        };
      }
    case 'small':
      {
        return {
          paddingHorizontal: 12,
          paddingVertical: 8,
          textSize: text.FONT_SIZE_BUTTON_MEDIUM,
          borderRadius: 10
        };
      }
    case 'medium':
      {
        return {
          paddingHorizontal: 16,
          paddingVertical: 12,
          textSize: text.FONT_SIZE_BUTTON_MEDIUM,
          borderRadius: 12
        };
      }
    case 'large':
      {
        return {
          paddingHorizontal: 24,
          paddingVertical: 12,
          textSize: text.FONT_SIZE_BUTTON_LARGE,
          borderRadius: 14
        };
      }
  }
};
var ButtonV2 = function (_a) {
  var variant = _a.variant,
    size = _a.size,
    props = tslib_es6.__rest(_a, ["variant", "size"]);
  var responsiveSize = nativeBase.useBreakpointValue({
    base: size === 'large' ? 'medium' : size,
    md: size
  });
  var variantProps = useVariantsProps(variant);
  var sizeProps = useSizeProps(responsiveSize);
  var baseButtonProps = tslib_es6.__assign(tslib_es6.__assign({}, variantProps), sizeProps);
  return jsxRuntime.jsx(BaseButton, tslib_es6.__assign({
    variant: variant,
    size: responsiveSize
  }, baseButtonProps, props));
};

exports.ButtonV2 = ButtonV2;
