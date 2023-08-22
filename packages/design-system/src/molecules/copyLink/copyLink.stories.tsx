import { fromTemplate } from '../../../.storybook/utils'
import { CopyLink, CopyLinkProps } from '.'

const storyConfig = {
  title: 'Design System/Molecules/CopyLink',
  component: CopyLink,
}

const Template = (props: CopyLinkProps) => <CopyLink {...props} />

export const Default = fromTemplate(Template, {
  url: 'https://www.google.com/somelonglinkthatisverylong',
})

export const MaxLengthSet = fromTemplate(Template, {
  url: 'https://www.google.com/somelonglinkthatisverylong',
  maxLength: 20,
})

export default storyConfig
