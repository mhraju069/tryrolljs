import { StyleProp, TextStyle, View } from 'react-native'
import { Body } from '../typography'
import { commafy } from '../../utils'
import { Tooltip } from '../tooltip'

export const DEFAULT_MAX_DIGITS = 4

export type ValueProps = {
  displayValue: string
  decimals: number
  maxDigits?: number
  style?: StyleProp<TextStyle>
  renderValue?: (displayVal: string) => React.ReactElement
}

const maxDigitsStr = (s: string = '', digits: number) => {
  let [n, d] = s.split('.')
  if (d) {
    return d.length > digits ? `${n}.${d.substring(0, digits)}` : `${n}.${d}`
  }
  return `${n}.${d}`
}

export const Value = ({
  displayValue,
  maxDigits = DEFAULT_MAX_DIGITS,
  style,
  renderValue,
}: ValueProps) => {
  const defaultVal = maxDigitsStr(displayValue, maxDigits)

  return (
    <Tooltip placement="top" title={displayValue}>
      <View>
        {renderValue ? (
          renderValue(commafy(displayValue, maxDigits))
        ) : (
          <Body style={style}>{commafy(defaultVal, maxDigits)}</Body>
        )}
      </View>
    </Tooltip>
  )
}
