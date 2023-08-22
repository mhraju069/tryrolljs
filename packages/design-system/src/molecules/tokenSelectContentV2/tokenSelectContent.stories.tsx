import { fromTemplate } from '../../../.storybook/utils'
import { TokenSelectContentV2, TokenSelectContentV2Props } from '.'

const storyConfig = {
  title: 'Design System/Molecules/TokenSelectContent',
  component: TokenSelectContentV2,
}

const Template = (props: TokenSelectContentV2Props) => (
  <TokenSelectContentV2 {...props} />
)

export const Default = fromTemplate(Template, {
  options: [
    { name: 'Ether', symbol: 'ETH', value: 'ETH', address: '0x00' },
    { name: 'Wrapped Ether', symbol: 'WETH', value: 'WETH', address: '0x01' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC', address: '0x02' },
  ],
})

export default storyConfig
