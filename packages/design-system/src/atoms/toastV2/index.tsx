import {
  GestureResponderEvent,
  View,
  Platform,
  ViewStyle,
  Pressable,
} from 'react-native'
import { useMemo } from 'react'
import { margin, padding, container, makeStyles } from '../../styles'
import { TypographyV2 } from '../typographyV2'
import { useThemeV2 } from '../../hooks'
import { Icon } from '../icon'
import { createUseToast, useClipboardWithToastBase } from '../toast'

export type ToastV2Variant = 'success' | 'error' | 'informative'

export interface ToastV2Props {
  title?: string
  description?: string
  onClose?: (e: GestureResponderEvent) => void
  action?: {
    title: string
    onPress: (e: GestureResponderEvent) => void
  }
  variant?: ToastV2Variant
  style?: ViewStyle
}

const isWeb = Platform.OS === 'web'

const styles = makeStyles({
  wrapper: {
    maxWidth: '100%',
    width: 320,
    minWidth: isWeb ? undefined : '100%',
  },
  closeButton: { position: 'absolute', right: 16, top: 16 },
  action: {
    borderBottomWidth: 2,
  },
})

export const ToastV2 = ({
  title,
  description,
  action,
  onClose,
  variant = 'success',
  style,
}: ToastV2Props) => {
  const theme = useThemeV2()
  const toastBackground = useMemo(() => {
    switch (variant) {
      case 'success':
        return theme.base.success
      case 'error':
        return theme.base.danger
      case 'informative':
        return theme.text.black[100]
    }
  }, [theme, variant])
  return (
    <View style={[styles.wrapper]}>
      <View
        style={[
          margin.mh16,
          padding.p16,
          container.borderRadius2XL,
          {
            backgroundColor: toastBackground,
          },
          style,
        ]}
      >
        <View>
          {title && (
            <TypographyV2 variant="caption1" color={theme.text.white[100]}>
              {title}
            </TypographyV2>
          )}
          {description && (
            <TypographyV2
              variant="text3"
              color={theme.text.white[100]}
              style={[margin.mt4]}
            >
              {description}
            </TypographyV2>
          )}
        </View>

        <Pressable style={styles.closeButton} onPress={onClose}>
          <Icon variant="close" color={theme.text.white[100]} />
        </Pressable>
        {!!action && (
          <Pressable style={margin.mt16} onPress={action.onPress}>
            <TypographyV2
              variant="caption1"
              color={theme.text.white[100]}
              style={[
                styles.action,
                container.alignSelfStart,
                {
                  borderBottomColor: theme.text.white[100],
                },
              ]}
            >
              {action.title}
            </TypographyV2>
          </Pressable>
        )}
      </View>
    </View>
  )
}

export const useToastV2 = createUseToast<ToastV2Props>(ToastV2)

export const useClipboardWithToastV2 = () =>
  useClipboardWithToastBase(useToastV2)
