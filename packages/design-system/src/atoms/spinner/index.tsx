import { StyleProp, ViewStyle } from 'react-native'
import { Spinner as NBSpinner } from 'native-base'
import { useTheme } from '../..'

export type SpinnerProps = {
  size?: 'sm' | 'lg' | number
  style?: StyleProp<ViewStyle>
}

export const Spinner = ({ style, size }: SpinnerProps) => {
  const theme = useTheme()
  return <NBSpinner color={theme.text.highlight} size={size} style={style} />
}
