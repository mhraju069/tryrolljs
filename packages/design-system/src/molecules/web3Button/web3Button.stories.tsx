import { CHAIN_ID_MAIN_NET, Web3ProviderWagmi } from '@roll-network/web3'
import { fromTemplate } from '../../../.storybook/utils'
import { Web3Button, Web3ButtonProps } from '.'

const storyConfig = {
  title: 'Design System/Molecules/Web3Button',
  component: Web3Button,
}

const Template = (props: Web3ButtonProps) => {
  return (
    <Web3ProviderWagmi
      variant="web3Modal"
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID as string}
    >
      <Web3Button {...props} />
    </Web3ProviderWagmi>
  )
}

export const Button = fromTemplate(Template, {
  connectedVariant: 'button',
})
export const PrimaryButton = fromTemplate(Template, {
  connectedVariant: 'button',
  variant: 'primary',
})
export const Avatar = fromTemplate(Template, {
  connectedVariant: 'avatar',
})

export default storyConfig
