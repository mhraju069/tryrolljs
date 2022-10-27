import { Divider, Pressable, useBreakpointValue } from 'native-base'
import { FlatList, Platform } from 'react-native'
import { useCallback, useMemo, useState } from 'react'
import ArrowDownCircle from '../../assets/svg/arrowDownCircle.svg'
import { Body, Caption, CircleImg, Input, SubHeader } from '../../atoms'
import { useTheme } from '../../hooks'
import { container, margin, padding, text } from '../../styles'
import { Modal } from '../modal'

export type TokenSelectOption = {
  name: string
  symbol: string
  logo?: string
  value: string
}

export interface TokenSelectProps {
  options: TokenSelectOption[]
  placeholder?: string
  searchPlaceholder?: string
  defaultValue?: string
  onChange: (value: string) => void
  notFoundText?: string
}

const modalBodyStyle = Platform.select({
  web: container.flex1,
  default: undefined,
})

export const TokenSelect = ({
  defaultValue,
  options,
  placeholder = 'Select a token',
  searchPlaceholder = 'Search name or paste address',
  notFoundText = 'No results found',
  onChange,
}: TokenSelectProps) => {
  const theme = useTheme()
  const [value, setValue] = useState(defaultValue)
  const inputValue = options.find((option) => option.value === value)?.name
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')

  const handleInputWrapperPress = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.name.toLowerCase().includes(searchInputValue.toLowerCase()),
      ),
    [options, searchInputValue],
  )

  const modalSize = useBreakpointValue({
    base: 'full' as const,
    lg: 'md' as const,
  })

  return (
    <>
      <Pressable onPress={handleInputWrapperPress}>
        <Input
          placeholder={placeholder}
          right={<ArrowDownCircle />}
          value={inputValue}
          editable={false}
          pointerEvents="none"
          testID="tokenSelectInput"
        />
      </Pressable>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        size={modalSize}
        avoidKeyboard
      >
        <Modal.Content>
          <Modal.CloseButton onPress={handleModalClose} />

          <Modal.Header>{placeholder}</Modal.Header>
          <Modal.Body style={modalBodyStyle}>
            <Input
              value={searchInputValue}
              onChangeText={setSearchInputValue}
              placeholder={searchPlaceholder}
              testID="tokenSelectSearchInput"
            />
            <Divider style={[margin.mt16, margin.mb8]} />
            {filteredOptions.length > 0 ? (
              <FlatList
                data={filteredOptions}
                renderItem={({ item: option }) => (
                  <Pressable
                    key={option.value}
                    style={[container.row, container.alignCenter, padding.p8]}
                    _hover={{
                      backgroundColor: theme.background.highlight,
                    }}
                    onPress={() => {
                      setValue(option.value)
                      onChange?.(option.value)
                      handleModalClose()
                    }}
                    testID={`tokenSelectOption__${option.value}`}
                  >
                    <CircleImg size={32} uri={option.logo} />
                    <SubHeader style={margin.ml16}>{option.symbol}</SubHeader>
                    <Caption style={margin.mlauto}>{option.name}</Caption>
                  </Pressable>
                )}
              />
            ) : (
              <Body style={text.center}>{notFoundText}</Body>
            )}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}
