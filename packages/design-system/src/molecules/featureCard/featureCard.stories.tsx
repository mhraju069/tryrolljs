import { fromTemplate } from '../../../.storybook/utils'
import UnionSVG from '../../assets/svg/union.svg'
import { FeatureCard, FeatureCardProps } from '.'

const storyConfig = {
  title: 'Design System/Molecules/FeatureCard',
  component: FeatureCard,
}

const Template = (props: FeatureCardProps) => <FeatureCard {...props} />

export const Default = fromTemplate(Template, {
  title: 'Feature Card',
  description: 'This is a feature card',
  image: <UnionSVG width={40} height={40} />,
})

export default storyConfig
