import {
  GestureResponderEvent,
  TouchableOpacity,
  View,
  Platform,
  ViewStyle,
} from 'react-native'
import { ComponentType, useCallback, useMemo } from 'react'
import { useToast as useGluestackToast } from '@gluestack-ui/react'
import {
  charcoalBlack,
  white,
  margin,
  text,
  black,
  padding,
  ghostWhite,
  green,
  crimson,
  container,
  cyanBlue,
  orange,
  makeStyles,
} from '../../styles'
import CloseCircle from '../../assets/svg/closeCircle.svg'
import { Body, Caption } from '../typography'
import { useClipboard } from '../../hooks'

export type ToastVariant = 'success' | 'error' | 'light' | 'dark' | 'warn'

export interface ToastProps {
  title?: string
  description?: string
  onClose?: (e: GestureResponderEvent) => void
  action?: {
    title: string
    onPress: (e: GestureResponderEvent) => void
  }
  variant?: ToastVariant
  style?: ViewStyle
}

export const TOAST_COLOR_MAP = {
  light: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: cyanBlue,
  },
  dark: {
    backgroundColor: charcoalBlack,
    color: white,
    secondaryBackgroundColor: black,
    borderColor: charcoalBlack,
  },
  success: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: green,
  },
  error: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: crimson,
  },
  warn: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: orange,
  },
}

const isWeb = Platform.OS === 'web'

const styles = makeStyles({
  wrapper: {
    maxWidth: '100%',
    width: 300,
    minWidth: isWeb ? undefined : '100%',
  },
  container: {
    borderLeftWidth: 4,
  },
  closeButton: { position: 'absolute', right: 16, top: 16 },
  nativeActionDivider: { height: 1 },
})

export const Toast = ({
  title,
  description,
  action,
  onClose,
  variant = 'light',
  style,
}: ToastProps) => {
  const { backgroundColor, color, secondaryBackgroundColor, borderColor } =
    TOAST_COLOR_MAP[variant]

  const actionNode = useMemo(() => {
    if (!action) {
      return null
    }

    if (isWeb) {
      return (
        <TouchableOpacity style={margin.mt8} onPress={action.onPress}>
          <Caption color={color} weight="semiBold" underline>
            {action.title}
          </Caption>
        </TouchableOpacity>
      )
    }

    return (
      <>
        <View
          style={[
            styles.nativeActionDivider,
            margin.mt16,
            margin.mb8,
            { backgroundColor: secondaryBackgroundColor },
          ]}
        />
        <TouchableOpacity onPress={action.onPress}>
          <Caption style={text.center} color={color} weight="semiBold">
            {action.title}
          </Caption>
        </TouchableOpacity>
      </>
    )
  }, [action, color, secondaryBackgroundColor])

  return (
    <View style={[styles.wrapper]}>
      <View
        style={[
          styles.container,
          margin.mh16,
          padding.p16,
          container.shadow,
          container.borderRadius,
          {
            backgroundColor,
            borderColor,
          },
          style,
        ]}
      >
        <View style={padding.pr32}>
          {title && (
            <Body color={color} weight="semiBold">
              {title}
            </Body>
          )}
          {description && <Body color={color}>{description}</Body>}
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <CloseCircle color={color} />
        </TouchableOpacity>

        {actionNode}
      </View>
    </View>
  )
}

export const createUseToast = <
  P extends Pick<ToastProps, 'onClose'>,
  C extends ComponentType<P> = ComponentType<P>,
>(
  ToastComponent: C,
) => {
  const useToast = () => {
    const gluestackToast = useGluestackToast()
    const toast = useCallback(
      ({ duration, onClose, ...props }: P & { duration?: number | null }) => {
        const toastId = gluestackToast.show({
          placement: isWeb ? 'top right' : 'bottom',
          duration,
          render: () => (
            // @ts-ignore
            <ToastComponent
              onClose={(e) => {
                onClose?.(e)
                gluestackToast.close(toastId)
              }}
              {...props}
            />
          ),
        })
      },
      [gluestackToast],
    )

    return toast
  }

  return useToast
}

export const useToast = createUseToast<ToastProps>(Toast)

export const useClipboardWithToastBase = (
  useToast_: () => (props: any) => void,
) => {
  const { copy } = useClipboard()
  const toast = useToast_()

  return useCallback(
    async (text: string) => {
      await copy(text)
      toast({
        title: 'Copied to clipboard',
        variant: 'success',
      })
    },
    [toast, copy],
  )
}

export const useClipboardWithToast = () => useClipboardWithToastBase(useToast)
