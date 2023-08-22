import { useState } from 'react'
import { View } from 'react-native'
import { fromTemplate } from '../../../.storybook/utils'
import { SelectV2 } from '../selectV2'
import { InputContainer, InputContainerProps } from '.'

const storyConfig = {
  title: 'Design System/Molecules/InputContainer',
  component: InputContainer,
}
const tokens = ['ETH', 'BTC', 'USDT', 'USDC', 'DAI', 'WBTC', 'WETH']
const Template = (props: InputContainerProps) => {
  const [value, setValue] = useState('')
  const options = tokens.map((token) => ({
    name: token,
    value: token,
  }))

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ maxWidth: 300 }}>
      <InputContainer {...props}>
        <SelectV2 defaultValue={value} onChange={setValue} options={options} />
      </InputContainer>
    </View>
  )
}

export const Default = fromTemplate(Template, {
  label: 'Default',
  tooltip: 'This is a tooltip',
})

export const WithError = fromTemplate(Template, {
  label: 'With error',
  error: 'This is an error',
})

export const withInfo = fromTemplate(Template, {
  label: 'With info',
  info: 'This is an info',
})

export default storyConfig
