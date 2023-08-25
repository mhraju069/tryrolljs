import { View } from 'react-native'
import { fromTemplate } from '../../../.storybook/utils'
import { SelectV2, SelectV2Props } from '.'

const storyConfig = {
  title: 'Design System/Molecules/SelectV2',
  component: SelectV2,
}

const Template = (props: SelectV2Props) => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{ maxWidth: 300 }}>
    <SelectV2 {...props} />
  </View>
)

export const Default = fromTemplate(Template, {
  placeholder: 'Select an option',
  options: [
    { name: 'Option #1', value: '1' },
    { name: 'Option #2', value: '2' },
    { name: 'Option #3', value: '3' },
  ],
})

export const WithDefaultValue = fromTemplate(Template, {
  placeholder: 'Select an option',
  defaultValue: '1',
  options: [
    { name: 'Option #1', value: '1' },
    { name: 'Option #2', value: '2' },
    { name: 'Option #3', value: '3' },
  ],
})

export const NoOptions = fromTemplate(Template, {
  placeholder: 'Select an option',
})

export const Searchable = fromTemplate(Template, {
  placeholder: 'Select an option',
  options: [
    { name: 'Option #1', value: '1' },
    { name: 'Option #2', value: '2' },
    { name: 'Option #3', value: '3' },
  ],
  search: true,
})

export const Loading = fromTemplate(Template, {
  placeholder: 'Select an option',
  loading: true,
})

export default storyConfig
