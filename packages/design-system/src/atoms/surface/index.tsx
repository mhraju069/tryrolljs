import { StyleProp, View, ViewStyle } from 'react-native'
import { containers } from '../../styles'

type Props = {
  style?: StyleProp<ViewStyle>
}

export const Surface: React.FC<Props> = ({ style, children }) => {
  return (
    <View style={[containers.borderRadius, containers.shadow, style]}>
      {children}
    </View>
  )
}
