import { forwardRef, useCallback, useMemo, useState } from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import { container, fontStyles, margin, padding, spacing } from '../../styles'
import { Icon, IconVariant } from '../icon'
import { TypographyV2 } from '../typographyV2'

export interface InputPropsV2 extends TextInputProps {
  iconVariantRight?: IconVariant
  iconVariantLeft?: IconVariant
  error?: string
  label?: string
  withCount?: boolean
  info?: string
  data?: {
    title: string
    description: string
  }
  unlockedTitle?: string
  action?: {
    title: string
    onPress: () => void
  }
}

const INPUT_BORDER_WIDTH = 1
const INPUT_BORDER_RADIUS = 14
const INPUT_LINE_HEIGHT = 20

const styles = StyleSheet.create({
  count: {
    position: 'absolute',
    right: spacing[16],
    bottom: spacing[16],
  },
  inputContainer: {
    position: 'relative',
  },
  rightContent: {
    position: 'absolute',
    right: spacing[16],
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContent: {
    position: 'absolute',
    left: spacing[16],
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: INPUT_BORDER_WIDTH,
    borderRadius: INPUT_BORDER_RADIUS,
    lineHeight: INPUT_LINE_HEIGHT,
  },
})

export const InputV2 = forwardRef<TextInput, InputPropsV2>(
  (
    {
      style,
      label,
      unlockedTitle,
      maxLength,
      iconVariantRight,
      iconVariantLeft,
      error,
      value = '',
      info = '',
      action,
      data,
      editable = true,
      withCount = false,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isLocked, setIsLocked] = useState(!!unlockedTitle)
    const theme = useThemeV2()
    const backgroundColor =
      !isLocked && editable ? theme.base.transparent : theme.base.primary[10]
    const borderColor = useMemo(() => {
      if (!editable || isLocked) {
        return theme.base.transparent
      } else if (isFocused) {
        return theme.base.primary[100]
      } else if (error) {
        return theme.base.danger
      } else {
        return theme.base.primary[20]
      }
    }, [editable, isFocused, theme, error, isLocked])

    const unlocked = useCallback(() => setIsLocked(false), [])

    return (
      <View>
        {label && (
          <TypographyV2
            variant="caption1"
            color={theme.text.black[100]}
            style={[margin.mb8]}
          >
            {label}
          </TypographyV2>
        )}
        <View style={[styles.inputContainer]}>
          {iconVariantLeft && (
            <View style={[styles.leftContent]}>
              <Icon variant={iconVariantLeft} />
            </View>
          )}
          <TextInput
            ref={ref}
            style={[
              style,
              fontStyles.text3,
              styles.input,
              container.borderRadius,
              padding.pv16,
              iconVariantLeft ? padding.pl48 : padding.pl16,
              iconVariantRight ? padding.pr48 : padding.pr16,
              {
                borderColor,
                backgroundColor,
                color: theme.text.black[100],
              },
            ]}
            value={value}
            multiline={withCount}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            editable={!isLocked && editable}
            placeholderTextColor={theme.text.black[40]}
            {...props}
          />
          {isLocked && (
            <View style={[styles.rightContent]}>
              <TypographyV2
                onPress={unlocked}
                variant="buttonText"
                color={theme.base.highlight1}
              >
                {unlockedTitle}
              </TypographyV2>
            </View>
          )}
          {!isLocked && action && (
            <View style={[styles.rightContent]}>
              <TypographyV2
                onPress={action.onPress}
                variant="caption1"
                color={
                  editable ? theme.base.primary[100] : theme.text.black[40]
                }
              >
                {action.title}
              </TypographyV2>
            </View>
          )}
          {!isLocked && !action && data && (
            <View style={[styles.rightContent, container.alignEnd]}>
              <TypographyV2 variant="caption1" color={theme.text.black[100]}>
                {data.title}
              </TypographyV2>
              <TypographyV2 variant="caption2" color={theme.text.black[40]}>
                {data.description}
              </TypographyV2>
            </View>
          )}
          {!isLocked && !action && !data && iconVariantRight && (
            <View style={[styles.rightContent]}>
              <Icon variant={iconVariantRight} />
            </View>
          )}
          {withCount && maxLength && (
            <View style={[styles.count]}>
              <TypographyV2 variant="text4" color={theme.text.black[40]}>
                {value.length}/{maxLength}
              </TypographyV2>
            </View>
          )}
        </View>
        {(error || info) && (
          <TypographyV2
            variant="caption2"
            color={error ? theme.base.danger : theme.text.black[40]}
            style={[margin.mt8]}
          >
            {error || info}
          </TypographyV2>
        )}
      </View>
    )
  },
)
