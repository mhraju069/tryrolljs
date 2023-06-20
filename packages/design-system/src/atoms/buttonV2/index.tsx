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
import { TooltipV2 } from '../tooltipV2'
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
  variant = 'primary',
  title,
  rest,
  hover,
  disabled,
  active,
  paddingHorizontal,
  paddingVertical,
  borderRadius,
  size = 'medium',
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
    if (isActive) {
      return paddingVertical - active.borderWidth
    }
    if (isHover) {
      return paddingVertical - hover.borderWidth
    }
    return paddingVertical - rest.borderWidth
  }, [paddingVertical, isActive, isHover, active, hover, rest])

  const paddingX = useMemo(() => {
    // Icon buttons are always square so we only need to check for paddingVertical
    const padding = variant === 'icon' ? paddingVertical : paddingHorizontal
    if (isActive) {
      return padding - active.borderWidth
    }
    if (isHover) {
      return padding - hover.borderWidth
    }
    return padding - rest.borderWidth
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
  // Inside `ButtonV2` scope
  const button = (
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
                {iconVariant && (
                  <View style={[styles.iconContainer]}>
                    <Icon
                      variant={iconVariant}
                      width={iconBasedOnSize[size]}
                      height={iconBasedOnSize[size]}
                      color={iconColor || stylesBasedOnState.textColor}
                    />
                  </View>
                )}
                {!iconVariant && icon && (
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
    )
    
    return variant === 'icon' ? <TooltipV2 title={title}>{button}</TooltipV2> : button
        <TooltipV2 title='Click here to check your wallet balance'>
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
                {iconVariant && (
                  <View style={[styles.iconContainer]}>
                    <Icon
                      variant={iconVariant}
                      width={iconBasedOnSize[size]}
                      height={iconBasedOnSize[size]}
                      color={iconColor || stylesBasedOnState.textColor}
                    />
                  </View>
                )}
                {!iconVariant && icon && (
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
        </TooltipV2>
      )
        :
        (
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
                <TypographyV2
                  variant={fontBasedOnVariantAndSize}
                  selectable={false}
                  color={stylesBasedOnState.textColor}
                  style={[styles.title]}
                >
                  {title}
                </TypographyV2>
              </>
            )}
          </Pressable>
        )}
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
    //Button Icon Variant
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

export const ButtonV2 = ({
  variant = 'primary',
  size = 'medium',
  ...props
}: ButtonV2Props) => {
  const responsiveSize = useBreakpointValue({
    base: size === 'large' ? 'medium' : size,
    xl: size,
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
