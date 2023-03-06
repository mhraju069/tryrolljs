import { useState } from 'react'
import { View } from 'react-native'
import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { ButtonV2 } from '../../atoms'
import { container, margin, padding } from '../../styles'
import { FormLayout, FormLayoutProps } from '.'

const storyConfig = {
  title: titleBuilder.organisms('FormLayout'),
  component: FormLayout,
}

const Template = (props: FormLayoutProps) => {
  const [currentStep, setCurretStep] = useState(props.currentStep)
  const currentIndex = props.steps.findIndex(
    (step) => step.title === currentStep,
  )
  const next = () => setCurretStep(props.steps[currentIndex + 1].title)
  const back = () => setCurretStep(props.steps[currentIndex - 1].title)

  return (
    <View style={[padding.p20]}>
      <FormLayout {...props} currentStep={currentStep} />
      <View style={[container.row, margin.mt16]}>
        <ButtonV2
          variant="secondary"
          size="small"
          title="Back"
          onPress={back}
        />
        <View style={[margin.mr16]} />
        <ButtonV2 variant="primary" size="small" title="Next" onPress={next} />
      </View>
    </View>
  )
}

export const Default = fromTemplate(Template, {
  steps: [
    {
      title: 'Token Details',
    },
    {
      title: 'Tokenomics',
    },
    {
      title: 'Token Distribution',
    },
  ],
  currentStep: 'Token Details',
})

export default storyConfig
