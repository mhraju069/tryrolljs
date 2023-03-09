import { useState } from 'react'
import { View } from 'react-native'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { container, margin, padding } from '../../styles'
import { InputV2 } from '../inputV2'
import { InputLayoutProps, InputLayout } from '.'

const storyConfig = {
  title: titleBuilder.molecules('InputLayout'),
  component: InputLayout,
}

const Template = (props: InputLayoutProps) => {
  const [maxSupply, setMaxSupply] = useState('')
  const [referral, setReferral] = useState('')
  return (
    <View style={[padding.p20]}>
      <InputLayout {...props}>
        <View style={container.fullWidth}>
          <InputV2
            label="Max supply"
            placeholder="this is the place holder"
            value={maxSupply}
            onChangeText={setMaxSupply}
          />
          <View style={[margin.mv8]} />
          <InputV2
            label="Referral (optional)"
            placeholder="Enter wallet address"
            value={referral}
            onChangeText={setReferral}
          />
        </View>
      </InputLayout>
    </View>
  )
}

export const Default = fromTemplate(Template, {
  title: 'Total token supply',
  description:
    'This is the total amount of tokens to be created. You can’t change the total supply once the token is created. Recommended supply: 10 million.',
})

export default storyConfig
