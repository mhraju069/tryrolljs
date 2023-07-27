import { fireEvent, render, screen } from '@testing-library/react-native'
import { Pressable } from 'react-native'
import { TryrollTestProvider } from '../../providers'
import { TypographyV2 } from '../../atoms'
import { SelectV2 } from '.'

describe('Select', () => {
  it('picks options', async () => {
    const onChange = jest.fn()
    render(
      <SelectV2
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
  it('shows custom renderReference', async () => {
    const onChange = jest.fn()
    render(
      <SelectV2
        placeholder="Select an option"
        defaultValue="1"
        options={[
          { name: 'Option #1', value: '1' },
          { name: 'Option #2', value: '2' },
          { name: 'Option #3', value: '3' },
        ]}
        onChange={onChange}
        renderReference={({ value, reference, getReferenceProps }) => {
          const referenceProps = getReferenceProps()
          return (
            <Pressable
              ref={(node) => {
                // @ts-ignore
                reference(node)
              }}
              {...referenceProps}
              testID="customReference"
            >
              <TypographyV2 variant="caption1" testID="referenceValue">
                {value}
              </TypographyV2>
            </Pressable>
          )
        }}
      />,
      { wrapper: TryrollTestProvider },
    )
    const customReference = await screen.findByTestId('customReference')
    expect(customReference).toBeDefined()
    const typography = await screen.findByTestId('referenceValue')
    expect(typography.props.children).toBe('Option #1')
    fireEvent.press(customReference)
    const option2 = await screen.findByTestId('selectOption__2')
    expect(option2).toBeDefined()
    fireEvent.press(option2)
    expect(typography.props.children).toBe('Option #2')
  })
})
