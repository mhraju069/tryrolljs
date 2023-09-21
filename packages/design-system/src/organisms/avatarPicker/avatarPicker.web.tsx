import AvatarEditor from 'react-avatar-editor'
import { ChangeEvent, FC, useRef, useState } from 'react'
import {
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
} from '@gluestack-ui/react'
import { View, Image } from 'react-native'
import prettyBytes from 'pretty-bytes'
import { container, margin, padding, makeStyles } from '../../styles'
import { ButtonV2, Icon, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { convertBlobToDataUrl } from '../../utils'
import { Modal } from '../modal'
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
  input: {
    display: 'none',
  },
})

const AvatarPicker: FC<AvatarPickerProps> = ({
  onAvatarChange,
  maxImageSize,
  value,
}) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null)
  const [isPreview, setIsPreview] = useState(false)
  const [error, setError] = useState<string>()
  const [zoom, setZoom] = useState(1)
  const editorRef = useRef<AvatarEditor | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const theme = useThemeV2()

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setError(undefined)

    const file = e.target.files![0]

    if (maxImageSize && file.size > maxImageSize) {
      setError('Image size exceeds the allowed limit.')
      return
    }

    if (file) {
      setImage(await convertBlobToDataUrl(file))
      setIsPreview(true)
    }
  }

  const handleButtonPress = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas()
      const formattedImage = canvas.toDataURL()
      onAvatarChange?.(formattedImage)
      setImage(formattedImage)
      setIsPreview(false)
    }
  }

  const handlePreviewClose = () => {
    setImage(null)
    setIsPreview(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const previewContainerBackground = {
    backgroundColor: image ? 'transparent' : theme.base.highlight2[20],
  }

  const inputStyle = { display: 'none' }

  return (
    <View>
      <View style={[container.row, container.alignCenter]}>
        <View
          style={[
            container.center,
            previewContainerBackground,
            styles.previewContainer,
            margin.mr48,
          ]}
        >
          {image || value ? (
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

        <input
          ref={fileInputRef}
          style={inputStyle}
          type="file"
          onChange={handleImageChange}
          accept="image/png, image/jpeg, image/gif"
          data-testid="input"
        />

        <ButtonV2
          title={image ? 'Change image' : 'Upload image'}
          variant="tertiary"
          size="medium"
          onPress={handleButtonPress}
        />

        {maxImageSize && (
          <TypographyV2
            style={margin.ml48}
            variant="text4"
            color={theme.text.black[30]}
          >
            Maximum image size is {prettyBytes(maxImageSize)}
          </TypographyV2>
        )}

        {image && (
          <Modal isOpen={isPreview} onClose={handlePreviewClose}>
            <Modal.Content style={[container.center, padding.p16]}>
              <AvatarEditor
                ref={editorRef}
                image={image.toString()}
                width={250}
                height={250}
                border={[50, 50]}
                borderRadius={125}
                color={[0, 0, 0, 0.6]}
                scale={zoom}
                rotate={0}
              />

              <TypographyV2
                style={[margin.mt16, container.alignSelfStart]}
                variant="text4"
              >
                Zoom
              </TypographyV2>
              <Slider
                minValue={0}
                maxValue={2}
                defaultValue={zoom}
                onChangeEnd={setZoom}
                step={0.1}
              >
                <SliderTrack>
                  <SliderFilledTrack
                    sx={{
                      backgroundColor: theme.base.primary[100],
                    }}
                  />
                </SliderTrack>
                <SliderThumb
                  sx={{
                    backgroundColor: theme.base.primary[100],
                  }}
                />
              </Slider>

              <ButtonV2
                style={[margin.mt16, container.alignSelfEnd]}
                variant="primary"
                size="medium"
                title="Save"
                onPress={handleSave}
              />
            </Modal.Content>
          </Modal>
        )}
      </View>

      {error && (
        <TypographyV2
          style={margin.mt16}
          variant="text4"
          color={theme.base.danger}
        >
          {error}
        </TypographyV2>
      )}
    </View>
  )
}

export default AvatarPicker
