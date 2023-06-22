import { action } from '@storybook/addon-actions'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import AlertV2  from '.'

const conf = {
    title: titleBuilder.molecules('AlertV2'),
    component: AlertV2,
  }

  const Template = (props: any) => (
    <AlertV2 {...props} />
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