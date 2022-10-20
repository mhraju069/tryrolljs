import { action } from '@storybook/addon-actions'
import { titleBuilder } from '../../../.storybook/utils'
import { withThemeProvider, withWeb3Provider } from '../../hoc'
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
