import { Text } from 'react-native'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Tooltip, TooltipProps, TooltipVariant } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Tooltip'),
  component: Tooltip,
}

const Template = (props: TooltipProps) => (
  <Tooltip {...props}>
    <Text>Hover me</Text>
  </Tooltip>
)

export const Default = fromTemplate(Template, { title: 'Default' })
export const Dark = fromTemplate(Template, {
  title:
    'Tiers are membership levels that you can access with lots of tokens. Claim lots below to become a member of this community.',
  variant: TooltipVariant.Dark,
})

export default storyConfig
