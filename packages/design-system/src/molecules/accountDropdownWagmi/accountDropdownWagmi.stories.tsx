import { action } from '@storybook/addon-actions'
import { CHAIN_ID_MAIN_NET, Web3ProviderWagmi } from '@roll-network/web3'
import { AccountDropdownWagmi } from '.'

const conf = {
  title: 'Design System/Molecules/AccountDropdownWagmi',
  component: AccountDropdownWagmi,
}

export const Default = () => {
  return (
    <Web3ProviderWagmi
      variant="walletConnect"
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID as string}
    >
      <AccountDropdownWagmi
        onSwitchAccounts={action('action.onSwitchAccounts')}
      />
    </Web3ProviderWagmi>
  )
}

export default conf
