import { View, FlatList } from 'react-native'
import { useThemeV2 } from '../../hooks'
import { container, margin, makeStyles } from '../../styles'
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

const styles = makeStyles({
  mainList: {
    overflow: 'visible',
  },
})

type SidebarOptionsProps = Pick<SidebarProps, 'selectedOptionId' | 'sections'>

export const SidebarOptions: React.FC<SidebarOptionsProps> = ({
  sections,
  selectedOptionId,
}) => {
  return (
    <FlatList
      scrollEnabled={false}
      style={[container.fullWidth, styles.mainList]}
      data={sections}
      keyExtractor={(section) => section.id}
      ItemSeparatorComponent={Divider}
      renderItem={({ item: section }) => (
        <FlatList
          scrollEnabled={false}
          style={[container.fullWidth, styles.mainList]}
          data={section.options}
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
