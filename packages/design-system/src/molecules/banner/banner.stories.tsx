import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { Banner, BannerProps, BannerVariant } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Banner'),
  component: Banner,
}

const Template = (props: BannerProps) => <Banner {...props} />

export const Default = fromTemplate(Template, {
  title: 'Testing Banner component',
  variant: BannerVariant.DEFAULT,
})

export const WithAction = fromTemplate(Template, {
  title: 'Testing Banner',
  action: {
    title: 'Click here',
    onPress: () => null,
  },
  variant: BannerVariant.WARNING,
})

export default storyConfig
