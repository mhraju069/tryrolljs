import { StyleSheet, View } from 'react-native'
import { FlatList } from 'native-base'
import { useThemeV2 } from '../../hooks'
import { container, margin } from '../../styles'
import { SidebarProps } from '../sidebar/types'
import { SidebarOption } from '../sidebarOption'

const DIVIDER_HEIGHT = 1
const SEPARATOR_HEIGHT = 24

const Divider: React.FC = () => {
  const theme = useThemeV2()
  return (
    <View
      style={[
        container.fullWidth,
        margin.mv24,
        { height: DIVIDER_HEIGHT, backgroundColor: theme.background.silver },
      ]}
    />
  )
}

const OptionsSeparator: React.FC = () => (
  <View style={[{ height: SEPARATOR_HEIGHT }]} />
)

const styles = StyleSheet.create({
  mainList: {
    overflow: 'visible',
  },
})

type SidebarOptionsProps = Pick<SidebarProps, 'selectedOptionId' | 'options'>

export const SidebarOptions: React.FC<SidebarOptionsProps> = ({
  options,
  selectedOptionId,
}) => {
  return (
    <FlatList
      scrollEnabled={false}
      overflowX="visible"
      overflowY="visible"
      style={[container.fullWidth, styles.mainList]}
      data={options}
      keyExtractor={(_options, index) => `${index}`}
      ItemSeparatorComponent={Divider}
      renderItem={({ item: sectionOptions }) => (
        <FlatList
          scrollEnabled={false}
          overflowX="visible"
          overflowY="visible"
          style={[container.fullWidth, styles.mainList]}
          data={sectionOptions}
          keyExtractor={(option) => option.id}
          renderItem={({ item }) => (
            <SidebarOption {...item} selectedOptionId={selectedOptionId} />
          )}
          ItemSeparatorComponent={OptionsSeparator}
        />
      )}
    />
  )
}
