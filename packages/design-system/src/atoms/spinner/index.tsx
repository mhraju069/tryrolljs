import { StyleProp, ViewStyle } from 'react-native'
import { Spinner as NBSpinner } from 'native-base'
import { useTheme } from '../../hooks'

export type SpinnerProps = {
  size?: 'sm' | 'lg' | number
  color?: string
  style?: StyleProp<ViewStyle>
}

export const Spinner = ({ style, size, color }: SpinnerProps) => {
  const theme = useTheme()
  return (
    <NBSpinner
      color={color || theme.text.highlight}
      size={size}
      style={style}
    />
  )
}
