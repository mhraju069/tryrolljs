import { View } from 'react-native'
import { container, margin } from '../../styles'
import { CircleImg } from '../circleImg'
import { Body } from '../typography'

export const TokenChip = ({
  symbol,
  logo,
  size = 24,
}: {
  symbol: string
  logo: string
  size?: number
}) => {
  return (
    <View style={[container.row, container.alignCenter]}>
      <CircleImg size={size} uri={logo} />
      <Body style={margin.ml4}>{symbol}</Body>
    </View>
  )
}
