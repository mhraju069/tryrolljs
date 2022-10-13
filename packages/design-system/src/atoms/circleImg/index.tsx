import { useRef } from 'react'
import { Image, ImageStyle, StyleProp, View } from 'react-native'
import Avatar from 'boring-avatars'
import { makeStyles } from '../../styles'

type Props = {
  size?: number
  style?: StyleProp<ImageStyle>
  uri?: string
  color?: Array<string>
}

const styles = makeStyles({
  borderRadius: {
    borderRadius: 100,
  },
  bg: {
    backgroundColor: 'grey',
  },
})

export const DEFAULT_CIRCLE_IMG_SIZE = 48

export const CircleImg = ({ size, style, uri, color }: Props) => {
  const imgSize = useRef(size || DEFAULT_CIRCLE_IMG_SIZE)
  if (uri)
    return (
      <Image
        source={{ uri }}
        style={[
          styles.borderRadius,
          styles.bg,
          { height: imgSize.current, width: imgSize.current },
          style,
        ]}
      />
    )
  return (
    <View style={[styles.borderRadius, style]}>
      <Avatar size={size} name="tokens" variant="marble" colors={color} />
    </View>
  )
}
