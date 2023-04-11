import { useCallback } from 'react'
import { Pressable, View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'
import { CircleImg } from '../circleImg'
import { TypographyV2 } from '../typographyV2'

export type TokenSelectOptionV2Type = {
  name: string
  symbol: string
  logo?: string
  value: string
  address: string
}

interface TokenSelectOptionV2Props extends TokenSelectOptionV2Type {
  onChange?: (value: string) => void
  onClose?: () => void
}

export const TokenSelectOptionV2: React.FC<TokenSelectOptionV2Props> = ({
  value,
  name,
  symbol,
  logo,
  onChange,
  onClose,
}) => {
  const theme = useThemeV2()
  const handlePressOption = useCallback(() => {
    onChange?.(value)
    onClose?.()
  }, [onChange, value, onClose])
  return (
    <Pressable
      key={value}
      style={[
        container.row,
        container.justifySpaceBetween,
        container.fullWidth,
        container.alignCenter,
        padding.p8,
      ]}
      onPress={handlePressOption}
      testID={`tokenSelectOption__${value}`}
    >
      <View style={[container.row, container.alignCenter]}>
        <CircleImg size={32} uri={logo} />
        <TypographyV2
          variant="caption1"
          style={margin.ml16}
          color={theme.text.black[100]}
        >
          {symbol}
        </TypographyV2>
      </View>
      <TypographyV2 variant="text3" color={theme.text.black[80]}>
        {name}
      </TypographyV2>
    </Pressable>
  )
}
