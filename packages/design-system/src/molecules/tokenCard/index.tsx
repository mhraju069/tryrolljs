import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native'
import {
  CHAIN_ID_MAIN_NET,
  getEtherscanLink,
  shortenAddress,
} from '@roll-network/web3'
import { CircleImg, Icon, useClipboardWithToast } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import RollLogoTokenCard from '../../assets/svg/roll-logo-token-card.svg'
import CardBlurText from '../../assets/images/card-blur-text.png'
import { container, margin, padding, roboto } from '../../styles'
import { openLink } from '../../utils'

const CARD_MAX_WIDTH = 325
const CARD_HEIGHT = 210
const CARD_BACKGROUND_COLOR = '#E2DFFF'
const CIRCLE_IMG_SIZE = 40
const CARD_BORDER_RADIUS = 24
const LINK_TEXT_SIZE = 14
const CONTRAC_ADDRESS_SIZE = 19
const ROLL_LOGO_WIDTH = 80
const BLUR_TEXT_WIDTH = 210
const BLUR_TEXT_HEIGHT = 24
const DECORATOR_WIDTH = 240
const DECORATOR_HEIGHT = 240
const DECORATOR_POSITION_TOP = 78
const DECORATOR_POSITION_LEFT = -81
const DECORATOR_BACKGROUND_COLOR = '#AAADFF'

const styles = StyleSheet.create({
  container: {
    width: CARD_MAX_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: CARD_BORDER_RADIUS,
    backgroundColor: CARD_BACKGROUND_COLOR,
    overflow: 'hidden',
  },
  linkText: {
    fontFamily: roboto.medium,
    fontSize: LINK_TEXT_SIZE,
  },
  contracAddress: {
    fontFamily: roboto.medium,
    fontSize: CONTRAC_ADDRESS_SIZE,
  },
  blurText: {
    color: '#fff0',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 10,
  },
  bottomText: {
    fontFamily: roboto.medium,
    fontSize: 12,
  },
  cardDecorator: {
    position: 'absolute',
    width: DECORATOR_WIDTH,
    height: DECORATOR_HEIGHT,
    top: DECORATOR_POSITION_TOP,
    left: DECORATOR_POSITION_LEFT,
    backgroundColor: DECORATOR_BACKGROUND_COLOR,
    borderRadius: DECORATOR_WIDTH / 2,
  },
})

export interface TokenCardProps {
  logo: string
  address?: string
  name: string
  symbol: string
  chainId?: number
  style?: StyleProp<ViewStyle>
}

export const TokenCard: React.FC<TokenCardProps> = ({
  logo,
  address,
  name,
  symbol,
  chainId = CHAIN_ID_MAIN_NET,
  style,
}) => {
  const theme = useThemeV2()
  const hasAddress = !!address
  const linkText = hasAddress ? 'Etherscan' : 'Draft'
  const clipboardWithToast = useClipboardWithToast()

  const onPressEtherscanLink = () => {
    if (!hasAddress) return
    const etherscanLink = getEtherscanLink({ address, type: 'token', chainId })
    openLink(etherscanLink, true)
  }

  const onPressCopyAddress = () => {
    if (!hasAddress) return
    clipboardWithToast(address)
  }

  return (
    <View
      style={[
        styles.container,
        padding.pt16,
        padding.ph24,
        padding.pb24,
        style,
      ]}
    >
      <View style={[styles.cardDecorator]} />
      <View
        style={[
          container.row,
          container.alignCenter,
          container.justifySpaceBetween,
          margin.mb24,
        ]}
      >
        <CircleImg size={CIRCLE_IMG_SIZE} uri={logo} />
        <Pressable
          onPress={onPressEtherscanLink}
          disabled={!hasAddress}
          style={[container.row, container.alignCenter]}
        >
          <Text style={[styles.linkText, { color: theme.text.black[100] }]}>
            {linkText}
          </Text>
          {hasAddress && (
            <View style={[margin.ml8]}>
              <Icon
                variant="external"
                width={LINK_TEXT_SIZE}
                color={theme.text.black[100]}
              />
            </View>
          )}
        </Pressable>
      </View>
      <View style={[margin.mb24]}>
        <Text style={[styles.linkText, margin.mb4]}>CONTRACT ADDRESS</Text>
        <View style={[container.row, container.alignCenter]}>
          {hasAddress ? (
            <>
              <Text
                style={[
                  styles.contracAddress,
                  !hasAddress && styles.blurText,
                  { color: theme.text.black[100] },
                ]}
              >
                {shortenAddress(address)}
              </Text>
              <Pressable
                onPress={onPressCopyAddress}
                style={[padding.pl12]}
                testID="copyIcon"
              >
                <Icon
                  variant="copy"
                  width={CONTRAC_ADDRESS_SIZE}
                  color={theme.text.black[100]}
                />
              </Pressable>
            </>
          ) : (
            <Image
              source={{ uri: CardBlurText }}
              style={{ width: BLUR_TEXT_WIDTH, height: BLUR_TEXT_HEIGHT }}
            />
          )}
        </View>
      </View>
      <View
        style={[
          container.row,
          container.justifySpaceBetween,
          container.alignCenter,
        ]}
      >
        <View>
          <Text
            style={[
              styles.bottomText,
              margin.mb4,
              { color: theme.text.black[100] },
            ]}
          >
            {name}
          </Text>
          <Text style={[styles.bottomText, { color: theme.text.black[100] }]}>
            <Text style={[{ color: theme.text.black[30] }]}>$</Text> {symbol}
          </Text>
        </View>
        <View style={[container.alignSelfEnd]}>
          <RollLogoTokenCard width={ROLL_LOGO_WIDTH} />
        </View>
      </View>
    </View>
  )
}
