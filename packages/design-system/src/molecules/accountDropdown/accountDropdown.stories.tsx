import { action } from '@storybook/addon-actions'
import { titleBuilder } from '../../../.storybook/utils'
import { withThemeProvider } from '../../providers/theme/withProvider'
import { withWeb3Provider } from '../../providers/web3'
import { AccountDropdown } from '.'

const conf = {
  title: titleBuilder.molecules('AccountDropdown'),
  component: AccountDropdown,
}

export const Default = () => {
  return withWeb3Provider(
    withThemeProvider(
      <AccountDropdown onSwitchAccounts={action('action.onSwitchAccounts')} />,
    ),
  )
}

export default conf
