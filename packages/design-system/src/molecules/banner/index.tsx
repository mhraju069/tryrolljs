import { View } from 'react-native'
import { useMemo } from 'react'
import { Body } from '../../atoms'
import { useTheme } from '../../hooks'
import { container, padding } from '../../styles'

export type BannerProps = {
  title: string
  variant?: 'default' | 'warning'
  action?: {
    title: string
    onPress: () => void
  }
}

export const Banner = ({ title, action, variant }: BannerProps) => {
  const theme = useTheme()
  const colors: { background: string; text: string } = useMemo(() => {
    if (variant === 'warning') {
      return {
        background: theme.background.error,
        text: theme.text.error,
      }
    }
    return {
      background: theme.text.highlight,
      text: theme.background.primary,
    }
  }, [variant, theme])
  return (
    <View
      style={[
        container.row,
        container.justifyCenter,
        padding.p16,
        { backgroundColor: colors.background },
      ]}
    >
      <Body weight="bold" color={colors.text}>
        {title}
        &nbsp;
      </Body>
      {!!action && (
        <Body onPress={action?.onPress} underline color={colors.text}>
          {action.title}
        </Body>
      )}
    </View>
  )
}
