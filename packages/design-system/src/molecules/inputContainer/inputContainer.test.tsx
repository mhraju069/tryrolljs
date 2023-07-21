import { render, screen } from '@testing-library/react-native'
import { Text } from 'react-native'
import { TryrollTestProvider } from '../../providers'
import { InputContainer } from './'

const testData = {
  label: 'Label',
  error: 'Error',
  info: 'Info',
  tooltip: 'Tooltip',
  children: 'Children',
}

describe('AlertV2', () => {
  it('renders correctly', () => {
    render(
      <InputContainer
        label={testData.label}
        error={testData.error}
        info={testData.info}
        tooltip={testData.tooltip}
      >
        <Text>{testData.children}</Text>
      </InputContainer>,
      {
        wrapper: TryrollTestProvider,
      },
    )
    const container = screen.getByTestId('inputContainer')
    const icon = screen.getByTestId('infoIcon')
    const text = screen.getByText(testData.error)
    const children = screen.getByText(testData.children)

    expect(container).toBeDefined()
    expect(icon).toBeDefined()
    expect(text).toBeDefined()
    expect(children).toBeDefined()
  })
})
