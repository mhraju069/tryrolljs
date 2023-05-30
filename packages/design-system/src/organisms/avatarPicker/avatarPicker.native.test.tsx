import { fireEvent, render, waitFor } from '@testing-library/react-native'
import * as RNFS from 'react-native-fs'
import ImagePicker from 'react-native-image-crop-picker'
import { TryrollTestProvider } from '../../providers'
import AvatarPicker from './avatarPicker.native'

jest.mock('react-native-image-crop-picker', () => ({
  openPicker: jest.fn(),
}))

jest.mock('react-native-fs', () => ({
  readFile: jest.fn(),
}))

describe('AvatarPicker', () => {
  it('shows a button to select an image', () => {
    const { getByText } = render(<AvatarPicker />, {
      wrapper: TryrollTestProvider,
    })
    expect(getByText('Upload image')).toBeTruthy()
  })

  it('selects an image and sets the source of Image component correctly', async () => {
    const mockImage = {
      path: 'path/to/image',
      size: 1000,
      mime: 'image/jpeg',
      width: 300,
      height: 300,
    }

    const base64Str = 'base64encodedstring'
    const dataUrl = `data:image/jpeg;base64,${base64Str}`

    ;(ImagePicker.openPicker as jest.Mock).mockResolvedValue(mockImage)
    ;(RNFS.readFile as jest.Mock).mockResolvedValue(base64Str)

    const onAvatarChange = jest.fn()

    const { getByText } = render(
      <AvatarPicker onAvatarChange={onAvatarChange} />,
      {
        wrapper: TryrollTestProvider,
      },
    )

    fireEvent.press(getByText('Upload image'))

    await waitFor(() => expect(onAvatarChange).toHaveBeenCalledWith(dataUrl))
  })
})
