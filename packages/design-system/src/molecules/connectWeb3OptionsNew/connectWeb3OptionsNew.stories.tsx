import { titleBuilder } from '../../../.storybook/utils'
import { Web3ProviderNew } from '../../providers'
import { ConnectWeb3OptionsNew } from '.'

const conf = {
  title: titleBuilder.molecules('ConnectWeb3OptionsNew'),
  component: ConnectWeb3OptionsNew,
}

export const WebOptions = () => (
  <Web3ProviderNew wallectConnectProjectId="b49bc876391bc029b19959a66a911b80">
    <ConnectWeb3OptionsNew
      onClose={() => console.log('on close event')}
      onSelect={() => console.log('on select event')}
    />
  </Web3ProviderNew>
)

export default conf
