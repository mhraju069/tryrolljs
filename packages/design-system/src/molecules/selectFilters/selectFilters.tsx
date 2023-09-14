import { View } from 'react-native'
import { container, margin } from '../../styles'
import { SelectV2 } from '../selectV2'
import { InputContainer } from '../inputContainer'
import { SelectFiltersProps } from './types'

const SelectFilters = ({ options }: SelectFiltersProps) => {
  return (
    <View style={container.row}>
      {options.map((filterOption, index) => (
        <InputContainer key={filterOption.value} label={filterOption.title}>
          <SelectV2
            style={index !== 0 && margin.ml8}
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
