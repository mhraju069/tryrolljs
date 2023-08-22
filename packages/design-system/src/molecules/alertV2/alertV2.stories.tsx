import { fromTemplate } from '../../../.storybook/utils'
import { AlertV2, AlertProps } from '.'

const DEFAULT_TITLE =
  'Once configured you’ll be required to enter both your password and an authentication code from your mobile phone in order to sign in.'

const conf = {
  title: 'Design System/Molecules/AlertV2',
  component: AlertV2,
}

const Template = ({ title = DEFAULT_TITLE, ...rest }: AlertProps) => (
  <AlertV2 title={title} {...rest} />
)

export const Default = fromTemplate(Template, {
  variant: 'info',
  iconVariant: 'infoCircle',
})

export const Danger = fromTemplate(Template, {
  variant: 'danger',
})

export const DangerAction = fromTemplate(Template, {
  variant: 'danger',
  buttonText: 'Label Button',
})

export const DefaultAction = fromTemplate(Template, {
  variant: 'info',
  buttonText: 'Label Button',
})

export default conf
