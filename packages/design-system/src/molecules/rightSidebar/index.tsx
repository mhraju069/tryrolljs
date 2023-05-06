import { View } from 'native-base'
import { Dimensions, Platform, StyleSheet } from 'react-native'
import { PropsWithChildren } from 'react'

import { useThemeV2 } from '../../hooks'
import { container, margin, spacing } from '../../styles'
import { Web3Button } from '../web3Button'

export type RightSidebarProps = PropsWithChildren<{
  withConnectWallet?: boolean
}>

const RIGHT_SIDEBAR_WIDTH = 310

const styles = StyleSheet.create({
  container: {
    width: RIGHT_SIDEBAR_WIDTH,
    position: 'fixed' as any,
    right: 0,
    top: 0,
    height: '100%',
    paddingRight: spacing[20],
    paddingLeft: spacing[20],
    paddingTop: spacing[24],
    paddingBottom: spacing[16],
  },
  spacer: {
    width: RIGHT_SIDEBAR_WIDTH,
    marginLeft: spacing[40],
  },
})

export const RightSidebar: React.FC<RightSidebarProps> = ({
  children,
  withConnectWallet = false,
}) => {
  const theme = useThemeV2()
  const isNative = Platform.OS !== 'web'

  const showWeb3Button = withConnectWallet && !isNative

  const { height } = Dimensions.get('window')

  return (
    <>
      <View
        style={[
          { backgroundColor: theme.background.white, height },
          styles.container,
        ]}
      >
        {showWeb3Button && (
          <View
            style={[
              container.fullWidth,
              container.justifyStart,
              container.alignStart,
              margin.mb16,
            ]}
          >
            <Web3Button />
          </View>
        )}
        {children}
      </View>
      <View style={styles.spacer} />
    </>
  )
}
