import { View, StyleSheet } from 'react-native'
import { useMemo } from 'react'
import color from 'color'
import { TypographyV2 } from '../typographyV2'
import { useThemeV2 } from '../../hooks'

const BORDER_RADIUS = 8
type Status = 'warning' | 'error' | 'success' | 'action'

export type StatusComponentProps = {
  status: Status
  title: string
  textColor: string
}

const useTextColor = (status: Status) => {
  const theme = useThemeV2()

  switch (status) {
    case 'warning':
      return theme.base.warning
    case 'error':
      return theme.base.danger
    case 'success':
      return theme.base.success
    case 'action':
      return theme.base.highlight1
    default:
      return theme.text.black[100]
  }
}

const useStyles = (status: Status) => {
  const theme = useThemeV2()

  const backgroundColor = useMemo(() => {
    switch (status) {
      case 'warning':
        return theme.base.warning
      case 'error':
        return theme.base.danger
      case 'success':
        return theme.base.success
      case 'action':
        return theme.base.highlight1
    }
  }, [status, theme])
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          borderRadius: BORDER_RADIUS,
          paddingHorizontal: 12,
          paddingVertical: 8,
          alignItems: 'center',
          alignSelf: 'flex-start',
          backgroundColor: color(backgroundColor).alpha(0.16).string(),
        },
      }),
    [backgroundColor],
  )

  return styles
}

export const StatusV2: React.FC<StatusComponentProps> = ({ status, title }) => {
  const styles = useStyles(status)
  const textColor = useTextColor(status)
  return (
    <View style={styles.container} testID="statusContainer">
      {/* <View style={{ backgroundColor: styles.container.backgroundColor }}> */}
      <TypographyV2 variant="caption2" color={textColor}>
        {title}
      </TypographyV2>
      {/* </View> */}
    </View>
  )
}
