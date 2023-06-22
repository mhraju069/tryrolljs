import { action } from '@storybook/addon-actions'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Alert } from '.'

const conf = {
    title: titleBuilder.molecules('Alert'),
    component: Alert,
  }

  const Template = (props: any) => (
    <Alert {...props} />
  )

  export const Default = fromTemplate(Template, {
    title: 'Alert',
    variant: 'info'
  })

  export const Danger = fromTemplate(Template, {
    title: 'Alert',
    variant: 'danger'
  })

  export default conf