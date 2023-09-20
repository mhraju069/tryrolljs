import { FC, useState } from 'react'
import { Image, View } from 'react-native'
import prettyBytes from 'pretty-bytes'
import ImageCropPicker from 'react-native-image-crop-picker'
import * as RNFS from 'react-native-fs'
import { container, margin, makeStyles } from '../../styles'
import { ButtonV2, Icon, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { AvatarPickerProps } from './types'

const styles = makeStyles({
  previewContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  icon: {
    width: 35,
    height: 35,
  },
})

const AvatarPicker: FC<AvatarPickerProps> = ({
  onAvatarChange,
  maxImageSize,
  value,
}) => {
  const [image, setImage] = useState<string | null>(null)
  const theme = useThemeV2()

  const handleImageChange = async () => {
    try {
      const selectedImage = await ImageCropPicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageMaxWidth: 500,
        compressImageMaxHeight: 500,
        compressImageQuality: 0.7,
      })
      if (maxImageSize && selectedImage.size > maxImageSize) {
        alert('Image size exceeds the allowed limit.')
        return
      }

      const base64 = await RNFS.readFile(selectedImage.path, 'base64')
      const dataUrl = `data:image/jpeg;base64,${base64}`

      setImage(dataUrl)
      onAvatarChange?.(dataUrl)
    } catch (e) {
      alert(e)
    }
  }

  const previewContainerBackground = {
    backgroundColor: image ? 'transparent' : theme.base.highlight2[20],
  }

  return (
    <View>
      <View style={[container.row, container.alignCenter]}>
        <View
          style={[
            container.center,
            previewContainerBackground,
            styles.previewContainer,
            margin.mr32,
          ]}
        >
          {image ? (
            <Image
              source={{ uri: image?.toString() ?? value }}
              style={styles.previewContainer}
            />
          ) : (
            <Icon
              variant="galleryAdd"
              color={theme.base.highlight2[100]}
              width={36}
              height={36}
            />
          )}
        </View>

        <ButtonV2
          title={image ? 'Change image' : 'Upload image'}
          variant="tertiary"
          size="medium"
          onPress={handleImageChange}
        />
      </View>

      {maxImageSize && (
        <TypographyV2
          style={margin.mt16}
          variant="text4"
          color={theme.text.black[30]}
        >
          Maximum image size is {prettyBytes(maxImageSize)}
        </TypographyV2>
      )}
    </View>
  )
}

export default AvatarPicker
