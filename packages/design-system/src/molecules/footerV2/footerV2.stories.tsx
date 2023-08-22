import { View } from 'react-native'
import { faqUrl, resourceCenterUrl, stakingTermsUrl } from '../../constants'
import { FooterV2 } from '.'

const storyConfig = {
  title: 'Design System/Molecules/Footer V2',
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
    <View style={{ marginTop: 20, alignItems: 'center' }}>
      <FooterV2 navigation={navigation} />
    </View>
  )
}

export default storyConfig
