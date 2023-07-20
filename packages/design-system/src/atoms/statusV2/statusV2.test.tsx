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

  it('renders correctly with custom text color', () => {
    const status = 'error'
    const title = 'Failed'
    const textColor = '#EB5757' // Custom text color

    renderComponent({ status, title, textColor })

    const container = screen.getByTestId('statusContainer')
    const text = screen.getByText(title)

    expect(container).toBeDefined()
    expect(text).toBeDefined()

    const textStyle = text.props.style.find(
      (style: { color: string }) => style.color !== undefined,
    )
    expect(textStyle).toHaveProperty('color', textColor)
  })
})
