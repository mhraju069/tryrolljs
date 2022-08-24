import { StyleProp, ViewStyle } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { useTheme } from '../..'

type Props = {
  size?: 'small' | 'large' | number
  style?: StyleProp<ViewStyle>
}

export const Activity = ({ style, size }: Props) => {
  const theme = useTheme()
  return (
    <ActivityIndicator color={theme.text.highlight} size={size} style={style} />
  )
}
