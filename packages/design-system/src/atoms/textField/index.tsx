import { ReactNode } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types'
import { useTheme } from '../../hooks'

type Props = {
  disabled?: boolean
  onBlur?: () => void
  onFocus?: () => void
  capitalize?: boolean
  value: string
  label?: string
  placeholder?: string
  onChangeText: (val: string) => void
  style?: StyleProp<TextStyle>
  render?: ((props: RenderProps) => ReactNode) | undefined
}

export const TextField = ({
  value,
  onChangeText,
  label,
  placeholder,
  style,
  capitalize,
  onBlur,
  onFocus,
  render,
  disabled,
}: Props) => {
  const theme = useTheme()
  return (
    <TextInput
      {...{
        children: undefined,
        autoComplete: undefined,
        disabled,
        render,
        onFocus,
        onBlur,
        autoCapitalize: capitalize ? 'characters' : undefined,
        label,
        style: [{ backgroundColor: 'transparent' }, style],
        value,
        onChangeText: (val: string) => onChangeText(val.trim()),
        placeholder,
        activeOutlineColor: theme.background.highlight,
        activeUnderlineColor: theme.background.highlight,
      }}
    />
  )
}
