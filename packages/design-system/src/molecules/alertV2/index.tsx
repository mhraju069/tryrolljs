import { View, StyleSheet, GestureResponderEvent } from 'react-native'
import { useBreakpointValue } from 'native-base'
import { useMemo } from 'react'
import { TypographyV2, Icon, ButtonV2, IconVariant } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { spacing } from '../../styles'

type AlertVariant = 'info' | 'danger'

export type AlertProps = {
  title: string
  variant?: AlertVariant
  buttonText?: string
  textColor?: string
  iconVariant?: IconVariant
  onPress?: (e?: GestureResponderEvent) => void
}

const useStyles = (variant: AlertVariant) => {
  const theme = useThemeV2()
  const BORDER_RADIUS = 100
  const COLOR_DANGER = theme.text.white[100]
  const COLOR_INFO = theme.text.black[100]
  const buttonMarginLeft = useBreakpointValue({ md: spacing[16] })
  const containerMaxWidth = useBreakpointValue({ base: '100%', md: 600 })
  const containerAlignSelf = useBreakpointValue({
    base: 'stretch',
    md: 'flex-start',
  })
  const backgroundColor =
    variant === 'danger' ? theme.base.danger : theme.base.highlight2[10]
  const iconBackgroundColor = variant === 'danger' ? theme.base.primary[10] : ''
  const iconContainerColor = variant === 'danger' ? COLOR_DANGER : COLOR_INFO

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          borderRadius: 16,
          padding: spacing[16],
          margin: spacing[16],
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          maxWidth: containerMaxWidth,
          alignSelf: containerAlignSelf,
          backgroundColor: backgroundColor,
        },
        iconContainer: {
          marginRight: spacing[8],
          backgroundColor: iconBackgroundColor,
          padding: spacing[8],
          borderRadius: BORDER_RADIUS,
          color: iconContainerColor,
        },
        textContainer: {
          flex: 1,
          padding: spacing[8],
        },
        textTitleDanger: {
          color: COLOR_DANGER,
        },
        buttonContainer: {
          marginLeft: buttonMarginLeft,
          borderLeftWidth: 1,
          borderColor: theme.base.primary[20],
        },
      }),
    [
      iconContainerColor,
      buttonMarginLeft,
      containerMaxWidth,
      backgroundColor,
      iconBackgroundColor,
      COLOR_DANGER,
      containerAlignSelf,
      theme.base.primary,
    ],
  )
  return styles
}

export const AlertV2: React.FC<AlertProps> = ({
  title,
  variant = 'info',
  iconVariant = 'infoCircle',
  onPress,
  buttonText,
}) => {
  const styles = useStyles(variant)
  const theme = useThemeV2()

  return (
    <View style={styles.container} testID="alertContainer">
      <View style={styles.iconContainer}>
        <Icon
          variant={iconVariant}
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
        {title}
      </TypographyV2>
      {buttonText && (
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
