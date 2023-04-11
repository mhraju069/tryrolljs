import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useBreakpointValue, Pressable } from 'native-base';
import { useState } from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import { FONT_SIZE_BUTTON_LARGE, FONT_SIZE_BUTTON_MEDIUM, FONT_SIZE_BUTTON_TEXT } from '../../styles/text.js';
import { container } from '../../styles/container.js';
import { Icon } from '../icon/index.js';
import { Spinner } from '../spinner/index.js';
import { TypographyV2 } from '../typographyV2/index.js';
import { iconBasedOnSize, fontsBasedOnSize } from './types.js';

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
  var _d = useState(false),
    isHover = _d[0],
    setIsHover = _d[1];
  var _e = useState(false),
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
  var styles = StyleSheet.create({
    container: __assign({
      position: 'relative',
      itemsCenter: 'center',
      justContent: 'center',
      paddingHorizontal: variant === 'icon' ? paddingVertical : paddingHorizontal,
      paddingVertical: paddingVertical,
      borderRadius: borderRadius,
      backgroundColor: iconBackgroundColor || stylesBasedOnState.backgroundColor
    }, Platform.select({
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
  var fontBasedOnVariantAndSize = variant === 'text' && size === 'large' ? 'buttonText' : fontsBasedOnSize[size];
  return jsx(View, __assign({
    style: [container.alignCenter]
  }, {
    children: jsxs(Pressable, __assign({
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
      style: [styles.container, container.row, container.alignCenter, container.justifyCenter]
    }, {
      children: [Platform.OS === 'web' && jsx(View, {
        style: [container.fullWidth, container.fullHeight, styles.borderContainer]
      }), isLoading ? jsx(Spinner, {
        size: textSize,
        color: stylesBasedOnState.textColor
      }) : jsxs(Fragment, {
        children: [iconVariant && variant !== 'text' && jsx(View, __assign({
          style: [styles.iconContainer]
        }, {
          children: jsx(Icon, {
            variant: iconVariant,
            width: iconBasedOnSize[size],
            height: iconBasedOnSize[size],
            color: iconColor || stylesBasedOnState.textColor
          })
        })), !iconVariant && icon && variant !== 'text' && jsx(View, __assign({
          style: [styles.iconContainer]
        }, {
          children: icon
        })), variant !== 'icon' && jsx(TypographyV2, __assign({
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
  var theme = useThemeV2();
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
          textSize: FONT_SIZE_BUTTON_TEXT,
          borderRadius: 10
        };
      }
    case 'small':
      {
        return {
          paddingHorizontal: 12,
          paddingVertical: 8,
          textSize: FONT_SIZE_BUTTON_MEDIUM,
          borderRadius: 10
        };
      }
    case 'medium':
      {
        return {
          paddingHorizontal: 16,
          paddingVertical: 12,
          textSize: FONT_SIZE_BUTTON_MEDIUM,
          borderRadius: 12
        };
      }
    case 'large':
      {
        return {
          paddingHorizontal: 24,
          paddingVertical: 12,
          textSize: FONT_SIZE_BUTTON_LARGE,
          borderRadius: 14
        };
      }
  }
};
var ButtonV2 = function (_a) {
  var variant = _a.variant,
    size = _a.size,
    props = __rest(_a, ["variant", "size"]);
  var responsiveSize = useBreakpointValue({
    base: size === 'large' ? 'medium' : size,
    md: size
  });
  var variantProps = useVariantsProps(variant);
  var sizeProps = useSizeProps(responsiveSize);
  var baseButtonProps = __assign(__assign({}, variantProps), sizeProps);
  return jsx(BaseButton, __assign({
    variant: variant,
    size: responsiveSize
  }, baseButtonProps, props));
};

export { ButtonV2 };
