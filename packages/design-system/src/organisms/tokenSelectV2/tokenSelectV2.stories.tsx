import { action } from '@storybook/addon-actions'
import { fromTemplate } from '../../../.storybook/utils'
import { TokenSelectV2, TokenSelectV2Props } from '.'

const storyConfig = {
  title: 'Design System/Organisms/TokenSelectV2',
  component: TokenSelectV2,
}

const Template = (props: TokenSelectV2Props) => <TokenSelectV2 {...props} />

export const Default = fromTemplate(Template, {
  onSearchContract: action('onSearchContract'),
  onSearchSymbol: action('onSearchSymbol'),
  options: [
    { name: 'Ether', symbol: 'ETH', value: 'ETH', address: '0x00' },
    { name: 'Wrapped Ether', symbol: 'WETH', value: 'WETH', address: '0x01' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC', address: '0x02' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC', address: '0x02' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC', address: '0x02' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC', address: '0x02' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC', address: '0x02' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC', address: '0x02' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC', address: '0x02' },
  ],
})

export default storyConfig
