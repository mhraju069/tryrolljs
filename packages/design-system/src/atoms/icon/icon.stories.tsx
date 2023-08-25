import { fromTemplate } from '../../../.storybook/utils'
import { Icon, IconProps } from '.'

const storyConfig = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
}

const Template = (props: IconProps) => <Icon {...props} />

export const Default = fromTemplate(Template, {
  variant: 'gasStation',
  width: 100,
  height: 100,
  color: 'red',
})

export default storyConfig
