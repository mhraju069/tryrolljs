import { fromTemplate } from '../../../.storybook/utils'
import { StatusV2, StatusComponentProps } from '.'

const DEFAULT_TITLE = 'Label Text'

const conf = {
  title: 'Design System/Atoms/StatusV2',
  component: StatusV2,
}

const Template = ({ title = DEFAULT_TITLE, ...rest }: StatusComponentProps) => (
  <StatusV2 title={title} {...rest} />
)

export const Success = fromTemplate(Template, {
  status: 'success',
  title: 'Completed',
})

export const Warning = fromTemplate(Template, {
  status: 'warning',
  title: 'In progress',
})

export const ErrorFailed = fromTemplate(Template, {
  status: 'error',
  title: 'Failed',
})

export const ErrorRejected = fromTemplate(Template, {
  status: 'error',
  title: 'Rejected',
})

export const Action = fromTemplate(Template, {
  status: 'action',
  title: 'Ready to submit',
})

export default conf
