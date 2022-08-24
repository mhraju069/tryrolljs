import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Button, ButtonProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Button'),
  component: Button,
}

const Template = (props: ButtonProps) => <Button {...props} />

export const Primary = fromTemplate(Template, {
  type: 'primary',
  title: 'Click me',
})

export const Secondary = fromTemplate(Template, {
  type: 'secondary',
  title: 'Click me',
})

export const Disabled = fromTemplate(Template, {
  type: 'disabled',
  title: 'Click me',
})

export const Minimal = fromTemplate(Template, {
  type: 'minimal',
  title: 'Click me',
})

export default storyConfig
