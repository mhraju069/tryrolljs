import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TypographyV2, Icon } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'

type AlertProps = {
  title: string
  variant?: 'info' | 'danger'
}

const AlertV2: React.FC<AlertProps> = ({ title, variant = 'info' }) => {
  const theme = useThemeV2()

  const styles = StyleSheet.create({
    container: { 
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:
        variant === 'danger' ? theme.base.danger : theme.base.highlight2[10],
    },
    iconContainer: {
      padding: 16,
    },
    titleText: {
      color: theme.text.white[100],
      fontSize: 16,
      padding: 16,
    },
  })

  const iconName = variant === 'danger' ? 'exclamation-circle' : 'info-circle'

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon variant="infoCircle" color={theme.text.black[100]} />
      </View>
      <TypographyV2 variant="text4">
        {
          (title =
            'Once configured you’ll be required to enter both your password and an authentication code from your mobile phone in order to sign in.')
        }
      </TypographyV2>
    </View>
  )
}

export default AlertV2
