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
    variant: 'info',
    showButton: false,
  })

  export const Danger = fromTemplate(Template, {
    title: 'Alert',
    variant: 'danger',
    showButton: false,
  })

  export const DangerAction = fromTemplate(Template, {
    title: 'Alert',
    variant: 'danger',
    showButton: true,
    buttonText: 'Label Button',
  })

  export const DefaultAction = fromTemplate(Template, {
    title: 'Alert',
    variant: 'info',
    showButton: true,
    buttonText: 'Label Button',
  })



  export default conf