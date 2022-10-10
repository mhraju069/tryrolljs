import { GestureResponderEvent, View } from 'react-native'
import { Body, Button, LargeHeader } from '../../atoms'
import { margins, text, containers, orange, crimson, green } from '../../styles'

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
    <View style={[containers.center]}>
      <LargeHeader color={TEXT_COLOR_MAP[variant]} style={margins.mb8}>
        {title}
      </LargeHeader>
      <Body style={text.center}>{description}</Body>

      {actions.length > 0 && (
        <View
          style={[
            margins.mt48,
            containers.fullWidth,
            containers.center,
            !isVertical && containers.row,
          ]}
        >
          {actions[0] && (
            <Button
              type="secondary"
              title={actions[0].title}
              onPress={actions[0].onPress}
              style={[
                isVertical ? margins.mb24 : margins.mr24,
                isVertical ? containers.fullWidth : containers.flex1,
              ]}
            />
          )}

          {actions[1] && (
            <Button
              type="primary"
              title={actions[1].title}
              onPress={actions[1].onPress}
              style={[isVertical ? containers.fullWidth : containers.flex1]}
            />
          )}
        </View>
      )}
    </View>
  )
}

export default Result
