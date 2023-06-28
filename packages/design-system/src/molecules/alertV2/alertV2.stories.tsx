import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import AlertV2 from '.'

const titleText = 'Once configured you’ll be required to enter both your password and an authentication code from your mobile phone in order to sign in.'

const conf = {
  title: titleBuilder.molecules('AlertV2'),
  component: AlertV2,
}

const Template = (props: any) => <AlertV2 {...props} />

export const Default = fromTemplate(Template, {
  title: 'Alert',
  variant: 'info',
  showButton: false,
  titleText: titleText,
  iconVariant: 'infoCircle',
})

export const Danger = fromTemplate(Template, {
  title: 'Alert',
  variant: 'danger',
  showButton: false,
  titleText: titleText,
})

export const DangerAction = fromTemplate(Template, {
  title: 'Alert',
  variant: 'danger',
  showButton: true,
  buttonText: 'Label Button',
  titleText: titleText,
})

export const DefaultAction = fromTemplate(Template, {
  title: 'Alert',
  variant: 'info',
  showButton: true,
  buttonText: 'Label Button',
  titleText: titleText,
})

export default conf
