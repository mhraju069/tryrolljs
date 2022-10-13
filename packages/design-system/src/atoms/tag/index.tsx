import { View } from 'react-native'
import { container, padding } from '../../styles'
import { Body } from '../typography'

export const Tag = ({ title, color }: { title: string; color: string }) => {
  return (
    <View
      style={[
        container.borderRadius2XL,
        padding.p8,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Body>{title}</Body>
    </View>
  )
}
