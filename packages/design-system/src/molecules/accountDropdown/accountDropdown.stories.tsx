import { action } from '@storybook/addon-actions'
import { withWeb3Provider } from '../../hoc'
import { AccountDropdown } from '.'

const conf = {
  title: 'Design System/Molecules/AccountDropdown',
  component: AccountDropdown,
}

export const Default = () => {
  return withWeb3Provider(
    <AccountDropdown onSwitchAccounts={action('action.onSwitchAccounts')} />,
  )
}

export default conf
