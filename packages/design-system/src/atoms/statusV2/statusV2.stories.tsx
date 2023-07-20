import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { StatusV2, StatusComponentProps } from '.'

const DEFAULT_TITLE = 'Label Text'

const conf = {
  title: titleBuilder.atoms('StatusV2'),
  component: StatusV2,
}

const Template = ({ title = DEFAULT_TITLE, ...rest }: StatusComponentProps) => (
  <StatusV2 title={title} {...rest} />
)

export const Success = fromTemplate(Template, {
  status: 'success',
  title: 'Completed',
  textColor: '#27AE60',
})

export const Warning = fromTemplate(Template, {
  status: 'warning',
  title: 'In progress',
  textColor: '#FF9900',
})

export const ErrorFailed = fromTemplate(Template, {
  status: 'error',
  title: 'Failed',
  textColor: '#EB5757',
})

export const ErrorRejected = fromTemplate(Template, {
  status: 'error',
  title: 'Rejected',
  textColor: '#EB5757',
})

export const Action = fromTemplate(Template, {
  status: 'action',
  title: 'Ready to submit',
  textColor: '#1B67D9',
})

export default conf
