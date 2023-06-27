import { View, StyleSheet, GestureResponderEvent } from 'react-native'
import { TypographyV2, Icon, IconProps } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { ButtonV2 } from '../../atoms'
import { useBreakpointValue } from 'native-base'
import { useMemo } from 'react'

type AlertProps = {
  title: string
  variant?: 'info' | 'danger'
  showButton?: boolean
  buttonText?: string
  textColor?: string
  iconVariant?: IconProps['variant']
  onPress?: (e?: GestureResponderEvent) => void
}

const useStyles = (variant: 'info' | 'danger') => {
  const theme = useThemeV2()
  const buttonMarginLeft = useBreakpointValue({ md: 16 })
  const containerMaxWidth = useBreakpointValue({ base: '100%', md: 600 })
  const backgroundColor =
    variant === 'danger' ? theme.base.danger : theme.base.highlight2[10]
  const colorDanger = theme.text.white[100]
  const colorInfo = theme.text.black[100]
  const iconBackgroundColor = variant === 'danger' ? theme.base.primary[10] : ''

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          borderRadius: 16,
          padding: 16,
          margin: 16,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          maxWidth: useBreakpointValue({ base: '100%', md: 600 }),
          alignSelf: useBreakpointValue({ base: 'stretch', md: 'flex-start' }),
          backgroundColor,
        },
        iconContainer: {
          marginRight: 8,
          backgroundColor: iconBackgroundColor,
          padding: 6,
          borderRadius: 100,
          color: variant === 'danger' ? colorDanger : colorInfo,
        },
        textContainer: {
          flex: 1,
          padding: 8,
        },
        textTitleDanger: {
          color: colorDanger,
        },
        buttonContainer: {
          marginLeft: buttonMarginLeft,
          borderLeftWidth: 1,
          borderColor: theme.base.primary[20],
        },
      }),
    [
      variant,
      buttonMarginLeft,
      containerMaxWidth,
      backgroundColor,
      iconBackgroundColor,
      colorDanger,
      colorInfo,
    ],
  )
  return styles
}

const AlertV2: React.FC<AlertProps> = ({
  title,
  variant = 'info' || 'danger',
  iconVariant,
  showButton = false,
  onPress,
  buttonText = 'Label Button',
}) => {
  const styles = useStyles(variant)
  const theme = useThemeV2()

  return (
    <View style={styles.container} testID="alertContainer">
      <View style={styles.iconContainer}>
        <Icon
          variant={iconVariant || 'infoCircle'}
          color={styles.iconContainer.color}
          testID="icon"
        />
      </View>
      <TypographyV2
        variant="text4"
        style={styles.textContainer}
        color={
          variant === 'danger' ? theme.text.white[100] : theme.text.black[100]
        }
      >
        {title &&
          'Once configured you’ll be required to enter both your password and an authentication code from your mobile phone in order to sign in.'}
      </TypographyV2>
      {buttonText && showButton && (
        <View style={styles.buttonContainer}>
          <ButtonV2
            title={buttonText}
            variant="text"
            textColor={
              variant === 'danger'
                ? theme.text.white[100]
                : theme.text.black[100]
            }
            onPress={onPress}
          />
        </View>
      )}
    </View>
  )
}

export default AlertV2
