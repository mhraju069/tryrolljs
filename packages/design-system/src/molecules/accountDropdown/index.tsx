import { View } from 'native-base'
import { StyleSheet } from 'react-native'
import { Body, Anchor } from '../../atoms'
import { useTheme } from '../../hooks'
import { margins, padding, containers } from '../../styles'
import { etherscanAccountUrl, shortenAddress } from '../../utils/web3'
import Copy from '../../assets/svg/copy.svg'
import WalletIcon from '../../assets/svg/wallet.svg'
import LinkIcon from '../../assets/svg/link.svg'
import { useEthAddress } from '../../hooks/web3'

type Props = {
  onSwitchAccounts?: () => void
}

const styles = StyleSheet.create({
  container: {
    minWidth: 320,
  },
  address: {
    maxWidth: 150,
  },
})

type SwitchAccountLinkProps = {
  icon: React.ReactElement
  title: string
  onPress?: () => void
  href?: string
}

const SwitchAccountLink = ({
  icon,
  title,
  onPress,
  href,
}: SwitchAccountLinkProps) => {
  const theme = useTheme()
  return (
    <Anchor target="_blank" href={href} onPress={onPress}>
      <View style={[containers.row, containers.alignCenter, margins.mh8]}>
        {icon}
        <Body
          onPress={onPress}
          style={margins.ml4}
          color={theme.text.highlight}
        >
          {title}
        </Body>
      </View>
    </Anchor>
  )
}

export const AccountDropdown = ({ onSwitchAccounts }: Props) => {
  const theme = useTheme()
  const address = useEthAddress()
  return (
    <View style={[padding.p8, styles.container]}>
      <Body color={theme.text.secondary}>Connected with MetaMask</Body>
      <View
        style={[
          containers.row,
          styles.address,
          padding.p8,
          containers.borderRadiusXL,
          margins.mv8,
          { backgroundColor: theme.background.page },
        ]}
      >
        <Body weight="bold" style={margins.mr8}>
          {shortenAddress(address || '')}
        </Body>
        <Copy />
      </View>
      <View style={containers.row}>
        <SwitchAccountLink
          onPress={onSwitchAccounts}
          icon={<WalletIcon />}
          title="Switch Accounts"
        />
        <SwitchAccountLink
          icon={<LinkIcon />}
          title="View on Etherscan"
          href={etherscanAccountUrl(address || '')}
        />
      </View>
    </View>
  )
}
