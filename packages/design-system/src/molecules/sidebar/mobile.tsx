import { Slide } from 'native-base'
import { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Icon } from '../../atoms'
import { ButtonV2 } from '../../atoms/buttonV2'
import { TypographyV2 } from '../../atoms/typographyV2'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'
import { SidebarProps } from './types'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    // top: 0,
    // left: 0,
    // bottom: 0,
    width: '100%',
    height: '100%',
    flex: 1,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  menuContainer: {
    flex: 1,
    minWidth: 240,
    width: '80%',
    height: '100%',
    borderRightWidth: 2,
  },
})

export const MobileSidebar: React.FC<SidebarProps> = ({
  logo,
  withConnectWallet = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const theme = useThemeV2()
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  return (
    <View
      style={[
        container.row,
        container.alignCenter,
        container.justifySpaceBetween,
        padding.pv8,
        padding.ph20,
        { backgroundColor: theme.background.white },
      ]}
    >
      {logo}
      <View style={[container.row, container.alignCenter]}>
        {withConnectWallet && (
          <ButtonV2 size="small" variant="tertiary" title="Connect" />
        )}
        <Pressable style={[margin.ml16]} onPress={handleOpen}>
          <Icon
            variant="menu"
            width={32}
            height={32}
            color={theme.base.primary[100]}
          />
        </Pressable>
        <Slide
          in={isOpen}
          placement="left"
          _overlay={{
            isOpen,
            style: {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
          }}
        >
          {/* <Box w="100%" position="absolute" safeArea h="100%">
          </Box> */}
          <View testID="overlay-container" style={[styles.container]}>
            <View
              style={[
                styles.menuContainer,
                { backgroundColor: theme.background.white },
              ]}
            >
              <TypographyV2 variant="caption1">Hello world</TypographyV2>
            </View>
            <View style={[styles.closeIconContainer]} testID="iconContainer">
              <ButtonV2
                onPress={handleClose}
                variant="icon"
                namedIcon="close"
                title="close"
                size="medium"
              />
            </View>
          </View>
        </Slide>
      </View>
    </View>
  )
}
