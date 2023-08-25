import { useCallback, useMemo, useRef } from 'react'
import { LayoutChangeEvent, Platform, StyleSheet, View } from 'react-native'
import { TypographyV2 } from '../../atoms/typographyV2'
import { useThemeV2, useBreakpointValue } from '../../hooks'
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

interface SeparatorProps {
  checked?: boolean
}
const Separator: React.FC<SeparatorProps> = ({ checked = false }) => {
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
  onLayout?: (event: LayoutChangeEvent) => void
}

const Step: React.FC<StepProps> = ({ step, checked, title, onLayout }) => {
  const theme = useThemeV2()
  const borderColor = theme.base.highlight2[checked ? 100 : 40]
  const backgroundColor = checked ? theme.base.highlight2[100] : 'transparent'
  const textColor = checked ? theme.text.white[100] : theme.text.black[80]

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
  const isSmallScreen = useBreakpointValue({
    base: true,
    xl: false,
  })
  const stepsWidth = useRef<Record<string, number>>({})

  const currentStepIndex = useMemo(
    () => steps.findIndex((step) => step.id === currentStep),
    [steps, currentStep],
  )

  const onLayout = useCallback((event: LayoutChangeEvent, id: string) => {
    const width = event.nativeEvent.layout.width
    stepsWidth.current = { ...stepsWidth.current, [id]: width }
  }, [])

  const stepXPosition = useMemo(() => {
    const initialPosition = 0
    const calculatedPosition = Array.from(
      Array(currentStepIndex).keys(),
    ).reduce((position, _, index) => {
      return (
        position +
        stepsWidth.current[steps[index].id] + // Include width of the previous steps
        SEPARATOR_WIDTH + // Include width of the separator coming after a step
        SEPARATOR_HORIZONTAL_MARGIN * 2 // Include horizontal margin doubled (because it's on left & right)
      )
    }, initialPosition)

    // To show a bit of the previous separator, we need to subtract half of the separator width
    // Avoid negative values by using Math.max
    return Math.max(initialPosition, calculatedPosition - SEPARATOR_WIDTH / 2)
  }, [currentStepIndex, steps])

  return (
    <View style={[styles.stepsContainer]}>
      <View
        style={[
          container.row,
          container.alignCenter,
          isSmallScreen && {
            transform: [{ translateX: stepXPosition * -1 }],
          },
        ]}
      >
        {steps.map((step, index) => (
          <View style={[container.row, container.alignCenter]} key={step.id}>
            <Step
              step={index + 1}
              title={step.title}
              checked={index <= currentStepIndex}
              onLayout={(e) => onLayout(e, step.id)}
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
