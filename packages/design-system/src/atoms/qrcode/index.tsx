import ReactQRCode from 'react-qr-code'
import { View } from 'react-native'
import { makeStyles } from '../../styles'

export type QRCodeProps = {
  value: string
  size?: number
}
const styles = makeStyles({
  container: {
    justifyContent: 'center',
  },
})

export const QRCode = ({ value, size }: QRCodeProps): JSX.Element => {
  return (
    <View style={styles.container} testID="qrCodeContainer">
      <ReactQRCode size={size} value={value} />
    </View>
  )
}
