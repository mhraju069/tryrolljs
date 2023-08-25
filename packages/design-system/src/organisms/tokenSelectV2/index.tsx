import { Pressable } from '@gluestack-ui/react'
import { StyleProp, ViewStyle } from 'react-native'
import { useCallback, useState } from 'react'
import { Icon } from '../../atoms'
import { InputV2 } from '../../molecules'
import {
  TokenSelectContentV2,
  TokenSelectContentV2Props,
} from '../../molecules/tokenSelectContentV2'
import { ModalV2 } from '../modalV2'

export type TokenSelectV2Props = TokenSelectContentV2Props & {
  defaultValue?: string
  style?: StyleProp<ViewStyle>
  onChange?: (value: string) => void
}

export const TokenSelectV2: React.FC<TokenSelectV2Props> = ({
  defaultValue,
  placeholder = 'Select a token',
  style,
  options,
  onChange,
  onClose,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue)
  const selectedOption = options.find((option) => option.value === value)
  const inputValue = selectedOption?.name ?? ''
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleInputWrapperPress = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const handleModalClose = useCallback(() => {
    onClose?.()
    setIsModalOpen(false)
  }, [onClose])

  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue)
      onChange?.(newValue)
      handleModalClose()
    },
    [onChange, handleModalClose],
  )

  return (
    <>
      <Pressable onPress={handleInputWrapperPress}>
        <InputV2
          style={style}
          defaultValue={defaultValue}
          onChangeText={() => null}
          placeholder={placeholder}
          suffix={<Icon variant="arrowDown2" />}
          value={inputValue}
          editable={false}
          pointerEvents="none"
          testID="tokenSelectInput"
        />
      </Pressable>
      <ModalV2
        isOpen={isModalOpen}
        onClose={handleModalClose}
        avoidKeyboard
        testID="tokenSelectModal"
        size="sm"
      >
        <TokenSelectContentV2
          {...props}
          closable
          options={options}
          placeholder={placeholder}
          onChange={handleChange}
          onClose={handleModalClose}
        />
      </ModalV2>
    </>
  )
}
