import { View } from 'react-native'
import { containers, margins } from '../../styles'
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
    <View style={[containers.row, containers.alignCenter]}>
      <CircleImg size={size} uri={logo} />
      <Body style={margins.ml4}>{symbol}</Body>
    </View>
  )
}
