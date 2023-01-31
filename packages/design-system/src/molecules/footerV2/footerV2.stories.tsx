import { View } from 'native-base'
import { titleBuilder } from '../../../.storybook/utils'
import { faqUrl, resourceCenterUrl, stakingTermsUrl } from '../../constants'
import { FooterV2 } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Footer V2'),
  component: FooterV2,
}

const navigation = [
  {
    title: 'FAQ',
    link: faqUrl,
  },
  {
    title: 'Resourse Center',
    link: resourceCenterUrl,
  },
  {
    title: 'Protocol Terms',
    link: stakingTermsUrl,
  },
]

export const Default = () => {
  return (
    <View marginTop={20} alignItems="center">
      <FooterV2 navigation={navigation} />
    </View>
  )
}

export default storyConfig
