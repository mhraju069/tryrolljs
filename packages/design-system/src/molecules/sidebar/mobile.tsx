import { FlatList, Slide, View } from 'native-base'
import { useState } from 'react'
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import { Icon } from '../../atoms'
import { ButtonV2 } from '../../atoms/buttonV2'
import { TypographyV2 } from '../../atoms/typographyV2'

import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'
import { openLink } from '../../utils'
import { SidebarOptions } from '../sidebarOptions'
import { SidebarFooterOptionProps, SidebarProps } from './types'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  menuContainer: {
    width: 290,
  },
})

const DIVIDER_HEIGHT = 1

export const MobileSidebar: React.FC<SidebarProps> = ({
  logo,
  withConnectWallet = false,
  header,
  footerOptionsOnMobile,
  sections,
  selectedOptionId,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width
  const theme = useThemeV2()
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const isNative = Platform.OS !== 'web'

  const overlayStyles = {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height,
    position: isNative ? 'absolute' : 'fixed',
  } as ViewStyle

  const headerStyles = {
    position: !isNative ? 'sticky' : 'relative',
    top: 0,
  } as ViewStyle

  const dividerStyles: ViewStyle = {
    borderBottomWidth: DIVIDER_HEIGHT,
    borderColor: theme.background.silver,
  }

  return (
    <View
      style={[
        container.row,
        container.alignCenter,
        container.justifySpaceBetween,
        padding.pv8,
        padding.ph20,
        headerStyles,
        { backgroundColor: theme.background.white },
      ]}
    >
      {logo.mobileHeader}
      <View style={[container.row, container.alignCenter]}>
        {withConnectWallet && (
          <ButtonV2 size="small" variant="tertiary" title="Connect" />
        )}
        <Pressable style={[margin.ml16]} onPress={handleOpen}>
          {!isOpen ? (
            <Icon
              variant="menu"
              width={32}
              height={32}
              color={theme.base.primary[100]}
            />
          ) : (
            <View width={8} height={8} />
          )}
        </Pressable>
        <Slide
          in={isOpen}
          placement="left"
          _overlay={{
            isOpen,
            style: overlayStyles,
          }}
        >
          <View
            testID="overlay-container"
            style={[styles.container, { width }]}
          >
            <View
              style={[
                styles.menuContainer,
                {
                  backgroundColor: theme.background.white,
                  height,
                  maxWidth: width * 0.8,
                },
              ]}
            >
              <View style={[padding.ph20, padding.pv16, dividerStyles]}>
                {logo.mobileSidebar}
              </View>
              <View style={[padding.pv24, padding.ph20, dividerStyles]}>
                {header && <View style={[margin.mb24]}>{header}</View>}
                <SidebarOptions
                  sections={sections}
                  selectedOptionId={selectedOptionId}
                />
              </View>
              <View style={[padding.pv24, padding.ph20]}>
                <FlatList
                  scrollEnabled={false}
                  data={footerOptionsOnMobile}
                  keyExtractor={(item) => item.title}
                  // eslint-disable-next-line react/no-unstable-nested-components
                  ItemSeparatorComponent={() => <View style={[margin.mv8]} />}
                  renderItem={({ item }) => <FooterOption {...item} />}
                />
              </View>
            </View>
            <View style={[styles.closeIconContainer]} testID="iconContainer">
              <ButtonV2
                onPress={handleClose}
                variant="icon"
                iconVariant="close"
                title="close"
                size="medium"
                iconColor={theme.text.white[100]}
                iconBackgroundColor={theme.base.primary[10]}
              />
            </View>
          </View>
        </Slide>
      </View>
    </View>
  )
}

const FooterOption: React.FC<SidebarFooterOptionProps> = ({ title, link }) => {
  const theme = useThemeV2()
  const handlePress = () => {
    openLink(link, true)
  }
  return (
    <View>
      <Pressable onPress={handlePress}>
        <TypographyV2 variant="caption2" color={theme.text.black[80]}>
          {title}
        </TypographyV2>
      </Pressable>
    </View>
  )
}
