import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { JoinBanner, JoinBannerProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Join Banner'),
  component: JoinBanner,
}

const Template = (props: JoinBannerProps) => <JoinBanner {...props} />

export const Default = fromTemplate(Template, {
  title: 'Join Roll Discord!',
  description: `We welcome your feedback. We're passionate about connecting with creators and communities.`,
  action: {
    title: 'Join Discord Now',
    onPress: () => null,
  },
})

export default storyConfig
