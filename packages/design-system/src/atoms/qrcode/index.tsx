import ReactQRCode from 'react-qr-code'
import { View, StyleSheet } from 'react-native'

export type QRCodeProps = {
  value: string
  size?: number
}
const styles = StyleSheet.create({
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
