import { useCallback, useEffect, useState } from 'react'
import { Pressable, useClipboard, View } from 'native-base'
import { StyleSheet } from 'react-native'
import { Body } from '../../atoms'
import { margins, containers, lightestGray, padding } from '../../styles'
import Copy from '../../assets/svg/copy.svg'
import Check from '../../assets/svg/check.svg'
import { truncateText } from '../../utils'

export type CopyLinkProps = {
  url: string
  maxLength?: number
}

const SUCCESS_TIMEOUT = 1000
const DEFAULT_MAX_LENGTH = 40

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 2,
    borderColor: lightestGray,
  },
})

export const CopyLink = ({
  url,
  maxLength = DEFAULT_MAX_LENGTH,
}: CopyLinkProps) => {
  const [showSuccess, setShowSuccess] = useState(false)
  const { onCopy } = useClipboard()

  const handleCopy = useCallback(async () => {
    setShowSuccess(true)
    await onCopy(url)
  }, [onCopy, url])

  useEffect(() => {
    if (showSuccess) {
      const timeoutId = setTimeout(() => {
        setTimeout(() => {
          setShowSuccess(false)
        }, SUCCESS_TIMEOUT)
      })

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [showSuccess])

  return (
    <View
      style={[
        styles.wrapper,
        containers.row,
        containers.justifySpaceBetween,
        containers.alignCenter,
        padding.pb4,
      ]}
    >
      <Body style={margins.mr8}>{truncateText(url, maxLength)}</Body>
      {showSuccess ? (
        <Check />
      ) : (
        <Pressable onPress={handleCopy}>
          <Copy />
        </Pressable>
      )}
    </View>
  )
}
