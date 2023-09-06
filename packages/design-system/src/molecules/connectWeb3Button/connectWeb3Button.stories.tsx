import { useState } from 'react'
import { withWeb3Provider } from '@roll-network/web3'
import { fromTemplate } from '../../../.storybook/utils'
import { ConnectWeb3Options } from '../connectWeb3Options'
import { ConnectWeb3Button, ConnectWeb3ButtonProps } from '.'

const storyConfig = {
  title: 'Design System/Molecules/ConnectWeb3Button',
  component: ConnectWeb3Button,
}

const Template = (props: ConnectWeb3ButtonProps) => {
  const [showOptions, setShowOptions] = useState(false)

  return withWeb3Provider(
    <>
      <ConnectWeb3Button
        {...props}
        onPress={() => {
          props.onPress?.()
          setShowOptions(true)
        }}
      />
      {showOptions && (
        <ConnectWeb3Options onClose={() => setShowOptions(!showOptions)} />
      )}
    </>,
  )
}

export const Default = fromTemplate(Template, {})
export const Loading = fromTemplate(Template, { activity: true })

export default storyConfig
