import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { ToolTip, ToolTipProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Tooltip'),
  component: ToolTip,
}

const Template = (props: ToolTipProps) => (
  <ToolTip {...props}>
    <span>Hover me</span>
  </ToolTip>
)

export const Default = fromTemplate(Template, { title: 'Default' })
export const Membership = fromTemplate(Template, {
  title:
    'Tiers are membership levels that you can access with lots of tokens. Claim lots below to become a member of this community.',
  isMembership: true,
})

export default storyConfig
