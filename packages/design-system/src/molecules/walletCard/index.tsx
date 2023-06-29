import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import { useMemo } from 'react'
import { useThemeV2 } from '../../hooks'
import { container, margin, spacing } from '../../styles'
import { CircleImg, Icon, TypographyV2 } from '../../atoms'

export interface WalletCardProps {
  tokenSymbol: string
  tokenName: string
  tokenLogo: string
  balance: string
  secondaryBalance: string
  onPress?: (e: GestureResponderEvent) => void
  backgroundColor?: string
  secondaryBackgroundColor?: string
}

const CARD_MAX_WIDTH = 256
const CARD_HEIGHT = 172
const DEFAULT_CARD_BACKGROUND_COLOR = '#E2DFFF'
const CARD_BORDER_RADIUS = 24
const LOGO_SIZE = 32

const useStyles = ({
  backgroundColor = DEFAULT_CARD_BACKGROUND_COLOR,
  secondaryBackgroundColor,
}: Pick<WalletCardProps, 'backgroundColor' | 'secondaryBackgroundColor'>) => {
  const theme = useThemeV2()
  const defaultSecondaryBackgroundColor = theme.base.highlight2[20]

  return useMemo(() => {
    return StyleSheet.create({
      container: {
        width: CARD_MAX_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: CARD_BORDER_RADIUS,
        backgroundColor,
        overflow: 'hidden',
      },
      content: {
        padding: spacing[16],
      },
      footer: {
        backgroundColor:
          secondaryBackgroundColor ?? defaultSecondaryBackgroundColor,
        paddingVertical: spacing[8],
        paddingHorizontal: spacing[16],
        marginTop: 'auto',
      },
    })
  }, [
    backgroundColor,
    secondaryBackgroundColor,
    defaultSecondaryBackgroundColor,
  ])
}

export const WalletCard = ({
  tokenSymbol,
  tokenName,
  tokenLogo,
  balance,
  secondaryBalance,
  backgroundColor,
  secondaryBackgroundColor,
  onPress,
}: WalletCardProps) => {
  const styles = useStyles({ backgroundColor, secondaryBackgroundColor })

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={[container.row, container.justifySpaceBetween, margin.mb8]}
        >
          <TypographyV2 variant="caption1">{tokenSymbol}</TypographyV2>
          <CircleImg size={LOGO_SIZE} uri={tokenLogo} />
        </View>

        <TypographyV2 variant="caption2">Balance</TypographyV2>
        <View style={[container.row, container.alignEnd]}>
          <TypographyV2 style={margin.mr16} variant="sub2">
            {balance}
          </TypographyV2>
          <TypographyV2 variant="text2">{secondaryBalance}</TypographyV2>
        </View>
      </View>

      <View
        style={[
          styles.footer,
          container.row,
          container.justifySpaceBetween,
          container.alignCenter,
        ]}
      >
        <TypographyV2 variant="caption2">{tokenName}</TypographyV2>

        {onPress && (
          <Pressable onPress={onPress}>
            <Icon variant="arrowRight" />
          </Pressable>
        )}
      </View>
    </View>
  )
}
