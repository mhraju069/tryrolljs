import { AbstractConnector } from '@web3-react/abstract-connector'
import { useState, useMemo } from 'react'
import { View } from 'react-native'
import { Pressable } from '@gluestack-ui/react'
import Close from '../../assets/svg/close.svg'
import {
  text,
  makeStyles,
  container,
  padding,
  margin,
  lightestGray,
} from '../../styles'
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

const styles = makeStyles({
  wrapper: {
    minWidth: 350,
    maxWidth: 600,
  },
  option: {
    borderWidth: 1,
  },
  termsAndConditions: {
    width: '80%',
  },
})

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
    <View
      style={[
        styles.wrapper,
        container.borderRadiusXL,
        {
          backgroundColor: theme.background.primary,
        },
      ]}
    >
      <View style={[container.row, container.justifySpaceBetween, padding.p16]}>
        <SubHeader weight="bold">Connect Wallet</SubHeader>
        <Pressable onPress={onClose}>
          <Close />
        </Pressable>
      </View>
      <View
        style={[
          container.alignCenter,
          container.borderRadius,
          padding.p16,
          { backgroundColor: theme.background.primary },
        ]}
      >
        {walletOptions.map((o, i) => (
          <ConnectWalletOption
            key={i}
            active={i === selectedIdx}
            title={o.provider.title}
            logo={o.provider.logo}
            onPress={() => _select(o.connector, i)}
          />
        ))}
        <View style={[container.justifyCenter, styles.termsAndConditions]}>
          <Body style={text.center}>
            By connecting, you accept the{' '}
            <Anchor href={stakingTermsUrl}>Terms of Service</Anchor> for using
            the Roll protocol
          </Body>
        </View>
      </View>
    </View>
  )
}

type OptionProps = {
  title: string
  logo: JSX.Element
  active?: boolean
  onPress?: () => void
}

const ConnectWalletOption = ({ title, logo, active, onPress }: OptionProps) => {
  const theme = useTheme()
  return (
    <Pressable
      onPress={onPress}
      style={[
        container.row,
        container.justifySpaceBetween,
        container.borderRadiusSM,
        padding.p16,
        margin.mb8,
        container.fullWidth,
        styles.option,
        {
          borderColor: active ? theme.background.highlight : lightestGray,
        },
      ]}
    >
      <SubHeader>{title}</SubHeader>
      {logo}
    </Pressable>
  )
}
