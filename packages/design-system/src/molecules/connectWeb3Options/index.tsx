import { AbstractConnector } from '@web3-react/abstract-connector'
import { useState, useMemo } from 'react'
import Close from '../../assets/svg/close.svg'
import { text } from '../../styles'
import { Anchor, SubHeader, Body } from '../../atoms'
import { useTheme, useWeb3Conntectors } from '../../hooks'
import { stakingTermsUrl } from '../../constants'
import {
  buildWalletOptionsMobile,
  buildWalletOptionsWeb,
} from './walletConnectorOptions'

type Props = {
  onSelect?: () => void
  onClose?: () => void
  mobile?: boolean
}

export const ConnectWeb3Options = ({ onSelect, onClose, mobile }: Props) => {
  const theme = useTheme()
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const { connectors, handleConnect } = useWeb3Conntectors()

  const walletOptions = useMemo(
    () =>
      mobile
        ? buildWalletOptionsMobile(connectors)
        : buildWalletOptionsWeb(connectors),
    [connectors, mobile],
  )

  const _select = (connector: AbstractConnector, idx: number) => {
    setSelectedIdx(idx)
    handleConnect(connector)
    onSelect && onSelect()
  }

  return (
    <div
      className="rounded-lg"
      style={{
        minWidth: 350,
        maxWidth: 600,
        background: theme.background.primary,
      }}
    >
      <div className="flex justify-between p-4">
        <SubHeader weight="bold">Connect Wallet</SubHeader>
        <div className="cursor-pointer" onClick={onClose}>
          <Close />
        </div>
      </div>
      <div
        className="p-4 flex flex-col items-center rounded-lg"
        style={{ backgroundColor: theme.background.primary }}
      >
        {walletOptions.map((o, i) => (
          <ConnectWalletOption
            key={i}
            active={i === selectedIdx}
            title={o.provider.title}
            logo={o.provider.logo}
            onClick={() => _select(o.connector, i)}
          />
        ))}
        <div className="w-4/5 flex justify-center">
          <Body style={text.center}>
            By connecting, you accept the{' '}
            <Anchor href={stakingTermsUrl}>Terms of Service</Anchor> for using
            the Roll protocol
          </Body>
        </div>
      </div>
    </div>
  )
}

type OptionProps = {
  title: string
  logo: JSX.Element
  active?: boolean
  onClick?: () => void
}

const ConnectWalletOption = ({ title, logo, active, onClick }: OptionProps) => {
  const theme = useTheme()
  return (
    <div
      onClick={onClick}
      className="flex flex-row justify-between rounded p-4 mb-4 w-full cursor-pointer"
      style={{
        borderWidth: 1,
        borderColor: active ? theme.background.highlight : undefined,
      }}
    >
      <SubHeader>{title}</SubHeader>
      {logo}
    </div>
  )
}
