import { useBreakpointValue } from 'native-base'
import { PropsWithChildren } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { TypographyV2 } from '../../atoms/typographyV2'
import { useThemeV2 } from '../../hooks'
import { container, margin } from '../../styles'

export interface InputLayoutProps {
  title: string
  description: string
}

const CONTENT_MAX_WIDTH = 448
const INPUT_MAX_WIDTH = 544

const styles = StyleSheet.create({
  inputsContainer: {
    maxWidth: INPUT_MAX_WIDTH,
    flex: Platform.OS === 'web' ? 1 : undefined,
  },
})

export const InputLayout: React.FC<InputLayoutProps & PropsWithChildren> = ({
  title,
  description,
  children,
}) => {
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
      <View style={[contentResponsiveStyles, { maxWidth: CONTENT_MAX_WIDTH }]}>
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
      <View style={[styles.inputsContainer, { maxWidth: INPUT_MAX_WIDTH }]}>
        {children}
      </View>
    </View>
  )
}
