import { action } from '@storybook/addon-actions'
import { titleBuilder } from '../../../.storybook/utils'
import { Web3ProviderNew } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { AccountDropdownNew } from '.'

const conf = {
  title: titleBuilder.molecules('AccountDropdownNew'),
  component: AccountDropdownNew,
}

export const Default = () => {
  return (
    <Web3ProviderNew
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      wallectConnectProjectId="b49bc876391bc029b19959a66a911b80"
    >
      <AccountDropdownNew
        onSwitchAccounts={action('action.onSwitchAccounts')}
      />
    </Web3ProviderNew>
  )
}

export default conf
