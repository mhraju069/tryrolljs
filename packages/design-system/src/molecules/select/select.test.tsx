import { fireEvent, render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { Select } from '.'

describe('Select', () => {
  it('picks options', async () => {
    const onChange = jest.fn()
    render(
      <Select
        placeholder="Select an option"
        options={[
          { name: 'Option #1', value: '1' },
          { name: 'Option #2', value: '2' },
          { name: 'Option #3', value: '3' },
        ]}
        onChange={onChange}
      />,
      { wrapper: TryrollTestProvider },
    )

    const placeholder = await screen.findByText('Select an option')
    expect(placeholder).toBeDefined()
    const selectInput = await screen.findByTestId('selectInput')
    expect(selectInput).toBeDefined()

    fireEvent(selectInput, 'onFocus')

    const option1 = await screen.findByTestId('selectOption__1')
    expect(option1).toBeDefined()

    fireEvent.press(option1)

    expect(await (await screen.findByTestId('selectInput')).props.value).toBe(
      'Option #1',
    )
    expect(onChange).toHaveBeenCalledWith('1')
  })
})
