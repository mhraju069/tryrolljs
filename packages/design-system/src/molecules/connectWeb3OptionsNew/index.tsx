import { Pressable, View } from 'native-base'
import { useConnect } from 'wagmi'
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
import { useTheme } from '../../hooks'
import { stakingTermsUrl } from '../../constants'

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

export const ConnectWeb3OptionsNew = ({ onClose }: Props) => {
  const { connect, connectors, pendingConnector } = useConnect()
  const theme = useTheme()

  const walletOptions = connectors

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
        {walletOptions.map((connector) => (
          <ConnectWalletOption
            key={connector.id}
            disabled={!connector.ready}
            active={connector.id === pendingConnector?.id}
            title={connector.name}
            onPress={() => connect({ connector })}
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
  logo?: JSX.Element
  active?: boolean
  onPress?: () => void
  disabled?: boolean
}

const ConnectWalletOption = ({
  title,
  logo,
  active,
  onPress,
  disabled,
}: OptionProps) => {
  const theme = useTheme()
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
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
