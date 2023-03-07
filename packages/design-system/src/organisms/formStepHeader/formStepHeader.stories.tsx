import { useState } from 'react'
import { View } from 'react-native'
import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { ButtonV2 } from '../../atoms'
import { container, margin, padding } from '../../styles'
import { FormStepHeader, FormStepHeaderProps } from '.'

const storyConfig = {
  title: titleBuilder.organisms('FormStepHeader'),
  component: FormStepHeader,
}

const Template = (props: FormStepHeaderProps) => {
  const [currentStep, setCurretStep] = useState(props.currentStep)
  const currentIndex = props.steps.findIndex((step) => step.id === currentStep)
  const next = () => {
    if (currentIndex === props.steps.length - 1) return
    setCurretStep(props.steps[currentIndex + 1].id)
  }
  const back = () => {
    if (currentIndex === 0) return
    setCurretStep(props.steps[currentIndex - 1].id)
  }

  return (
    <View style={[padding.p20]}>
      <FormStepHeader {...props} currentStep={currentStep} />
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
      id: '1',
      title: 'Token Details',
    },
    {
      id: '2',
      title: 'Tokenomics',
    },
    {
      id: '3',
      title: 'Token Distribution',
    },
  ],
  currentStep: '1',
})

export default storyConfig
