import { Pressable, StyleSheet, View } from 'react-native'
import { useBreakpointValue } from 'native-base'
import { useCallback } from 'react'
import LogoIso from '../../assets/svg/logo-iso.svg'
import { discordInviteUrl, instaUrl, twitterUrl } from '../../constants'
import { openLink } from '../../utils'
import { container, margin, padding } from '../../styles'
import { useThemeV2 } from '../../hooks'
import { TypographyV2 } from '../../atoms/typographyV2'

interface FooterOptionProps {
  title: string
  isLast?: boolean
  link: string
}
const FooterOption: React.FC<FooterOptionProps> = ({
  title,
  link,
  isLast = false,
}) => {
  const theme = useThemeV2()
  const handlePress = useCallback(() => {
    openLink(link, true)
  }, [link])
  const containerStlyes = useBreakpointValue({
    base: [!isLast && margin.mb16],
    md: [!isLast && margin.mr16],
  })
  return (
    <View style={containerStlyes}>
      <Pressable onPress={handlePress}>
        <TypographyV2 variant="caption2" color={theme.text.black[30]}>
          {title}
        </TypographyV2>
      </Pressable>
    </View>
  )
}

const DEFAULT_SOCIAL_LINKS: Omit<FooterOptionProps, 'isLast'>[] = [
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
]

const styles = StyleSheet.create({
  mainContainer: { maxWidth: 1120 },
  contentWrapper: {
    borderTopWidth: 1,
  },
  linksContainer: {
    flexDirection: 'row',
  },
})

interface FooterV2Props {
  social?: Omit<FooterOptionProps, 'isLast'>[]
  navigation: Omit<FooterOptionProps, 'isLast'>[]
}

export const FooterV2: React.FC<FooterV2Props> = ({
  social = DEFAULT_SOCIAL_LINKS,
  navigation,
}) => {
  const theme = useThemeV2()
  const contentResponsiveStyles = useBreakpointValue({
    md: [container.alignCenter, container.row],
  })
  const linksContainerResponsiveStyles = useBreakpointValue({
    base: [container.justifyStart, margin.mt16],
    md: [
      container.justifySpaceBetween,
      container.flex1,
      margin.ml16,
      { marginTop: 0 },
    ],
  })
  const socialContainerResponsiveStyles = useBreakpointValue({
    md: [container.row],
  })
  const navigationContainerResponsiveStyles = useBreakpointValue({
    base: [margin.ml40],
    md: [container.row, { marginLeft: 0 }],
  })
  const tradeMarkResponsiveStyles = useBreakpointValue({
    base: [margin.mt16],
    md: [{ marginTop: 0 }, margin.ml16],
  })

  return (
    <View
      style={[
        container.fullWidth,
        padding.ph20,
        padding.pt16,
        styles.mainContainer,
      ]}
    >
      <View
        style={[
          container.fullWidth,
          padding.pt16,
          styles.contentWrapper,
          contentResponsiveStyles,
          { borderTopColor: theme.background.silver },
        ]}
      >
        <LogoIso />
        <View style={[styles.linksContainer, linksContainerResponsiveStyles]}>
          <View style={[socialContainerResponsiveStyles]}>
            {social.map((item, index) => (
              <FooterOption
                key={item.title}
                isLast={index === social.length - 1}
                {...item}
              />
            ))}
          </View>
          <View style={[navigationContainerResponsiveStyles]}>
            {navigation.map((item, index) => (
              <FooterOption
                key={item.title}
                isLast={index === social.length - 1}
                {...item}
              />
            ))}
          </View>
        </View>
        <View style={[tradeMarkResponsiveStyles]}>
          <TypographyV2 variant="text4" color={theme.text.black[30]}>
            ©{new Date().getFullYear()} Roll
          </TypographyV2>
        </View>
      </View>
    </View>
  )
}
