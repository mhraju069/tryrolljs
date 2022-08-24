import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Value, ValueProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Value'),
  component: Value,
}

const Template = (props: ValueProps) => <Value {...props} />

export const ZeroDecimal = fromTemplate(Template, {
  displayValue: '100',
  decimals: 0,
})

export const FourDecimal = fromTemplate(Template, {
  displayValue: '100.1234',
  decimals: 4,
})

export const EightDecimal = fromTemplate(Template, {
  displayValue: '100.12345678',
  decimals: 8,
})

export const EightTeenDecimal = fromTemplate(Template, {
  displayValue: '100.123456789123456789',
  decimals: 18,
})

export const TinyNum = fromTemplate(Template, {
  displayValue: '0.000000000000000008',
  decimals: 18,
})

export const LargeNum = fromTemplate(Template, {
  displayValue: '99999999.999999999999999',
  decimals: 18,
})

export default storyConfig
