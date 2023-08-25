import { action } from '@storybook/addon-actions'
import { fromTemplate } from '../../../.storybook/utils'
import { Result } from './index'
import type { ResultProps } from './index'

const storyConfig = {
  title: 'Design System/Molecules/Result',
  component: Result,
}

const Template = (props: ResultProps) => <Result {...props} />

export const Default = fromTemplate(Template, {
  title: 'Creating earn code...',
  description:
    'Your earn code is being created. You can check the status in the History section',
  actions: [
    {
      title: 'Go to Dashboard',
      onPress: action('actions[0].onPress'),
    },
    {
      title: 'View History',
      onPress: action('actions[1].onPress'),
    },
  ],
})

export const Error = fromTemplate(Template, {
  title: 'Something went wrong',
  description: 'Please, try again later.',
  variant: 'error',
  actions: [
    {
      title: 'Go to Dashboard',
      onPress: action('actions[0].onPress'),
    },
  ],
})

export const Warn = fromTemplate(Template, {
  title: 'Something went wrong',
  description: 'Please, try again later.',
  variant: 'warn',
  actions: [
    {
      title: 'Go to Dashboard',
      onPress: action('actions[0].onPress'),
    },
  ],
})

export const WithoutActions = fromTemplate(Template, {
  title: 'Creating earn code...',
  description:
    'Your earn code is being created. You can check the status in the History section',
})

export const Vertical = fromTemplate(Template, {
  title: 'Creating earn code...',
  description:
    'Your earn code is being created. You can check the status in the History section',
  layout: 'vertical',
  actions: [
    {
      title: 'Go to Dashboard',
      onPress: action('actions[0].onPress'),
    },
    {
      title: 'View History',
      onPress: action('actions[1].onPress'),
    },
  ],
})

export default storyConfig
