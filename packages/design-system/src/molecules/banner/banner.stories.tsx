import { fromTemplate } from '../../../.storybook/utils'
import { Banner, BannerProps } from '.'

const storyConfig = {
  title: 'Design System/Molecules/Banner',
  component: Banner,
}

const Template = (props: BannerProps) => <Banner {...props} />

export const Default = fromTemplate(Template, {
  title: 'Testing Banner component',
  variant: 'default',
})

export const WithAction = fromTemplate(Template, {
  title: 'Testing Banner',
  action: {
    title: 'Click here',
    onPress: () => null,
  },
  variant: 'warning',
})

export default storyConfig
