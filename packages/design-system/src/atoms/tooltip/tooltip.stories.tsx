import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Tooltip } from './index.web'
import { TooltipProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Tooltip'),
  component: Tooltip,
}

const Template = (props: TooltipProps) => <Tooltip {...props}>Hover me</Tooltip>

export const Default = fromTemplate(Template, {
  title: 'Default',
  placement: 'bottom-start',
})
export const Dark = fromTemplate(Template, {
  title:
    'Tiers are membership levels that you can access with lots of tokens. Claim lots below to become a member of this community.',
  variant: 'dark',
  placement: 'bottom-start',
})

export default storyConfig
