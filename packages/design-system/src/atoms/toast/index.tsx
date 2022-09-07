import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native'
import { useMemo } from 'react'
import {
  charcoalBlack,
  padding,
  white,
  containers,
  margins,
  text,
  black,
} from '../../styles'
import CloseCircle from '../../assets/svg/closeCircle.svg'
import { Body, Caption } from '../typography'

export interface ToastProps {
  title: string
  description: string
  onClose: (e: GestureResponderEvent) => void
  action?: {
    title: string
    onPress: (e: GestureResponderEvent) => void
  }
}

const styles = StyleSheet.create({
  closeButton: { position: 'absolute', right: 16, top: 16 },
  nativeActionDivider: { height: 1, backgroundColor: black },
})

export const Toast = ({ title, description, action, onClose }: ToastProps) => {
  const actionNode = useMemo(() => {
    if (!action) {
      return null
    }

    if (Platform.OS === 'web') {
      return (
        <TouchableOpacity style={margins.mt8} onPress={action.onPress}>
          <Caption color={white} weight="semiBold" underline>
            {action.title}
          </Caption>
        </TouchableOpacity>
      )
    }

    return (
      <>
        <View style={[styles.nativeActionDivider, margins.mt16, margins.mb8]} />
        <TouchableOpacity onPress={action.onPress}>
          <Caption style={text.center} color={white} weight="semiBold">
            {action.title}
          </Caption>
        </TouchableOpacity>
      </>
    )
  }, [action])

  return (
    <View
      style={[
        padding.p16,
        containers.borderRadius2XL,
        { backgroundColor: charcoalBlack },
      ]}
    >
      <Body color={white} weight="semiBold">
        {title}
      </Body>
      <Body color={white}>{description}</Body>

      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <CloseCircle color={white} />
      </TouchableOpacity>

      {actionNode}
    </View>
  )
}
