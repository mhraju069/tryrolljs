import { SelectV2Option } from '../selectV2'

export type SelectFilterOption = {
  title: string
  options: SelectV2Option[]
  onChange: (value: SelectV2Option['value']) => void
  value?: string
}

export interface SelectFiltersProps {
  options: SelectFilterOption[]
}
