import { render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { StatusV2, StatusComponentProps } from './index'

describe('StatusV2', () => {
  const renderComponent = (props: StatusComponentProps) => {
    return render(
      <TryrollTestProvider>
        <StatusV2 {...props} />
      </TryrollTestProvider>,
    )
  }
  it('renders without errors', () => {
    const status = 'error'
    const title = 'Failed'

    renderComponent({ status, title })

    // Check if the component renders
    const statusComponent = screen.getByTestId('statusContainer')
    expect(statusComponent).toBeDefined()
  })
})
