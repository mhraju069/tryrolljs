import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { CircleImg, Icon, IconVariant, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { Dropdown } from '../dropdown'
import { container, margin, padding } from '../../styles'

const AVATAR_SIZE = 40
const DROPDOWN_WIDTH = 282

export interface AccountInfoDropdownProps {
  avatar: string
  name: string
  username: string
  children: React.ReactNode
  options: {
    id: string
    iconVariant: IconVariant
    color?: string
    label: string
    onPress: () => void
  }[]
}

const styles = StyleSheet.create({
  container: {
    width: DROPDOWN_WIDTH,
  },
  divider: {
    height: 1,
  },
})

const renderListSeparator = () => (
  <View style={[margin.mv8, container.fullWidth]} />
)

const RenderDropdown = ({
  avatar,
  name,
  username,
  options,
}: Omit<AccountInfoDropdownProps, 'children'>) => {
  const theme = useThemeV2()
  return (
    <View style={[styles.container, container.borderRadius2XL, padding.pv16]}>
      <View style={[container.row, container.alignCenter, padding.ph16]}>
        <CircleImg uri={avatar} size={AVATAR_SIZE} />
        <View style={[margin.ml16]}>
          <TypographyV2 variant="caption2" color={theme.text.black[100]}>
            {name}
          </TypographyV2>
          <TypographyV2 variant="text4" color={theme.text.black[80]}>
            {username}
          </TypographyV2>
        </View>
      </View>
      <View
        style={[
          styles.divider,
          container.fullWidth,
          margin.mv16,
          { backgroundColor: theme.background.silver },
        ]}
      />
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={[container.row, container.alignCenter, padding.ph16]}
            onPress={item.onPress}
          >
            <Icon variant={item.iconVariant} color={item.color} />
            <TypographyV2
              variant="caption1"
              style={[margin.ml12]}
              color={item.color || theme.text.black[100]}
            >
              {item.label}
            </TypographyV2>
          </Pressable>
        )}
        ItemSeparatorComponent={renderListSeparator}
      />
    </View>
  )
}

export const AccountInfoDropdown = ({
  children,
  ...props
}: AccountInfoDropdownProps) => {
  return (
    <Dropdown
      style={[container.shadow]}
      renderDropdown={() => <RenderDropdown {...props} />}
    >
      {children}
    </Dropdown>
  )
}
