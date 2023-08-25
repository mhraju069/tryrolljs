import { fromTemplate } from '../../../.storybook/utils'
import { TokenSelect, TokenSelectProps } from '.'

const storyConfig = {
  title: 'Design System/Organisms/TokenSelect',
  component: TokenSelect,
}

const Template = (props: TokenSelectProps) => <TokenSelect {...props} />

export const Default = fromTemplate(Template, {
  options: [
    { name: 'Ether', symbol: 'ETH', value: 'ETH', address: '0x00' },
    { name: 'Wrapped Ether', symbol: 'WETH', value: 'WETH', address: '0x01' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC', address: '0x02' },
  ],
})

export default storyConfig
