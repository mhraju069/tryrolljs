import { useBreakpointValue, View } from 'native-base'
import { ReactNode, ReactElement, Children, cloneElement } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SubHeader } from '../../atoms'
import { container, margin } from '../../styles'

export interface InformationItemProps {
  label: string
  value: ReactNode
  style?: StyleProp<ViewStyle>
}

export interface InformationProps {
  children:
    | ReactElement<InformationItemProps>
    | ReactElement<InformationItemProps>[]
}

export const Information = ({ children }: InformationProps) => {
  const childrenCount = Children.count(children)
  return (
    <View>
      {Children.map(children, (child, index) => {
        const isLast = index + 1 === childrenCount
        return cloneElement(child, {
          ...child.props,
          style: [child.props.style, !isLast && margin.mb8],
        })
      })}
    </View>
  )
}

const InformationItem = ({ label, value, style }: InformationItemProps) => {
  const responsiveStyle = useBreakpointValue({
    base: undefined,
    lg: container.row,
  })
  const labelResponsiveStyle = useBreakpointValue({
    base: margin.mb4,
    lg: undefined,
  })

  return (
    <View style={[responsiveStyle, container.justifySpaceBetween, style]}>
      <SubHeader style={labelResponsiveStyle} weight="semiBold">
        {label}
      </SubHeader>
      {value}
    </View>
  )
}

Information.Item = InformationItem
