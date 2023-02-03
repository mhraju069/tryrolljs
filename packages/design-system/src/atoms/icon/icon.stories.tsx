import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Icon, IconProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Icon'),
  component: Icon,
}

const Template = (props: IconProps) => <Icon {...props} />

export const Default = fromTemplate(Template, {
  variant: 'add',
  width: 100,
  height: 100,
  fill: 'red',
})

export default storyConfig
