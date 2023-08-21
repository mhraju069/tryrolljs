import { Pressable } from '@gluestack-ui/react'
import { View } from 'react-native'
import { CircleImg } from '../../atoms'
import { TypographyV2 } from '../../atoms/typographyV2'
import { useThemeV2, useBreakpointValue } from '../../hooks'
import { container, margin } from '../../styles'

interface TokenAppearanceProps {
  logo: string
  name: string
  symbol: string
  action: {
    title: string
    onPress: () => void
  }
}
export const TokenAppearance: React.FC<TokenAppearanceProps> = ({
  logo,
  name,
  symbol,
  action,
}) => {
  const theme = useThemeV2()
  const isMobile = useBreakpointValue({ base: true, xl: false })
  const circleSize = useBreakpointValue({ base: 24, xl: 32 })
  const infoContainerStyles = useBreakpointValue({
    base: [container.row, container.alignCenter],
    xl: [container.alignCenter],
  })
  const containerStyles = useBreakpointValue({
    base: [container.row, container.justifySpaceBetween, container.alignCenter],
    xl: [],
  })
  const symbolStyles = useBreakpointValue({
    base: [margin.ml16],
    xl: [margin.mb8],
  })
  return (
    <View
      style={[container.alignCenter, container.fullWidth, ...containerStyles]}
    >
      <View style={infoContainerStyles}>
        <CircleImg uri={logo} size={circleSize} />
        {!isMobile && (
          <TypographyV2
            variant="caption2"
            color={theme.text.black[100]}
            style={[margin.mt4]}
          >
            {name}
          </TypographyV2>
        )}
        <TypographyV2
          variant="caption2"
          color={theme.text.black[30]}
          style={symbolStyles}
        >
          ${symbol}
        </TypographyV2>
      </View>
      <Pressable onPress={action.onPress}>
        <TypographyV2 variant="caption2" color={theme.base.highlight1}>
          {action.title}
        </TypographyV2>
      </Pressable>
    </View>
  )
}
