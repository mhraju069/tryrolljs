import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { CopyLink, CopyLinkProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('CopyLink'),
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
