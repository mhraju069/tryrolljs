import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import ArrowDownCircle from '../../assets/svg/arrowDownCircle.svg'
import { Input, InputProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Input'),
  component: Input,
}

const Template = (props: InputProps) => <Input {...props} />

export const Default = fromTemplate(Template, {
  placeholder: 'Input a text',
})
export const Numeric = fromTemplate(Template, {
  placeholder: 'Input a number',
  type: 'number',
})
export const WithRight = fromTemplate(Template, {
  placeholder: 'Input a text',
  right: <ArrowDownCircle />,
})
export const NonEditable = fromTemplate(Template, {
  placeholder: 'Input a text',
  editable: false,
})
export const Disabled = fromTemplate(Template, {
  placeholder: 'Input a text',
  value: 'Anything',
  disabled: true,
})

export default storyConfig
