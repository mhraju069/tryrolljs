import { forwardRef, useMemo, useState } from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import { container, fontStyles, padding, spacing } from '../../styles'
import { TypographyV2 } from '../../atoms/typographyV2'
import { InputContainer } from '../inputContainer'

export interface InputPropsV2 extends TextInputProps {
  value: string
  onChangeText: (text: string) => void
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  error?: string
  label?: string
  counter?: boolean
  info?: string
  tooltip?: string
  disabled?: boolean
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
  suffix: {
    position: 'absolute',
    right: spacing[16],
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prefix: {
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
      maxLength,
      error,
      value = '',
      info = '',
      tooltip = '',
      disabled = false,
      counter = false,
      prefix,
      suffix,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const theme = useThemeV2()
    const backgroundColor = !disabled
      ? theme.base.transparent
      : theme.base.primary[10]
    const borderColor = useMemo(() => {
      if (disabled) {
        return theme.base.transparent
      } else if (isFocused) {
        return theme.base.primary[100]
      } else if (error) {
        return theme.base.danger
      } else {
        return theme.base.primary[20]
      }
    }, [disabled, isFocused, theme, error])

    return (
      <InputContainer label={label} tooltip={tooltip} error={error} info={info}>
        <View style={[styles.inputContainer]}>
          {prefix && <View style={[styles.prefix]}>{prefix}</View>}
          <TextInput
            ref={ref}
            style={[
              style,
              fontStyles.text3,
              styles.input,
              container.borderRadius,
              padding.pv16,
              prefix ? padding.pl48 : padding.pl16,
              suffix ? padding.pr48 : padding.pr16,
              {
                borderColor,
                backgroundColor,
                color: theme.text.black[100],
              },
            ]}
            value={value}
            multiline={counter}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            editable={!disabled}
            placeholderTextColor={theme.text.black[40]}
            {...props}
          />
          {suffix && <View style={[styles.suffix]}>{suffix}</View>}
          {counter && maxLength && (
            <View style={[styles.count]}>
              <TypographyV2 variant="text4" color={theme.text.black[40]}>
                {value.length}/{maxLength}
              </TypographyV2>
            </View>
          )}
        </View>
      </InputContainer>
    )
  },
)
