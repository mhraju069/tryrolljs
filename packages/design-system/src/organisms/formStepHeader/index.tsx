import { useBreakpointValue } from 'native-base'
import { useCallback, useMemo, useState } from 'react'
import { LayoutChangeEvent, Platform, StyleSheet, View } from 'react-native'
import { TypographyV2 } from '../../atoms/typographyV2'
import { useThemeV2 } from '../../hooks'
import { container, margin, spacing } from '../../styles'

const STEP_INDEX_SIZE = spacing[24]
const STEP_INDEX_BORDER_RADIUS = 24
const STEP_INDEX_BORDER_WIDTH = 2
const SEPARATOR_WIDTH = 48
const SEPARATOR_HEIGHT = 2
const SEPARATOR_HORIZONTAL_MARGIN = 16
const NATIVE_LINE_HEIGHT = 20

const styles = StyleSheet.create({
  stepsContainer: {
    overflow: 'hidden',
  },
  stepIndex: {
    width: STEP_INDEX_SIZE,
    height: STEP_INDEX_SIZE,
    borderWidth: STEP_INDEX_BORDER_WIDTH,
    borderRadius: STEP_INDEX_BORDER_RADIUS,
  },
  separator: {
    width: SEPARATOR_WIDTH,
    height: SEPARATOR_HEIGHT,
    marginHorizontal: SEPARATOR_HORIZONTAL_MARGIN,
  },
})

const Separator: React.FC<{ checked?: boolean }> = ({ checked = false }) => {
  const theme = useThemeV2()
  return (
    <View style={[container.center]}>
      <View
        style={[
          styles.separator,
          {
            backgroundColor: checked
              ? theme.base.highlight2[100]
              : theme.background.silver,
          },
        ]}
      />
    </View>
  )
}

interface StepProps {
  step: number
  title: string
  checked: boolean
  id: string
  setWidth: (id: string, width: number) => void
}

const Step: React.FC<StepProps> = ({ step, checked, title, id, setWidth }) => {
  const theme = useThemeV2()
  const borderColor = theme.base.highlight2[checked ? 100 : 40]
  const backgroundColor = checked ? theme.base.highlight2[100] : 'transparent'
  const textColor = checked ? theme.text.white[100] : theme.text.black[80]

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(id, event.nativeEvent.layout.width)
  }

  return (
    <View style={[container.row, container.alignCenter]} onLayout={onLayout}>
      <View
        style={[
          styles.stepIndex,
          container.center,
          margin.mr16,
          { backgroundColor, borderColor },
        ]}
      >
        <TypographyV2
          variant="caption1"
          color={textColor}
          style={[
            Platform.select({
              native: { lineHeight: NATIVE_LINE_HEIGHT },
              web: undefined,
            }),
          ]}
        >
          {step}
        </TypographyV2>
      </View>
      <TypographyV2 variant="sub3" color={theme.text.black[100]}>
        {title}
      </TypographyV2>
    </View>
  )
}

export interface FormStepHeaderProps {
  steps: {
    id: string
    title: string
  }[]
  currentStep: string
}

export const FormStepHeader: React.FC<FormStepHeaderProps> = ({
  steps,
  currentStep,
}) => {
  const shouldChangePosition = useBreakpointValue({
    base: true,
    md: false,
  })
  const [stepsWidth, setStepsWidth] = useState<Record<string, number>>({})

  const currentStepIndex = useMemo(
    () => steps.findIndex((step) => step.id === currentStep),
    [steps, currentStep],
  )

  const updateWidth = useCallback((id: string, width: number) => {
    setStepsWidth((prev) => ({ ...prev, [id]: width }))
  }, [])

  const position = useMemo(() => {
    let position_ = 0
    for (let i = 0; i < currentStepIndex; i++) {
      position_ +=
        stepsWidth[steps[i].id] +
        SEPARATOR_WIDTH +
        SEPARATOR_HORIZONTAL_MARGIN * 2
    }
    if (position_) {
      position_ -= SEPARATOR_WIDTH / 2
    }
    return position_
  }, [stepsWidth, currentStepIndex, steps])

  return (
    <View style={[styles.stepsContainer]}>
      <View
        style={[
          container.row,
          container.alignCenter,
          shouldChangePosition && {
            transform: [{ translateX: position * -1 }],
          },
        ]}
      >
        {steps.map((step, index) => (
          <View style={[container.row, container.alignCenter]} key={step.id}>
            <Step
              id={step.id}
              step={index + 1}
              title={step.title}
              checked={index <= currentStepIndex}
              setWidth={updateWidth}
            />
            {index < steps.length - 1 && (
              <Separator checked={index < currentStepIndex} />
            )}
          </View>
        ))}
      </View>
    </View>
  )
}
