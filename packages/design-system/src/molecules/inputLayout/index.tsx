import { useBreakpointValue } from 'native-base'
import { forwardRef } from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { InputPropsV2, InputV2 } from '../../molecules'
import { TypographyV2 } from '../../atoms/typographyV2'
import { useThemeV2 } from '../../hooks'
import { container, margin } from '../../styles'

export interface InputLayoutProps extends InputPropsV2 {
  title: string
  description: string
}

const CONTENT_MAX_WIDTH = 448
const INPUT_MAX_WIDTH = 544

const styles = StyleSheet.create({
  inputContainer: {
    maxWidth: INPUT_MAX_WIDTH,
    flex: Platform.OS === 'web' ? 1 : undefined,
  },
})

export const InputLayout = forwardRef<TextInput, InputLayoutProps>(
  ({ title, description, ...props }, ref) => {
    const theme = useThemeV2()
    const containerResponsiveStyles = useBreakpointValue({
      md: [container.row, container.justifySpaceBetween, container.alignStart],
    })
    const contentResponsiveStyles = useBreakpointValue({
      base: [margin.mb16],
      md: [margin.mr24],
    })
    return (
      <View style={[containerResponsiveStyles]}>
        <View
          style={[contentResponsiveStyles, { maxWidth: CONTENT_MAX_WIDTH }]}
        >
          <TypographyV2
            variant="sub3"
            style={[margin.mb8]}
            color={theme.text.black[100]}
          >
            {title}
          </TypographyV2>
          <TypographyV2 variant="text3" color={theme.text.black[80]}>
            {description}
          </TypographyV2>
        </View>
        <View style={[styles.inputContainer, { maxWidth: INPUT_MAX_WIDTH }]}>
          <InputV2 ref={ref} {...props} />
        </View>
      </View>
    )
  },
)
