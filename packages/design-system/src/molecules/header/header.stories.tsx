import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import SimpleLogo from '../../assets/svg/logoSimple.svg'
import MintingLogo from '../../assets/svg/minting-logo.svg'
import {
  discordInviteUrl,
  faqUrl,
  instaUrl,
  resourceCenterUrl,
  stakingTermsUrl,
  twitterUrl,
} from '../../constants'
import { TypographyV2 } from '../../atoms/typographyV2'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { Web3ProviderWagmi } from '../../providers/web3ProviderWagmi'
import { HeaderProps } from './types'
import { HeaderV2 } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Header'),
  component: HeaderV2,
}

const footerOptions = [
  {
    title: 'Twitter',
    link: twitterUrl,
  },
  {
    title: 'Discord',
    link: discordInviteUrl,
  },
  {
    title: 'Instagram',
    link: instaUrl,
  },
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

const Template = (props: HeaderProps) => (
  <Web3ProviderWagmi
    variant="web3Modal"
    supportedChainIds={[CHAIN_ID_MAIN_NET]}
    wallectConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID as string}
  >
    <HeaderV2 {...props}>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
      <TypographyV2 variant="h1">Hello world</TypographyV2>
    </HeaderV2>
  </Web3ProviderWagmi>
)

export const withWalletConnect = fromTemplate(Template, {
  withConnectWallet: true,
  logo: {
    desktop: <MintingLogo width={111} height={32} />,
    mobileHeader: <SimpleLogo width={32} height={32} />,
    mobileSidebar: <MintingLogo width={111} height={32} />,
  },
  footerOptionsOnMobile: footerOptions,
  selectedOptionId: 'mintToken',
  options: [
    {
      id: 'exploreCommunities',
      title: 'Explore Communities',
      onPress: () => null,
    },
    {
      id: 'mintToken',
      title: 'Mint Token',
      onPress: () => null,
    },
  ],
})

export const withoutWalletConnect = fromTemplate(Template, {
  logo: {
    desktop: <MintingLogo width={111} height={32} />,
    mobileHeader: <SimpleLogo width={32} height={32} />,
    mobileSidebar: <MintingLogo width={111} height={32} />,
  },
  footerOptionsOnMobile: footerOptions,
  selectedOptionId: 'mintToken',
  options: [
    {
      id: 'exploreCommunities',
      title: 'Explore Communities',
      onPress: () => null,
    },
    {
      id: 'mintToken',
      title: 'Mint Token',
      onPress: () => null,
    },
  ],
})

export default storyConfig
