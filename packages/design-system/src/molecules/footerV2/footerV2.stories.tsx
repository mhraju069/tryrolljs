import { View } from 'native-base'
import { titleBuilder } from '../../../.storybook/utils'
import { FooterV2 } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Footer V2'),
  component: FooterV2,
}

export const Default = () => {
  return (
    <View marginTop={20} alignItems="center">
      <FooterV2 />
    </View>
  )
}

export default storyConfig
