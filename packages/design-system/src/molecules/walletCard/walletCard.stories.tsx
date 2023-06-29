import { action } from '@storybook/addon-actions'
import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { WalletCard, WalletCardProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('WalletCard'),
  component: WalletCard,
}

const Template = (props: WalletCardProps) => <WalletCard {...props} />

export const Default = fromTemplate(Template, {
  tokenLogo:
    'https://ethereum.org/static/655aaefb744ae2f9f818095a436d38b5/e1ebd/eth-diamond-purple-purple.png',
  tokenName: 'Wagmi',
  tokenSymbol: 'WAGMI',
  balance: '18.23',
  secondaryBalance: '100.12$',
  onPress: undefined,
})

export const Action = fromTemplate(Template, {
  tokenLogo:
    'https://ethereum.org/static/655aaefb744ae2f9f818095a436d38b5/e1ebd/eth-diamond-purple-purple.png',
  tokenName: 'Wagmi',
  tokenSymbol: 'WAGMI',
  balance: '18.23',
  secondaryBalance: '100.12$',
  onPress: action('onPress'),
})

export default storyConfig
