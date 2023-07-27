import ReactQRCode from 'react-qr-code'
import { View, StyleSheet } from 'react-native'

export type QRCodeProps = {
  value: string
  size?: number
}

const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
  })
  return styles
}

export const QRCode = ({ value, size }: QRCodeProps): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.container} testID="qrCodeContainer">
      <ReactQRCode size={size} value={value} />
    </View>
  )
}
