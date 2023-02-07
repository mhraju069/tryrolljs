import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import LogoSimple from '../../assets/svg/logoSimple.svg'
import { HeaderProps } from './types'
import { HeaderV2 } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Header'),
  component: HeaderV2,
}

const Template = (props: HeaderProps) => <HeaderV2 {...props} />

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
