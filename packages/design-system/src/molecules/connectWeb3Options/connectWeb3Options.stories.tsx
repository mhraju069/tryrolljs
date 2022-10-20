import { titleBuilder } from '../../../.storybook/utils'
import { withThemeProvider, withWeb3Provider } from '../../hoc'
import { ConnectWeb3Options } from '.'

const conf = {
  title: titleBuilder.molecules('ConnectWeb3Options'),
  component: ConnectWeb3Options,
}

export const WebOptions = () =>
  withWeb3Provider(
    withThemeProvider(
      <ConnectWeb3Options
        onClose={() => alert('on close event')}
        onSelect={() => alert('on select event')}
      />,
    ),
  )

export const MobileOptions = () =>
  withWeb3Provider(
    withThemeProvider(
      <ConnectWeb3Options
        mobile={true}
        onClose={() => alert('on close event')}
        onSelect={() => alert('on select event')}
      />,
    ),
  )

export default conf
