import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { Web3ProviderWagmi } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { Web3Button, Web3ButtonProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Web3Button'),
  component: Web3Button,
}

const Template = (props: Web3ButtonProps) => {
  return (
    <Web3ProviderWagmi
      variant="web3Modal"
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      wallectConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID as string}
    >
      <Web3Button {...props} />
    </Web3ProviderWagmi>
  )
}

export const Button = fromTemplate(Template, {
  connectedVariant: 'button',
})
export const Avatar = fromTemplate(Template, {
  connectedVariant: 'avatar',
})

export default storyConfig
