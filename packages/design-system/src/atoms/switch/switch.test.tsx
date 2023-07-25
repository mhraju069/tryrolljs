import { fireEvent, render } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { Switch } from './index'

describe('Switch', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Switch checked={false} onPress={() => {}} testID="switch" />,
      { wrapper: TryrollTestProvider },
    )
    const switchComponent = getByTestId('switch')
    expect(switchComponent).toBeDefined()
  })

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(
      <Switch checked={false} onPress={onPressMock} testID="switch" />,
      { wrapper: TryrollTestProvider },
    )
    const switchComponent = getByTestId('switch')
    fireEvent.press(switchComponent)
    expect(onPressMock).toHaveBeenCalled()
  })

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(
      <Switch checked={false} onPress={onPressMock} testID="switch" disabled />,
      { wrapper: TryrollTestProvider },
    )
    const switchComponent = getByTestId('switch')
    fireEvent.press(switchComponent)
    expect(onPressMock).not.toHaveBeenCalled()
  })
})
