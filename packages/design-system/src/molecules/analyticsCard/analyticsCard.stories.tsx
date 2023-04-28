import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { AnalyticsCard, AnalyticsCardProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('AnalyticsCard'),
  component: AnalyticsCard,
}

const Template = (props: AnalyticsCardProps) => <AnalyticsCard {...props} />

export const Default = fromTemplate(Template, {
  title: 'Market Cap',
  iconVariant: 'coin2',
  value: '$ 33M',
  change: 13,
  changeHint: '+2M last 24hrs',
})

export default storyConfig
