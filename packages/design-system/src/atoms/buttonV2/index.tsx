import { Pressable, useBreakpointValue } from 'native-base'
import { useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import {
  container,
  FONT_SIZE_BUTTON_LARGE,
  FONT_SIZE_BUTTON_MEDIUM,
  FONT_SIZE_BUTTON_TEXT,
} from '../../styles'
import { Icon } from '../icon'
import { Spinner } from '../spinner'
import { TypographyV2, TypographyVariant } from '../typographyV2'
import {
  BaseButtonProps,
  ButtonV2Props,
  fontsBasedOnSize,
  iconBasedOnSize,
  Size,
  SizeProps,
  StateVariantProps,
  Variant,
  VariantProps,
} from './types'

const BaseButton = ({
  variant,
  title,
  rest,
  hover,
  disabled,
  active,
  paddingHorizontal,
  paddingVertical,
  borderRadius,
  size,
  textSize,
  icon,
  namedIcon,
  isDisabled = false,
  isLoading = false,
  colorIcon,
  backgroundColorIcon,
  onPress,
}: BaseButtonProps) => {
  const [isHover, setIsHover] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const getStylesBasedOnState = (): StateVariantProps => {
    if (isDisabled || isLoading) return disabled
    if (isActive) return active
    if (isHover) return hover
    return rest
  }

  const stylesBasedOnState = getStylesBasedOnState()

  const isUnderlined = variant === 'text' && isHover && !isDisabled

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      itemsCenter: 'center',
      justContent: 'center',
      paddingHorizontal:
        variant === 'icon' ? paddingVertical : paddingHorizontal,
      paddingVertical,
      borderRadius,
      backgroundColor:
        backgroundColorIcon || stylesBasedOnState.backgroundColor,
      ...Platform.select({
        native: {
          borderWidth: stylesBasedOnState.borderWidth,
          borderColor: stylesBasedOnState.borderColor,
        },
      }),
    },
    borderContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderWidth: stylesBasedOnState.borderWidth,
      borderColor: stylesBasedOnState.borderColor,
      borderRadius,
    },
    title: {
      fontWeight: '600',
      color: stylesBasedOnState.textColor,
      borderBottomWidth: isUnderlined ? (isActive ? 2 : 1) : 0,
      borderBottomColor: stylesBasedOnState.textColor,
    },
    iconContainer: {
      color: stylesBasedOnState.textColor,
      marginRight: (icon || namedIcon) && variant !== 'icon' ? 12 : 0,
    },
  })

  const fontBasedOnVariantAndSize: TypographyVariant =
    variant === 'text' && size === 'large'
      ? 'buttonText'
      : fontsBasedOnSize[size]

  return (
    <View style={[container.alignCenter]}>
      <Pressable
        isDisabled={isLoading || isDisabled}
        onHoverIn={() => setIsHover(true)}
        onHoverOut={() => setIsHover(false)}
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        onPress={onPress}
        isHovered={isHover}
        isFocused={isActive}
        style={[
          styles.container,
          container.row,
          container.alignCenter,
          container.justifyCenter,
        ]}
      >
        {Platform.OS === 'web' && (
          <View
            style={[
              container.fullWidth,
              container.fullHeight,
              styles.borderContainer,
            ]}
          />
        )}
        {isLoading ? (
          <Spinner size={textSize} color={stylesBasedOnState.textColor} />
        ) : (
          <>
            {namedIcon && variant !== 'text' && (
              <View style={[styles.iconContainer]}>
                <Icon
                  variant={namedIcon}
                  width={iconBasedOnSize[size]}
                  height={iconBasedOnSize[size]}
                  color={colorIcon || stylesBasedOnState.textColor}
                />
              </View>
            )}
            {!namedIcon && icon && variant !== 'text' && (
              <View style={[styles.iconContainer]}>{icon}</View>
            )}
            {variant !== 'icon' && (
              <TypographyV2
                variant={fontBasedOnVariantAndSize}
                color={stylesBasedOnState.textColor}
                style={[styles.title]}
              >
                {title}
              </TypographyV2>
            )}
          </>
        )}
      </Pressable>
    </View>
  )
}

