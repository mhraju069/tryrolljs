import { titleBuilder } from '../../../.storybook/utils'
import { Dropdown } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Dropdown'),
  component: Dropdown,
}

const styles = {
  trigger: { padding: '4px 8px', border: '1px solid lightgray', width: 250 },
  menuItem: { padding: '4px 8px' },
}

const renderTrigger = () => <div style={styles.trigger}>Dropdown</div>

const renderDropdown = () => (
  <ul>
    <li style={styles.menuItem}>Menu item #1</li>
    <li style={styles.menuItem}>Menu item #2</li>
    <li style={styles.menuItem}>Menu item #3</li>
  </ul>
)

export const Default = () => {
  return <Dropdown renderDropdown={renderDropdown}>{renderTrigger()}</Dropdown>
}

export default storyConfig
