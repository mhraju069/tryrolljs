import QRCode from 'react-qr-code'
import { View, StyleSheet } from 'react-native'
import { useMemo } from 'react'

export type QRCodeProps = {
  value: string
  size?: number
}

const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          justifyContent: 'center',
        },
      }),
    [],
  )
  return styles
}

export const QRCodeV2 = ({ value, size }: QRCodeProps): JSX.Element => {
  const styles = useStyles()
  return (
    <View style={styles.container} testID='qrCodeContainer'>
      <QRCode size={size} value={value} />
    </View>
  )
}
