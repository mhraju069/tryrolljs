import { PropsWithChildren } from 'react'
import { Platform, ScrollView, StyleSheet, View } from 'react-native'
import { useThemeV2, useBreakpointValue } from '../../hooks'
import { container } from '../../styles'
import { Sidebar, RightSidebar, RightSidebarProps } from '../../molecules'
import type { SidebarProps } from '../../molecules'

export interface LayoutProps {
  sidebarProps: SidebarProps
  rightSidebarProps?: RightSidebarProps
}

const styles = StyleSheet.create({
  sidebarContainer: {
    position: 'relative',
  },
  sidebarSuffix: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
})

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  sidebarProps,
  rightSidebarProps,
}) => {
  const isMobile = useBreakpointValue({ base: true, xl: false })
  const theme = useThemeV2()
  return (
    <>
      {Platform.select({
        native: (
          <View>
            <Sidebar {...sidebarProps} />
            <ScrollView>{children}</ScrollView>
          </View>
        ),
        web: (
          <>
            {isMobile ? (
              <View>
                <Sidebar {...sidebarProps} />
                {children}
              </View>
            ) : (
              <View
                style={[
                  container.row,
                  { backgroundColor: theme.background.grey },
                ]}
              >
                <Sidebar {...sidebarProps} />
                <View style={[styles.sidebarContainer, container.flex1]}>
                  <View style={[styles.sidebarSuffix]}>
                    {sidebarProps.suffix?.desktop}
                  </View>
                  {children}
                </View>
                {rightSidebarProps && <RightSidebar {...rightSidebarProps} />}
              </View>
            )}
          </>
        ),
      })}
    </>
  )
}
