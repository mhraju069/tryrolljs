import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { TokenSelect, TokenSelectProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('TokenSelect'),
  component: TokenSelect,
}

const Template = (props: TokenSelectProps) => <TokenSelect {...props} />

export const Default = fromTemplate(Template, {
  options: [
    { name: 'Ether', symbol: 'ETH', value: 'ETH' },
    { name: 'Wrapped Ether', symbol: 'WETH', value: 'WETH' },
    { name: 'USD Coin', symbol: 'USDC', value: 'USDC' },
  ],
})

export default storyConfig
