import { fireEvent, render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { ButtonV2 } from '../buttonV2'
import { ToastV2 } from '.'

describe('ToastV2', () => {
  it('renders toast', () => {
    render(
      <ButtonV2
        variant="primary"
        size="medium"
        title="show toast"
        onPress={() =>
          ToastV2.show({
            title: 'This is a toast',
            variant: 'success',
          })
        }
      />,
      { wrapper: TryrollTestProvider },
    )
    const button = screen.getByText('show toast')
    expect(button).toBeDefined()
    fireEvent(button, 'onPress')
    const toast = screen.getByText('This is a toast')
    expect(toast).toBeDefined()
  })
  it('renders toast with action', () => {
    const action = jest.fn()
    render(
      <ButtonV2
        variant="primary"
        size="medium"
        title="show toast"
        onPress={() =>
          ToastV2.show({
            title: 'This is a toast',
            variant: 'success',
            action: {
              title: 'cta',
              onPress: action,
            },
          })
        }
      />,
      { wrapper: TryrollTestProvider },
    )
    const button = screen.getByText('show toast')
    expect(button).toBeDefined()
    fireEvent(button, 'onPress')
    const toast = screen.getByText('This is a toast')
    expect(toast).toBeDefined()
    const cta = screen.getByText('cta')
    expect(cta).toBeDefined()
    fireEvent(cta, 'onPress')
    expect(action).toHaveBeenCalled()
  })
})
