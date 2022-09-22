import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Spinner, SpinnerProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Spinner'),
  component: Spinner,
}

const Template = (props: SpinnerProps) => <Spinner {...props} />

export const Default = fromTemplate(Template, {})

export const Large = fromTemplate(Template, {
  size: 'lg',
})

export const Small = fromTemplate(Template, {
  size: 'sm',
})

export default storyConfig
