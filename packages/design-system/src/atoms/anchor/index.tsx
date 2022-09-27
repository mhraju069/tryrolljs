import { Link } from 'native-base'
import { ReactNode } from 'react'
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

  return (
    <Link
      href={href}
      isExternal={target === '_blank'}
      onPress={(event) => {
        console.log(onPress, href)
        if (onPress && !href) {
          event?.preventDefault()
          onPress?.()
        }
      }}
    >
      <TypographyBase color={theme.text.highlight} fontSize={fontSize}>
        {children}
      </TypographyBase>
    </Link>
  )
}
