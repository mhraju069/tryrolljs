import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TypographyV2, Icon } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { ButtonV2 } from '../../atoms'

type AlertProps = {
  title: string
  variant?: 'info' | 'danger'
  showButton?: boolean
  buttonText?: string
  textColor?: string
}

const AlertV2: React.FC<AlertProps> = ({
  title,
  variant = 'info',
  showButton = false,
  textColor,
}) => {
  const theme = useThemeV2()

  const isDanger = variant === 'danger'
  const backgroundColor = isDanger
    ? theme.base.danger
    : theme.base.highlight2[10]
  const iconColor = isDanger ? theme.text.white[100] : theme.text.black[100]
  const titleColor = isDanger ? theme.text.white[100] : theme.text.black[100]
  const iconBackgroundColor = isDanger ? theme.base.primary[10] : ''

  const styles = StyleSheet.create({
    container: {
      borderRadius: 16,
      padding: 16,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: 'fit-content',
      height: '100%',
      backgroundColor,
    },
    iconContainer: {
      marginRight: 8,
      backgroundColor: iconBackgroundColor,
      padding: 6,
      borderRadius: 100,
    },
    titleText: {
      titleColor,
      fontSize: 16,
    },
    button: {
      marginLeft: 16,
      borderLeftWidth: 1,
      borderColor: theme.base.primary[20],
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon variant="infoCircle" color={iconColor} />
      </View>
      <TypographyV2
        variant="text4"
        color={
          variant === 'danger' ? theme.text.white[100] : theme.text.black[100]
        }
      >
        {
          (title =
            'Once configured you’ll be required to enter both your password and an authentication code from your mobile phone in order to sign in.')
        }
      </TypographyV2>
      {showButton && (
        <View style={styles.button}>
          <ButtonV2
            title="Label Button"
            variant="text"
            textColor={
              variant === 'danger'
                ? theme.text.white[100]
                : theme.text.black[100]
            }
          />
        </View>
      )}
    </View>
  )
}

export default AlertV2
