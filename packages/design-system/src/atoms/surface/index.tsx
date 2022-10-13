import { StyleProp, View, ViewStyle } from 'react-native'
import { container } from '../../styles'

type Props = {
  style?: StyleProp<ViewStyle>
}

export const Surface: React.FC<Props> = ({ style, children }) => {
  return (
    <View style={[container.borderRadius, container.shadow, style]}>
      {children}
    </View>
  )
}
