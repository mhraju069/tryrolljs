import { fromTemplate } from '../../../.storybook/utils'
import type { ButtonProps } from './types'
import { Button } from '.'

const storyConfig = {
  title: 'Design System/Atoms/Button',
  component: Button,
}

const Template = (props: ButtonProps) => <Button {...props} />

export const Primary = fromTemplate(Template, {
  variant: 'primary',
  title: 'Click me',
})

export const Secondary = fromTemplate(Template, {
  variant: 'secondary',
  title: 'Click me',
})

export const Disabled = fromTemplate(Template, {
  disabled: true,
  title: 'Click me',
})

export const InvertedPrimary = fromTemplate(Template, {
  variant: 'primary',
  inverted: true,
  title: 'Click me',
})

export const InvertedSecondary = fromTemplate(Template, {
  variant: 'secondary',
  inverted: true,
  title: 'Click me',
})

export default storyConfig
