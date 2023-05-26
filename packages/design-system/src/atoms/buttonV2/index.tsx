import { Pressable, useBreakpointValue } from 'native-base'
import { useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import {
  container,
  FONT_SIZE_BUTTON_LARGE,
  FONT_SIZE_BUTTON_MEDIUM,
  FONT_SIZE_BUTTON_TEXT,
  lineHeights,
  responsiveLineHeights,
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
  testID,
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
  icon,
  iconVariant,
  isDisabled = false,
  isLoading = false,
  iconColor,
  iconBackgroundColor,
  onPress,
  style,
}: BaseButtonProps) => {
  const [isHover, setIsHover] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const lineHeights_ = useBreakpointValue({
    base: responsiveLineHeights,
    xl: lineHeights,
  })

  const getStylesBasedOnState = (): StateVariantProps => {
    if (isDisabled || isLoading) return disabled
    if (isActive) return active
    if (isHover) return hover
    return rest
  }

  const stylesBasedOnState = getStylesBasedOnState()

  const isUnderlined = variant === 'text' && isHover && !isDisabled

  const styles = StyleSheet.create({
    title: {
      fontWeight: '600',
      color: stylesBasedOnState.textColor,
      borderBottomWidth: variant === 'text' ? 1 : 0,
      borderBottomColor: isUnderlined
        ? stylesBasedOnState.textColor
        : 'transparent',
    },
    iconContainer: {
      color: stylesBasedOnState.textColor,
      marginRight: (icon || iconVariant) && variant !== 'icon' ? 12 : 0,
    },
  })

  const paddingY = useMemo(() => {
    if (isActive)
      return paddingVertical - (active.borderWidth - rest.borderWidth)
    if (isHover) return paddingVertical - (hover.borderWidth - rest.borderWidth)
    return paddingVertical
  }, [paddingVertical, isActive, isHover, active, hover, rest])

  const paddingX = useMemo(() => {
    let padding = paddingHorizontal
    if (variant === 'icon') padding = paddingVertical
    if (isActive) return padding - (active.borderWidth - rest.borderWidth)
    if (isHover) return padding - (hover.borderWidth - rest.borderWidth)
    return padding
  }, [
    paddingHorizontal,
    isActive,
    isHover,
    active,
    hover,
    variant,
    paddingVertical,
    rest,
  ])

  const fontBasedOnVariantAndSize: TypographyVariant =
    variant === 'text' && size === 'large'
      ? 'buttonText'
      : fontsBasedOnSize[size]
  const lineHeight: number = lineHeights_[fontBasedOnVariantAndSize]

  return (
    <View style={[container.alignCenter, style]}>
      <Pressable
        testID={testID}
        isDisabled={isLoading || isDisabled}
        onHoverIn={() => setIsHover(true)}
        onHoverOut={() => setIsHover(false)}
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        onPress={onPress}
        isHovered={isHover}
        // Styles
        position="relative"
        alignItems="center"
        justifyContent="center"
        paddingX={`${paddingX}px`}
        paddingY={`${paddingY}px`}
        borderRadius={borderRadius}
        borderColor={stylesBasedOnState.borderColor}
        borderWidth={rest.borderWidth}
        backgroundColor={
          iconBackgroundColor || stylesBasedOnState.backgroundColor
        }
        flexDirection="row"
        _hover={{
          borderColor: hover.borderColor,
          borderWidth: hover.borderWidth,
        }}
        _focus={{
          backgroundColor: iconBackgroundColor || active.backgroundColor,
        }}
        _pressed={{
          borderColor: active.borderColor,
          borderWidth: active.borderWidth,
          backgroundColor: iconBackgroundColor || active.backgroundColor,
        }}
      >
        {isLoading ? (
          <Spinner size={lineHeight} color={stylesBasedOnState.textColor} />
        ) : (
          <>
            {iconVariant && variant !== 'text' && (
              <View style={[styles.iconContainer]}>
                <Icon
                  variant={iconVariant}
                  width={iconBasedOnSize[size]}
                  height={iconBasedOnSize[size]}
                  color={iconColor || stylesBasedOnState.textColor}
                />
              </View>
            )}
            {!iconVariant && icon && variant !== 'text' && (
              <View style={[styles.iconContainer]}>{icon}</View>
            )}
            {variant !== 'icon' && (
              <TypographyV2
                variant={fontBasedOnVariantAndSize}
                selectable={false}
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
