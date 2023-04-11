import { fireEvent, render, screen } from '@testing-library/react-native'
import UnionSVG from '../../assets/svg/union.svg'
import { TryrollTestProvider } from '../../providers'
import { FeatureCard } from '.'

const TITLE = 'Feature Card'
const DESCRIPTION = 'This is a feature card'

const onPress = jest.fn()

describe('FeatureCard', () => {
  beforeEach(() => {
    render(
      <FeatureCard
        title={TITLE}
        description={DESCRIPTION}
        image={<UnionSVG width={40} height={40} />}
        onPress={onPress}
      />,
      {
        wrapper: TryrollTestProvider,
      },
    )
  })

  it('should render title and description', async () => {
    const title = await screen.getByText(TITLE)
    const description = await screen.getByText(DESCRIPTION)

    expect(title).toBeDefined()
    expect(description).toBeDefined()
  })

  it('should call onPress when pressed', async () => {
    const cta = await screen.findByTestId('cta')
    expect(cta).toBeDefined()
    fireEvent.press(cta)
    expect(onPress).toHaveBeenCalled()
  })
})