const useVariantsProps = (variant: Variant): VariantProps => {
  const theme = useThemeV2()
  switch (variant) {
    case 'primary': {
      return {
        rest: {
          textColor: theme.text.white[100],
          backgroundColor: theme.base.primary[100],
          borderColor: theme.base.transparent,
          borderWidth: 2,
        },
        hover: {
          textColor: theme.text.white[100],
          backgroundColor: theme.base.primary[80],
          borderColor: theme.base.transparent,
          borderWidth: 2,
        },
        active: {
          textColor: theme.text.white[100],
          backgroundColor: theme.base.primary[80],
          borderColor: theme.base.primary[100],
          borderWidth: 2,
        },
        disabled: {
          textColor: theme.text.white[100],
          backgroundColor: theme.base.primary[10],
          borderColor: theme.base.transparent,
          borderWidth: 2,
        },
      }
    }
    case 'secondary': {
      return {
        rest: {
          textColor: theme.text.black[100],
          backgroundColor: theme.base.transparent,
          borderColor: theme.base.primary[100],
          borderWidth: 1,
        },
        hover: {
          textColor: theme.text.black[100],
          backgroundColor: theme.base.transparent,
          borderColor: theme.base.primary[100],
          borderWidth: 2,
        },
        active: {
          textColor: theme.text.black[100],
          backgroundColor: theme.base.transparent,
          borderColor: theme.base.primary[100],
          borderWidth: 3,
        },
        disabled: {
          textColor: theme.text.black[30],
          backgroundColor: theme.base.transparent,
          borderColor: theme.base.primary[10],
          borderWidth: 1,
        },
      }
    }
    case 'tertiary': {
      return {
        rest: {
          textColor: theme.text.black[100],
          backgroundColor: 'transparent',
          borderColor: theme.base.primary[10],
          borderWidth: 1,
        },
        hover: {
          textColor: theme.text.black[100],
          backgroundColor: 'transparent',
          borderColor: theme.base.primary[100],
          borderWidth: 1,
        },
        active: {
          textColor: theme.text.black[100],
          backgroundColor: 'transparent',
          borderColor: theme.base.primary[100],
          borderWidth: 2,
        },
        disabled: {
          textColor: theme.text.black[30],
          backgroundColor: 'transparent',
          borderColor: theme.base.primary[10],
          borderWidth: 1,
        },
      }
    }
    case 'text': {
      return {
        rest: {
          textColor: theme.text.black[100],
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        },
        hover: {
          textColor: theme.text.black[100],
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        },
        active: {
          textColor: theme.text.black[100],
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        },
        disabled: {
          textColor: theme.text.black[30],
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        },
      }
    }
    case 'icon': {
      return {
        rest: {
          textColor: theme.text.black[100],
          backgroundColor: 'transparent',
          borderColor: theme.base.primary[10],
          borderWidth: 1,
        },
        hover: {
          textColor: theme.text.black[100],
          backgroundColor: 'transparent',
          borderColor: theme.base.primary[100],
          borderWidth: 1,
        },
        active: {
          textColor: theme.text.black[100],
          backgroundColor: 'transparent',
          borderColor: theme.base.primary[100],
          borderWidth: 2,
        },
        disabled: {
          textColor: theme.text.black[30],
          backgroundColor: 'transparent',
          borderColor: theme.base.primary[10],
          borderWidth: 1,
        },
      }
    }
  }
}

const useSizeProps = (size: Size): SizeProps => {
  switch (size) {
    case 'xsmall': {
      return {
        paddingHorizontal: 8,
        paddingVertical: 8,
        textSize: FONT_SIZE_BUTTON_TEXT,
        borderRadius: 10,
      }
    }
    case 'small': {
      return {
        paddingHorizontal: 12,
        paddingVertical: 8,
        textSize: FONT_SIZE_BUTTON_MEDIUM,
        borderRadius: 10,
      }
    }
    case 'medium': {
      return {
        paddingHorizontal: 16,
        paddingVertical: 12,
        textSize: FONT_SIZE_BUTTON_MEDIUM,
        borderRadius: 12,
      }
    }
    case 'large': {
      return {
        paddingHorizontal: 24,
        paddingVertical: 12,
        textSize: FONT_SIZE_BUTTON_LARGE,
        borderRadius: 14,
      }
    }
  }
}

export const ButtonV2 = ({ variant, size, ...props }: ButtonV2Props) => {
  const responsiveSize = useBreakpointValue({
    base: size === 'large' ? 'medium' : size,
    md: size,
  })
  const variantProps = useVariantsProps(variant)
  const sizeProps = useSizeProps(responsiveSize)
  const baseButtonProps = { ...variantProps, ...sizeProps }
  return (
    <BaseButton
      variant={variant}
      size={responsiveSize}
      {...baseButtonProps}
      {...props}
    />
  )
}
