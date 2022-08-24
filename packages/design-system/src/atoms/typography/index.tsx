import * as React from 'react'
import { GestureResponderEvent, StyleProp, Text, TextStyle } from 'react-native'
import {
  text,
  FONT_SIZE_CAPTION,
  FONT_SIZE_SUB_CAPTION,
  FONT_SIZE_BODY,
  FONT_SIZE_HEADER,
  FONT_SIZE_SUB_HEADER,
  FONT_SIZE_LARGE_HEADER,
  FONT_SIZE_TITLE,
  FONT_SIZE_LARGE_TITLE,
} from '../../styles'

type Weights = {
  bold: FontFamily
  semiBold: FontFamily
  regular: FontFamily
}

type FontFamily = {
  fontFamily: string
}

const weights: Weights = {
  bold: text.bold,
  semiBold: text.semiBold,
  regular: text.body,
}

export const truncateMaxChars = (str: string, maxlimit = 100) => {
  return str && str.length > maxlimit
    ? `${str.substring(0, maxlimit - 3)}...`
    : str
}

type TypographyProps = {
  children: any
  style?: StyleProp<TextStyle>
  weight?: keyof Weights
  color?: string
  numberOfLines?: number
  onPress?: (event: GestureResponderEvent) => void
  underline?: boolean
}

export type TypographyBaseProps = TypographyProps & { fontSize?: number }

export const TypographyBase = React.forwardRef(
  (
    {
      numberOfLines,
      onPress,
      weight = 'regular',
      style,
      color,
      children,
      fontSize,
      underline,
    }: TypographyBaseProps,
    ref,
  ) => (
    <Text
      // react's ref does not match react-native ref type - react native using legacy ref.
      // perhaps there is a workaround to properly type it?
      // @ts-ignore
      ref={ref}
      numberOfLines={numberOfLines}
      testID="typographyBody"
      onPress={onPress}
      style={[
        {
          fontSize,
          color,
          textDecorationLine: underline ? 'underline' : 'none',
        },
        weights[weight],
        style,
      ]}
    >
      {children}
    </Text>
  ),
)

export const SubCaption = ({ ...props }: TypographyProps) => (
  <TypographyBase {...props} fontSize={FONT_SIZE_SUB_CAPTION} />
)

export const Caption = ({ ...props }: TypographyProps) => (
  <TypographyBase {...props} fontSize={FONT_SIZE_CAPTION} />
)

export const Body = React.forwardRef(({ ...props }: TypographyProps, ref) => (
  <TypographyBase ref={ref} {...props} fontSize={FONT_SIZE_BODY} />
))

export const SubHeader = ({ ...props }: TypographyProps) => (
  <TypographyBase {...props} fontSize={FONT_SIZE_SUB_HEADER} />
)

export const Header = ({ ...props }: TypographyProps) => (
  <TypographyBase {...props} fontSize={FONT_SIZE_HEADER} />
)

export const LargeHeader = ({ ...props }: TypographyProps) => (
  <TypographyBase {...props} fontSize={FONT_SIZE_LARGE_HEADER} />
)

export const Title = ({ ...props }: TypographyProps) => (
  <TypographyBase {...props} fontSize={FONT_SIZE_TITLE} />
)

export const LargeTitle = ({ ...props }: TypographyProps) => (
  <TypographyBase {...props} fontSize={FONT_SIZE_LARGE_TITLE} />
)
