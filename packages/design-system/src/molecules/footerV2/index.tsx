import { View } from 'native-base'
import { useCallback } from 'react'
import LogoIso from '../../assets/svg/logo-iso.svg'
import { Caption } from '../../atoms'
import {
  discordInviteUrl,
  faqUrl,
  instaUrl,
  resourceCenterUrl,
  stakingTermsUrl,
  twitterUrl,
} from '../../constants'
import { openLink } from '../../utils'

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
  const handlePress = useCallback(() => {
    openLink(link, true)
  }, [link])
  return (
    <View
      mr={{ md: !isLast ? '4' : 0 }}
      mb={{ base: !isLast ? '4' : 0, md: 0 }}
    >
      <Caption weight="bold" color="rgba(0, 0, 0, 0.3)" onPress={handlePress}>
        {title}
      </Caption>
    </View>
  )
}

export const FooterV2 = () => {
  return (
    <View width="full" maxWidth={1120} px="5" pt="4">
      <View
        pt="4"
        borderTopWidth={1}
        borderTopColor="#E5E5E5"
        width="full"
        alignItems={{ md: 'center' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <LogoIso />
        <View
          flex={{ md: 1 }}
          flexDir="row"
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
          ml={{ md: '4' }}
          mt={{ base: '4', md: 0 }}
        >
          <View flexDirection={{ base: 'column', md: 'row' }}>
            <FooterOption title="Twitter" link={twitterUrl} />
            <FooterOption title="Discord" link={discordInviteUrl} />
            <FooterOption title="Instagram" link={instaUrl} isLast />
          </View>
          <View
            flexDirection={{ base: 'column', md: 'row' }}
            ml={{ base: '10', md: 0 }}
          >
            <FooterOption title="FAQ" link={faqUrl} />
            <FooterOption title="Resourse Center" link={resourceCenterUrl} />
            <FooterOption
              title="Protocol Terms"
              link={stakingTermsUrl}
              isLast
            />
          </View>
        </View>
        <View ml={{ md: '4' }} mt={{ base: '4', md: 0 }}>
          <Caption weight="regular" color="rgba(0, 0, 0, 0.3)">
            ©2023 Roll
          </Caption>
        </View>
      </View>
    </View>
  )
}
