import { FunctionComponent } from 'react'
import { Pressable, View } from 'native-base'
import Logo from '../../assets/svg/logo.svg'
import DiscordIcon from '../../assets/svg/discord.svg'
import InstagramIcon from '../../assets/svg/insta.svg'
import TwitterIcon from '../../assets/svg/twitter.svg'
import { Header, SubHeader } from '../../atoms'
import { useTheme } from '../../hooks'
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
import { container, margin } from '../../styles'
import { openLink } from '../../utils'

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
    <View
      style={[
        container.fullWidth,
        { backgroundColor: theme.background.lowLight },
      ]}
    >
      <View
        style={[
          container.row,
          container.alignSelfCenter,
          margin.mt40,
          margin.mb64,
        ]}
      >
        <View style={margin.mtauto}>
          <Logo />
          <SubHeader
            color={theme.background.primary}
            style={margin.mt16}
            onPress={() => openLink(`mailto:${supportEmail}`, true)}
          >
            support@tryroll.com
          </SubHeader>
        </View>
        <View style={margin.ml128}>
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
        </View>
        <View style={margin.ml128}>
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
        </View>
        <View style={margin.ml128}>
          <Header color={theme.background.primary} weight="bold">
            Connect with us
          </Header>
          <View style={[container.row, margin.mt16]}>
            {icons.map(({ Icon, url }) => (
              <Pressable
                key={url}
                onPress={() => openLink(url, true)}
                style={margin.mr24}
              >
                <Icon />
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}
