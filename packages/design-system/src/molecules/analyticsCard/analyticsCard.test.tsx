import { render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { AnalyticsCard } from '.'

describe('AnalyticsCard', () => {
  beforeEach(() => {
    render(
      <AnalyticsCard
        title={'Market Cap'}
        iconVariant={'coin2'}
        value={'$ 33M'}
        change={13}
        changeHint={'+2M last 24hrs'}
      />,
      {
        wrapper: TryrollTestProvider,
      },
    )
  })

  it('renders correctly', async () => {
    const title = await screen.getByText('Market Cap')
    const value = await screen.getByText('$ 33M')
    const change = await screen.getByText('13%')
    const changeHint = await screen.getByText('+2M last 24hrs')

    console.log(change)

    expect(title).toBeDefined()
    expect(value).toBeDefined()
    expect(change).toBeDefined()
    expect(changeHint).toBeDefined()
  })
})
