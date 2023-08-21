import { StyleProp, ViewStyle } from 'react-native'
import { Spinner as GluestackSpinner } from '@gluestack-ui/react'
import { useTheme } from '../../hooks'

export type SpinnerProps = {
  size?: 'small' | 'large' | number
  color?: string
  style?: StyleProp<ViewStyle>
}

export const Spinner = ({ style, size, color }: SpinnerProps) => {
  const theme = useTheme()
  const sx =
    typeof size === 'number' ? { width: size, height: size } : undefined
  return (
    <GluestackSpinner
      // @ts-ignore
      color={color || theme.text.highlight}
      size={size}
      style={style}
      sx={sx}
    />
  )
}
