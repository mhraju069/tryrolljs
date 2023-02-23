import { PropsWithChildren } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { container } from '../../styles'

type Props = {
  style?: StyleProp<ViewStyle>
}

export const Surface = ({ style, children }: PropsWithChildren<Props>) => {
  return (
    <View style={[container.borderRadius, container.shadow, style]}>
      {children}
    </View>
  )
}
