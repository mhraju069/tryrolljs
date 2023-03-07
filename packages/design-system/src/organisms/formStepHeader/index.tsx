import { useEffect, useMemo, useRef } from 'react'
import { FlatList, Platform, StyleSheet, View } from 'react-native'
import { TypographyV2 } from '../../atoms/typographyV2'
import { useThemeV2 } from '../../hooks'
import { container, margin, spacing } from '../../styles'
import { makeScrollToIndexFailedHandler } from '../../utils'

const STEP_INDEX_SIZE = spacing[24]
const STEP_INDEX_BORDER_RADIUS = 24
const STEP_INDEX_BORDER_WIDTH = 2
const SEPARATOR_WIDTH = 48
const SEPARATOR_HEIGHT = 2
const NATIVE_LINE_HEIGHT = 20

const styles = StyleSheet.create({
  stepIndex: {
    width: STEP_INDEX_SIZE,
    height: STEP_INDEX_SIZE,
    borderWidth: STEP_INDEX_BORDER_WIDTH,
    borderRadius: STEP_INDEX_BORDER_RADIUS,
  },
  separator: {
    width: SEPARATOR_WIDTH,
    height: SEPARATOR_HEIGHT,
  },
})

const Separator: React.FC = () => {
  const theme = useThemeV2()
  return (
    <View style={[container.fullHeight, container.center]}>
      <View
        style={[
          margin.mh16,
          styles.separator,
          { backgroundColor: theme.background.silver },
        ]}
      />
    </View>
  )
}

interface StepProps {
  step: number
  title: string
  isChecked: boolean
}

const Step: React.FC<StepProps> = ({ step, isChecked, title }) => {
  const theme = useThemeV2()
  const borderColor = theme.base.highlight2[isChecked ? 100 : 40]
  const backgroundColor = isChecked ? theme.base.highlight2[100] : 'transparent'
  const textColor = isChecked ? theme.text.white[100] : theme.text.black[80]
  return (
    <View style={[container.row, container.alignCenter]}>
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
            Platform.select({ native: { lineHeight: NATIVE_LINE_HEIGHT } }),
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
  const listRef = useRef<FlatList>(null)
  const currentStepIndex = useMemo(
    () => steps.findIndex((step) => step.id === currentStep),
    [steps, currentStep],
  )
  const onScrollToIndexFailed = useMemo(
    () => makeScrollToIndexFailedHandler(listRef),
    [listRef],
  )
  useEffect(() => {
    listRef.current?.scrollToIndex({ index: currentStepIndex })
  }, [currentStepIndex])
  return (
    <FlatList
      ref={listRef}
      horizontal
      scrollEnabled={false}
      initialScrollIndex={currentStepIndex}
      showsHorizontalScrollIndicator={false}
      data={steps}
      ItemSeparatorComponent={Separator}
      keyExtractor={(item) => item.id}
      onScrollToIndexFailed={onScrollToIndexFailed}
      renderItem={({ item, index }) => (
        <Step
          step={index + 1}
          title={item.title}
          isChecked={index <= currentStepIndex}
        />
      )}
    />
  )
}
