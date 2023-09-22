import { View } from 'react-native'
import { container, margin } from '../../styles'
import { useBreakpointValue } from '../../hooks'
import { SelectV2 } from '../selectV2'
import { InputContainer } from '../inputContainer'
import { SelectFiltersProps } from './types'

const SelectFilters = ({ options }: SelectFiltersProps) => {
  const isMd = useBreakpointValue({ base: true, md: false })

  const selectMargin = !isMd ? margin.ml8 : margin.mb8

  return (
    <View style={[!isMd && container.row]}>
      {options.map((filterOption, index) => (
        <InputContainer
          key={filterOption.value}
          style={index !== 0 && selectMargin}
          label={filterOption.title}
        >
          <SelectV2
            onChange={(value) => filterOption.onChange(value)}
            options={filterOption.options}
            defaultValue={filterOption.value}
          />
        </InputContainer>
      ))}
    </View>
  )
}

export default SelectFilters
