import { FlatList } from 'native-base'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import { container, layer, margin, spacing } from '../../styles'
import { SidebarOption } from '../sidebarOption'
import { SidebarProps } from './types'

const DESKTOP_SIDEBAR_WIDTH = 240
const DIVIDER_HEIGHT = 1
const SEPARATOR_HEIGHT = 24

const styles = StyleSheet.create({
  container: {
    width: DESKTOP_SIDEBAR_WIDTH,
    display: 'flex',
    position: 'fixed' as any,
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: spacing[20],
    paddingLeft: spacing[20],
    paddingTop: spacing[24],
    paddingBottom: spacing[16],
    top: 0,
    left: 0,
    boxSizing: 'border-box',
  },
  mainList: {
    overflow: 'visible',
  },
  spacer: {
    width: DESKTOP_SIDEBAR_WIDTH,
    zIndex: layer.layer999,
  },
})

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

export const DesktopSidebar: React.FC<SidebarProps> = ({
  sections,
  logo,
  header,
  footerOnDesktop,
  selectedOptionId,
}) => {
  const theme = useThemeV2()
  const { height } = Dimensions.get('window')
  return (
    <>
      <View
        style={[
          styles.container,
          {
            height,
            backgroundColor: theme.background.white,
          },
        ]}
      >
        {logo.desktop && (
          <View
            style={[margin.mb40, container.fullWidth, container.alignCenter]}
          >
            {logo.desktop}
          </View>
        )}
        {header && (
          <View style={[margin.mb40, container.fullWidth]}>{header}</View>
        )}
        <FlatList
          overflowX="visible"
          overflowY="visible"
          style={[container.fullWidth]}
          data={sections}
          keyExtractor={(section) => `${section.id}`}
          ItemSeparatorComponent={Divider}
          renderItem={({ item: section }) => (
            <FlatList
              style={[container.fullWidth]}
              overflowX="visible"
              overflowY="visible"
              data={section.options}
              keyExtractor={(option) => option.id}
              ItemSeparatorComponent={OptionsSeparator}
              renderItem={({ item }) => (
                <SidebarOption {...item} selectedOptionId={selectedOptionId} />
              )}
            />
          )}
        />
        {footerOnDesktop && (
          <View style={[container.positionAbsolute, { bottom: spacing[16] }]}>
            {footerOnDesktop}
          </View>
        )}
      </View>
      <View style={styles.spacer} />
    </>
  )
}
