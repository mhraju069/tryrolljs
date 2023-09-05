import { useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Pressable } from '@gluestack-ui/react'
import { useBreakpointValue, useThemeV2 } from '../../hooks'
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
import { ConditionalWrapper } from '../conditionalWrapper'
import { TypographyV2, TypographyVariant } from '../typographyV2'
import {
  BaseButtonProps,
  ButtonV2Props,
  fontsBasedOnSize,
  iconBasedOnSize,
  Size,
  SizeProps,
  StyleByStateProps,
  Variant,
} from './types'

const BaseButton = ({
  testID,
  variant = 'primary',
  title,
  tooltip,
  state,
  paddingHorizontal,
  paddingVertical,
  borderRadius,
  size = 'medium',
  icon,
  iconVariant,
  disabled = false,
  loading = false,
  iconColor,
  iconBackgroundColor,
  onPress,
  style,
  textColor,
}: BaseButtonProps) => {
  const [isHover, setIsHover] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const lineHeights_ = useBreakpointValue({
    base: responsiveLineHeights,
    xl: lineHeights,
  })

  const stylesBasedOnState = useMemo(() => {
    if (disabled || loading) {
      return state.disabled
    }
    if (isActive) {
      return state.active
    }
    if (isHover) {
      return state.hover
    }
    return state.idle
  }, [disabled, loading, isActive, isHover, state])

  const isUnderlined = variant === 'text' && isHover && !disabled

  const finalTextColor = textColor || stylesBasedOnState.textColor

  const styles = useMemo(() => {
    return StyleSheet.create({
      title: {
        fontWeight: '600',
        color: finalTextColor,
        borderBottomWidth: variant === 'text' ? 1 : 0,
        borderBottomColor:
          variant === 'text' && isUnderlined ? finalTextColor : 'transparent',
      },
      iconContainer: {
        color: stylesBasedOnState.textColor,
        marginRight: (icon || iconVariant) && variant !== 'icon' ? 12 : 0,
      },
    })
  }, [
    finalTextColor,
    variant,
    isUnderlined,
    stylesBasedOnState,
    icon,
    iconVariant,
  ])

  const paddingY = useMemo(() => {
    if (isActive) {
      return paddingVertical - state.active.borderWidth
    }
    if (isHover) {
      return paddingVertical - state.hover.borderWidth
    }
    return paddingVertical - state.idle.borderWidth
  }, [paddingVertical, isActive, isHover, state])

  const paddingX = useMemo(() => {
    // Icon buttons are always square so we only need to check for paddingVertical
    const padding = variant === 'icon' ? paddingVertical : paddingHorizontal
    if (isActive) {
      return padding - state.active.borderWidth
    }
    if (isHover) {
      return padding - state.hover.borderWidth
    }
    return padding - state.idle.borderWidth
  }, [paddingHorizontal, isActive, isHover, state, variant, paddingVertical])

  const fontBasedOnVariantAndSize: TypographyVariant =
    variant === 'text' && size === 'large'
      ? 'buttonText'
      : fontsBasedOnSize[size]
  const lineHeight: number = lineHeights_[fontBasedOnVariantAndSize]

  const button = (
    <Pressable
      testID={testID}
      disabled={loading || disabled}
      onHoverIn={() => setIsHover(true)}
      onHoverOut={() => setIsHover(false)}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      onPress={onPress}
      // Styles
      position="relative"
      alignItems="center"
      justifyContent="center"
      paddingHorizontal={paddingX}
      paddingVertical={paddingY}
      borderRadius={borderRadius}
      borderColor={stylesBasedOnState.borderColor}
      borderWidth={state.idle.borderWidth}
      backgroundColor={
        iconBackgroundColor || stylesBasedOnState.backgroundColor
      }
      flexDirection="row"
      sx={{
        ':hover': {
          borderColor: state.hover.borderColor,
          borderWidth: state.hover.borderWidth,
        },
        ':focus': {
          backgroundColor: iconBackgroundColor || state.active.backgroundColor,
        },
        ':active': {
          borderColor: state.active.borderColor,
          borderWidth: state.active.borderWidth,
          backgroundColor: iconBackgroundColor || state.active.backgroundColor,
        },
      }}
    >
      {loading ? (
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
              color={finalTextColor}
              style={[styles.title]}
            >
              {title}
            </TypographyV2>
          )}
        </>
      )}
    </Pressable>
  )

  return (
    <View style={[container.alignCenter, style]}>
      <ConditionalWrapper
        condition={variant === 'icon' && typeof tooltip === 'string'}
        wrapper={(children) => (
          <TooltipV2 title={tooltip as string}>{children}</TooltipV2>
        )}
      >
        {button}
      </ConditionalWrapper>
    </View>
  )
}

const useStyleByState = (variant: Variant): StyleByStateProps['state'] => {
  const theme = useThemeV2()
  switch (variant) {
    case 'primary': {
      return {
        idle: {
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
        idle: {
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
        idle: {
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
        idle: {
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
        idle: {
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
  textColor,
  ...props
}: ButtonV2Props) => {
  const responsiveSize = useBreakpointValue({
    base: size === 'large' ? 'medium' : size,
    xl: size,
  })
  const styleByState = useStyleByState(variant)
  const sizeProps = useSizeProps(responsiveSize)
  const baseButtonProps = { state: styleByState, ...sizeProps }

  return (
    <BaseButton
      variant={variant}
      size={responsiveSize}
      textColor={textColor}
      {...baseButtonProps}
      {...props}
    />
  )
}

export * from './types'
