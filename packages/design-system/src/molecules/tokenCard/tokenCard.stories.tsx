import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { TokenCard, TokenCardProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('TokenCard'),
  component: TokenCard,
}

const Template = (props: TokenCardProps) => <TokenCard {...props} />

export const Default = fromTemplate(Template, {
  logo: 'https://ethereum.org/static/655aaefb744ae2f9f818095a436d38b5/e1ebd/eth-diamond-purple-purple.png',
  address: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  name: 'Wagmi',
  symbol: 'WAGMI',
})

export const WithoutAddress = fromTemplate(Template, {
  logo: 'https://ethereum.org/static/655aaefb744ae2f9f818095a436d38b5/e1ebd/eth-diamond-purple-purple.png',
  name: 'Wagmi',
  symbol: 'WAGMI',
})

export default storyConfig
