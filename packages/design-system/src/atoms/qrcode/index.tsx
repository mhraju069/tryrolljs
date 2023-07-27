import QRCode from 'react-qr-code'
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

export const QR_Code = ({ value, size }: QRCodeProps): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.container} testID="qrCodeContainer">
      <QRCode size={size} value={value} />
    </View>
  )
}
