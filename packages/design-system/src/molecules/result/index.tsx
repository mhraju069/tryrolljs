import { GestureResponderEvent, View } from 'react-native'
import { Body, Button, LargeHeader } from '../../atoms'
import { margin, text, container, orange, crimson, green } from '../../styles'

type Action = {
  onPress: (e?: GestureResponderEvent) => void
  title: string
}

export type ResultVariant = 'success' | 'error' | 'warn'

export interface ResultProps {
  title?: string
  description?: string
  actions?: [] | [Action] | [Action, Action]
  layout?: 'horizontal' | 'vertical'
  variant?: ResultVariant
}

export const TEXT_COLOR_MAP = {
  success: green,
  error: crimson,
  warn: orange,
}

export const Result = ({
  title,
  description,
  actions = [],
  layout,
  variant = 'success',
}: ResultProps) => {
  const isVertical = layout === 'vertical'

  return (
    <View style={[container.center]}>
      <LargeHeader color={TEXT_COLOR_MAP[variant]} style={margin.mb8}>
        {title}
      </LargeHeader>
      <Body style={text.center}>{description}</Body>

      {actions.length > 0 && (
        <View
          style={[
            margin.mt48,
            container.fullWidth,
            container.center,
            !isVertical && container.row,
          ]}
        >
          {actions[0] && (
            <Button
              type="secondary"
              title={actions[0].title}
              onPress={actions[0].onPress}
              style={[
                isVertical ? margin.mb24 : margin.mr24,
                isVertical ? container.fullWidth : container.flex1,
              ]}
            />
          )}

          {actions[1] && (
            <Button
              type="primary"
              title={actions[1].title}
              onPress={actions[1].onPress}
              style={[isVertical ? container.fullWidth : container.flex1]}
            />
          )}
        </View>
      )}
    </View>
  )
}

export default Result
