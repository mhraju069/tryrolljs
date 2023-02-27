import { FlatList } from 'native-base'
import { Dimensions, View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import { container, margin, marginTheme, paddingTheme } from '../../styles'
import { SidebarOption } from '../sidebarOption'
import { SidebarProps } from './types'

const DESKTOP_SIDEBAR_WIDTH = 240
const DIVIDER_HEIGHT = 1
const SEPARATOR_HEIGHT = 24

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: DESKTOP_SIDEBAR_WIDTH,
    display: 'flex',
    position: 'fixed',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: paddingTheme.p20,
    paddingLeft: paddingTheme.p20,
    paddingTop: paddingTheme.p24,
    paddingBottom: paddingTheme.p16,
    top: 0,
    left: 0,
    boxSizing: 'border-box',
  },
  mainList: {
    overflow: 'visible',
  },
  spacer: {
    width: DESKTOP_SIDEBAR_WIDTH,
    marginRight: marginTheme.m40,
  },
}

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
  options,
  logo,
  header,
  footerOnDesktop,
  selectedOptionId,
}) => {
  const theme = useThemeV2()
  let screenHeight = Dimensions.get('window').height
  return (
    <>
      <div
        style={{
          ...styles.container,
          height: screenHeight,
          backgroundColor: theme.background.white,
        }}
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
          data={options}
          keyExtractor={(_options, index) => `${index}`}
          ItemSeparatorComponent={Divider}
          renderItem={({ item: sectionOptions }) => (
            <FlatList
              style={[container.fullWidth]}
              overflowX="visible"
              overflowY="visible"
              data={sectionOptions}
              keyExtractor={(option) => option.id}
              renderItem={({ item }) => (
                <SidebarOption {...item} selectedOptionId={selectedOptionId} />
              )}
              ItemSeparatorComponent={OptionsSeparator}
            />
          )}
        />
        {footerOnDesktop && (
          <View
            style={[container.positionAbsolute, { bottom: paddingTheme.p16 }]}
          >
            {footerOnDesktop}
          </View>
        )}
      </div>
      <div style={styles.spacer} />
    </>
  )
}
