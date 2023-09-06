import { withWeb3Provider } from '@roll-network/web3'
import { ConnectWeb3Options } from '.'

const conf = {
  title: 'Design System/Molecules/ConnectWeb3Options',
  component: ConnectWeb3Options,
}

export const WebOptions = () =>
  withWeb3Provider(
    <ConnectWeb3Options
      onClose={() => alert('on close event')}
      onSelect={() => alert('on select event')}
    />,
  )

export const MobileOptions = () =>
  withWeb3Provider(
    <ConnectWeb3Options
      mobile={true}
      onClose={() => alert('on close event')}
      onSelect={() => alert('on select event')}
    />,
  )

export default conf
