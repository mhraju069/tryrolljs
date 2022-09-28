import { Link } from 'native-base'
import { ReactNode, useCallback } from 'react'
import type { GestureResponderEvent } from 'react-native'
import { TypographyBase, TypographyBaseProps } from '..'
import { useTheme } from '../..'

export type AnchorProps = {
  children: ReactNode
  href?: string
  target?: string
  onPress?: () => void
}

export const Anchor = ({
  children,
  href,
  fontSize,
  target = '_blank',
  onPress,
}: AnchorProps & Pick<TypographyBaseProps, 'fontSize'>) => {
  const theme = useTheme()

  const handlePress = useCallback(
    (event?: GestureResponderEvent) => {
      if (onPress && !href) {
        event?.preventDefault()
        onPress?.()
      }
    },
    [onPress, href],
  )

  return (
    <Link href={href} isExternal={target === '_blank'} onPress={handlePress}>
      <TypographyBase color={theme.text.highlight} fontSize={fontSize}>
        {children}
      </TypographyBase>
    </Link>
  )
}
