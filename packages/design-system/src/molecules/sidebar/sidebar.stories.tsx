import { View } from 'react-native'
import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import LogoSimple from '../../assets/svg/logoSimple.svg'
import { TypographyV2 } from '../../atoms/typographyV2'
import { SidebarProps } from './types'
import { Sidebar } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Sidebar'),
  component: Sidebar,
}

const Template = (props: SidebarProps) => (
  <Sidebar {...props}>
    <View>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
    </View>
  </Sidebar>
)

export const withWalletConnect = fromTemplate(Template, {
  withConnectWallet: true,
  logo: <LogoSimple />,
  options: [
    {
      title: 'Explore Communities',
      onPress: () => null,
    },
    {
      title: 'Mint Token',
      onPress: () => null,
    },
  ],
})

export const withoutWalletConnect = fromTemplate(Template, {
  logo: <LogoSimple />,
  options: [
    {
      title: 'Explore Communities',
      onPress: () => null,
    },
    {
      title: 'Mint Token',
      onPress: () => null,
    },
  ],
})

export default storyConfig
