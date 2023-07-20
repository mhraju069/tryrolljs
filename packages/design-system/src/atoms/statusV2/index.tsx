import { View, StyleSheet } from 'react-native'
import { useBreakpointValue } from 'native-base'
import { useMemo } from 'react'
import { TypographyV2 } from '../typographyV2'
import { useThemeV2 } from '../../hooks'

const BORDER_RADIUS = 8
const CONTAINER_MD_MAX_WIDTH = 200

type Status = 'warning' | 'error' | 'success' | 'action'

export type StatusComponentProps = {
  status: Status
  title: string
  textColor: string
}

const useStyles = (status: Status, textColor: string) => {
  const theme = useThemeV2()
  const containerMaxWidth = useBreakpointValue({
    base: 200,
    md: CONTAINER_MD_MAX_WIDTH,
  })
  const containerAlignSelf = useBreakpointValue({
    base: 'stretch',
    md: 'flex-start',
  })

  const backgroundColor = useMemo(() => {
    switch (status) {
      case 'warning':
        return theme.base.warning
      case 'error':
        return theme.base.danger
      case 'success':
        return theme.base.success
      case 'action':
        return theme.base.action
    }
  }, [status, theme])

  const calculatedTextColor = useMemo(() => {
    switch (status) {
      case 'warning':
        return theme.base.warning
      case 'error':
        return theme.base.danger
      case 'success':
        return theme.base.success
      case 'action':
        return theme.base.action
      default:
        return textColor || theme.text.black[100]
    }
  }, [status, theme, textColor])

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          borderRadius: BORDER_RADIUS,
          paddingHorizontal: 12,
          paddingVertical: 8,
          alignItems: 'center',
          maxWidth: containerMaxWidth,
          alignSelf: containerAlignSelf,
          backgroundColor: `${backgroundColor}26`,
        },
        textContainer: {
          flex: 1,
          alignItems: 'center',
          minWidth: 0,
        },
        titleText: {
          color: calculatedTextColor,
        },
      }),
    [
      backgroundColor,
      containerMaxWidth,
      calculatedTextColor,
      containerAlignSelf,
    ],
  )

  return styles
}

export const StatusV2: React.FC<StatusComponentProps> = ({
  status,
  title,
  textColor,
}) => {
  const styles = useStyles(status, textColor)

  return (
    <View style={styles.container} testID="statusContainer">
      <View style={{ backgroundColor: styles.container.backgroundColor }}>
        <TypographyV2
          variant="caption2"
          style={styles.textContainer}
          color={textColor}
        >
          {title}
        </TypographyV2>
      </View>
    </View>
  )
}
