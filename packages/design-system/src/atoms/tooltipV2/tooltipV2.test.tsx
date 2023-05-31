import { fireEvent, render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { TypographyV2 } from '../typographyV2'
import { TooltipV2 } from '.'

describe('TooltipV2', () => {
  it('renders on hover', () => {
    render(
      <TooltipV2 title="This is a tooltip" placement="bottom">
        <TypographyV2 variant="caption1">Hover me</TypographyV2>
      </TooltipV2>,
      { wrapper: TryrollTestProvider },
    )
    const hoverMe = screen.getByText('Hover me')
    expect(hoverMe).toBeDefined()
    fireEvent(hoverMe, 'onPress')
    const tooltip = screen.getByText('This is a tooltip')
    expect(tooltip).toBeDefined()
  })
})
