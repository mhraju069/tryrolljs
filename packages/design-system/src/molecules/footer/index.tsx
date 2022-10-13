import { FunctionComponent } from 'react'
import { useTheme } from '../..'
import Logo from '../../assets/svg/logo.svg'
import DiscordIcon from '../../assets/svg/discord.svg'
import InstagramIcon from '../../assets/svg/insta.svg'
import TwitterIcon from '../../assets/svg/twitter.svg'
import { Header, SubHeader } from '../../atoms'
import {
  blogUrl,
  discordInviteUrl,
  faqUrl,
  instaUrl,
  resourceCenterUrl,
  stakingTermsUrl,
  supportEmail,
  twitterUrl,
} from '../../constants'
import { margin } from '../../styles'
import { openLink } from '../../utils/functions'

interface Icon {
  Icon: FunctionComponent
  url: string
}

const icons: Icon[] = [
  {
    Icon: DiscordIcon,
    url: discordInviteUrl,
  },
  {
    Icon: TwitterIcon,
    url: twitterUrl,
  },
  {
    Icon: InstagramIcon,
    url: instaUrl,
  },
]

export const Footer = () => {
  const theme = useTheme()
  return (
    <div
      className="flex flex-col w-full"
      style={{ backgroundColor: theme.background.lowLight }}
    >
      <div className="flex self-center mt-11 mb-16">
        <div className="flex flex-col self-end">
          <Logo />
          <SubHeader
            color={theme.background.primary}
            style={margin.mt16}
            onPress={() => openLink(`mailto:${supportEmail}`, true)}
          >
            support@tryroll.com
          </SubHeader>
        </div>
        <div className="flex flex-col mx-32">
          <Header color={theme.background.primary} weight="bold">
            Company
          </Header>
          <SubHeader
            color={theme.background.primary}
            style={margin.mv8}
            onPress={() => openLink(blogUrl)}
          >
            Blog
          </SubHeader>
          <SubHeader
            color={theme.background.primary}
            onPress={() => openLink(faqUrl, true)}
          >
            FAQ
          </SubHeader>
        </div>
        <div className="flex flex-col">
          <Header color={theme.background.primary} weight="bold">
            Resources
          </Header>
          <SubHeader
            color={theme.background.primary}
            style={margin.mv8}
            onPress={() => openLink(stakingTermsUrl, true)}
          >
            Protocol Terms
          </SubHeader>
          <SubHeader
            color={theme.background.primary}
            onPress={() => openLink(resourceCenterUrl, true)}
          >
            Resource Center
          </SubHeader>
        </div>
        <div className="flex flex-col ml-32">
          <Header color={theme.background.primary} weight="bold">
            Connect with us
          </Header>
          <div className="flex mt-4">
            {icons.map(({ Icon, url }, idx) => (
              <div
                key={idx}
                onClick={() => openLink(url, true)}
                className="cursor-pointer mr-6"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
