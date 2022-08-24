import { AbstractConnector } from '@web3-react/abstract-connector'
import { Body, margins, useTheme } from '../..'
import { etherscanAccountUrl, shortenAddress } from '../../utils/web3'
import Copy from '../../assets/svg/copy.svg'
import WalletIcon from '../../assets/svg/wallet.svg'
import LinkIcon from '../../assets/svg/link.svg'
import { useEthAddress } from '../../hooks/web3'
export type HandleWeb3Connect = (c: AbstractConnector) => void

type Props = {
  onSwitchAccounts: () => void
}

export const AccountDropdwn = ({ onSwitchAccounts }: Props) => {
  const theme = useTheme()
  const address = useEthAddress()
  return (
    <div className="p-4" style={{ minWidth: 320 }}>
      <Body color={theme.text.secondary}>Connected with MetaMask</Body>
      <div
        className="flex flex-row bg-gray-200 p-2 rounded-lg my-2"
        style={{ maxWidth: 150 }}
      >
        <Body weight="bold" style={margins.mr8}>
          {shortenAddress(address || '')}
        </Body>
        <Copy />
      </div>
      <div className="flex flex-row">
        <LinkOption
          onPress={onSwitchAccounts}
          icon={<WalletIcon />}
          title="Switch Accounts"
        />
        <a
          target="_blank"
          href={etherscanAccountUrl(address || '')}
          rel="noreferrer"
        >
          <LinkOption icon={<LinkIcon />} title="View on Etherscan" />
        </a>
      </div>
    </div>
  )
}

type LinkProps = {
  icon: React.ReactElement
  title: string
  onPress?: () => void
}

const LinkOption = ({ icon, title, onPress }: LinkProps) => {
  const theme = useTheme()
  return (
    <div className="flex flex-row items-center mr-4">
      {icon}
      <Body onPress={onPress} style={margins.ml4} color={theme.text.highlight}>
        {title}
      </Body>
    </div>
  )
}
