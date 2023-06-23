import { render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import AlertV2 from './index'

describe('AlertV2', () => {
  beforeEach(() => {
    render(
      <AlertV2
        title={
          'Once configured you’ll be required to enter both your password and an authentication code from your mobile phone in order to sign in.'
        }
        variant={'info'}
        showButton={true}
        buttonText={'Label Button'}
      />,
      {
        wrapper: TryrollTestProvider,
      },
    )
  })

  it('renders correctly', () => {
    const container = screen.getByTestId('alertContainer')
    const icon = screen.getByTestId('iconInfoCircle')
    const text = screen.getByText(
      'Once configured you’ll be required to enter both your password and an authentication code from your mobile phone in order to sign in.',
    )
    const button = screen.getByText('Label Button')

    expect(container).toBeDefined()
    expect(icon).toBeDefined()
    expect(text).toBeDefined()
    expect(button).toBeDefined()
  })
})
