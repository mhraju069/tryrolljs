import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import MintingLogo from '../../assets/svg/minting-logo.svg'
import SimpleLogo from '../../assets/svg/logoSimple.svg'
import { TypographyV2 } from '../../atoms/typographyV2'
import { JoinBanner, TokenAppearance } from '../../molecules'
import {
  discordInviteUrl,
  faqUrl,
  instaUrl,
  resourceCenterUrl,
  stakingTermsUrl,
  twitterUrl,
} from '../../constants'
import { Web3ProviderWagmi } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { Layout, LayoutProps } from './index'

const storyConfig = {
  title: titleBuilder.organisms('Layout'),
  component: Layout,
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

const Template = (props: LayoutProps) => (
  <Web3ProviderWagmi
    variant="web3Modal"
    supportedChainIds={[CHAIN_ID_MAIN_NET]}
    walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID as string}
  >
    <Layout {...props}>
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
    </Layout>
  </Web3ProviderWagmi>
)

export const withWalletConnect = fromTemplate(Template, {
  rightSidebarProps: {
    withConnectWallet: true,
    children: (
      <JoinBanner
        title="Join Roll Discord!"
        description="We welcome your feedback. We're passionate about connecting with creators and communities."
        action={{
          title: 'Join Discord Now',
          onPress: () => null,
        }}
      />
    ),
  },
  sidebarProps: {
    withConnectWallet: true,
    selectedOptionId: 'tokenHolders',
    header: (
      <TokenAppearance
        logo=""
        name="Harrison First"
        symbol="FIRST"
        action={{
          title: 'Change Token',
          onPress: () => null,
        }}
      />
    ),
    logo: {
      desktop: <MintingLogo width={111} height={32} />,
      mobileHeader: <SimpleLogo width={32} height={32} />,
      mobileSidebar: <MintingLogo width={111} height={32} />,
    },
    footerOnDesktop: (
      <JoinBanner
        title="Join Roll Discord!"
        description="We welcome your feedback. We're passionate about connecting with creators and communities."
        action={{
          title: 'Join Discord Now',
          onPress: () => null,
        }}
      />
    ),
    sections: [
      {
        id: 'firstSection',
        options: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            iconVariant: 'home',
            onPress: () => null,
          },
          {
            id: 'tokenManagement',
            title: 'Token Management',
            iconVariant: 'coin',
            onPress: () => null,
            nestedOptions: [
              {
                id: 'vesting',
                title: 'Vesting',
                onPress: () => null,
              },
              {
                id: 'tokenHolders',
                title: 'Token Holders',
                onPress: () => null,
              },
              {
                id: 'sendTokens',
                title: 'Send Tokens',
                onPress: () => null,
              },
            ],
          },
        ],
      },
      {
        id: 'secondSection',
        options: [
          {
            id: 'staking',
            title: 'Staking',
            iconVariant: 'coin2',
            onPress: () => null,
          },
          {
            id: 'memberships',
            title: 'Memberships',
            iconVariant: 'award',
            onPress: () => null,
          },
          {
            id: 'learnAndResources',
            title: 'Learn & Resources',
            iconVariant: 'note',
            onPress: () => null,
          },
        ],
      },
    ],
    footerOptionsOnMobile: footerOptions,
  },
})

export default storyConfig
