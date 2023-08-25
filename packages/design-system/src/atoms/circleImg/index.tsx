import { Image, Platform, View } from 'react-native'
import type { ImageStyle, StyleProp } from 'react-native'
import BoringAvatar from 'boring-avatars'
import { Avatar as GluestackAvatar } from '@gluestack-ui/react'
import { makeStyles } from '../../styles'

export interface CircleImgProps {
  size?: number
  style?: StyleProp<ImageStyle>
  uri?: string
  color?: Array<string>
}

const Avatar = Platform.select({
  web: ({ size, color }: Pick<CircleImgProps, 'size' | 'color'>) => (
    <BoringAvatar size={size} variant="marble" colors={color} />
  ),
  default: ({ size }: Pick<CircleImgProps, 'size' | 'color'>) => (
    <GluestackAvatar style={{ width: size, height: size }} />
  ),
})

const styles = makeStyles({
  borderRadius: {
    borderRadius: 100,
  },
  bg: {
    backgroundColor: 'grey',
  },
})

export const DEFAULT_CIRCLE_IMG_SIZE = 48

export const CircleImg = ({
  size = DEFAULT_CIRCLE_IMG_SIZE,
  style,
  uri,
  color,
}: CircleImgProps) => {
  if (uri)
    return (
      <Image
        source={{ uri }}
        style={[
          styles.borderRadius,
          styles.bg,
          { height: size, width: size },
          style,
        ]}
      />
    )

  return (
    <View style={[styles.borderRadius, style]}>
      <Avatar size={size} color={color} />
    </View>
  )
}
