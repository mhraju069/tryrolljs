import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { EstimatedGas, EstimatedGasProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('EstimatedGas'),
  component: EstimatedGas,
}

const Template = (props: EstimatedGasProps) => <EstimatedGas {...props} />

export const Default = fromTemplate(Template, {
  label: 'Estimated gas fee',
  gas: '0.013',
  logo: 'https://ethereum.org/static/655aaefb744ae2f9f818095a436d38b5/e1ebd/eth-diamond-purple-purple.png',
  symbol: 'ETH',
})

export default storyConfig
