import { action } from '@storybook/addon-actions'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Toast, ToastProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Toast'),
  component: Toast,
}

const Template = (props: ToastProps) => <Toast {...props} />

export const Default = fromTemplate(Template, {
  title: 'Default',
  description: 'Default toast message',
})

export const Action = fromTemplate(Template, {
  title: 'Action',
  description: 'Action toast message',
  action: {
    title: 'View details',
    onPress: action('action.onPress'),
  },
})

export default storyConfig
