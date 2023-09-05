import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { Icon, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'
import { SidebarOptionProps, OptionProps } from './types'

const styles = StyleSheet.create({
  mainOptionContainer: {
    position: 'relative',
  },
  selectedIndicator: {
    width: 4,
    height: 16,
    borderTopEndRadius: 2,
    borderBottomEndRadius: 2,
    position: 'absolute',
    left: -20,
  },
})

export const SidebarOption: React.FC<
  SidebarOptionProps & { selectedOptionId?: string }
> = ({
  id,
  iconVariant,
  title,
  nestedOptions,
  onPress,
  selectedOptionId = '',
}) => {
  const theme = useThemeV2()
  const [showNestedOptions, setShowNestedOptions] = useState(false)
  const handlePress = () => {
    if (nestedOptions?.length) {
      setShowNestedOptions(!showNestedOptions)
      return
    }
    onPress?.()
  }
  const nestedOptionsIds = nestedOptions?.map((option) => option.id) || []
  const optionIdsSet = new Set([id, ...nestedOptionsIds])
  const hasSelectedOption = optionIdsSet.has(selectedOptionId)

  const textColor = hasSelectedOption
    ? theme.base.highlight1
    : theme.text.black[100]

  return (
    <Pressable style={[container.fullWidth]} onPress={handlePress}>
      <View
        style={[
          container.fullWidth,
          container.alignCenter,
          container.row,
          styles.mainOptionContainer,
        ]}
      >
        {hasSelectedOption && (
          <View
            style={[
              styles.selectedIndicator,
              { backgroundColor: theme.base.highlight1 },
            ]}
          />
        )}
        <View style={[container.flex1, container.row, container.alignCenter]}>
          {iconVariant && (
            <View style={[margin.mr16]}>
              <Icon variant={iconVariant} color={textColor} />
            </View>
          )}
          <TypographyV2
            color={textColor}
            variant="caption2"
            style={[container.flex1]}
          >
            {title}
          </TypographyV2>
        </View>
        {!!nestedOptions?.length && (
          <Icon
            variant={showNestedOptions ? 'arrowUp' : 'arrowDown2'}
            color={textColor}
          />
        )}
      </View>
      {!!nestedOptions?.length && showNestedOptions && (
        <View style={[padding.pl40, margin.mt16]}>
          <FlatList
            data={nestedOptions}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <NestedSidebarOption
                {...item}
                isSelected={item.id === selectedOptionId}
              />
            )}
            // eslint-disable-next-line react/no-unstable-nested-components
            ItemSeparatorComponent={() => <View style={[margin.mt16]} />}
          />
        </View>
      )}
    </Pressable>
  )
}

export const NestedSidebarOption: React.FC<
  OptionProps & { isSelected: boolean }
> = ({ iconVariant, title, isSelected, onPress }) => {
  const theme = useThemeV2()
  const textColor = isSelected ? theme.base.highlight1 : theme.text.black[100]
  return (
    <Pressable
      style={[container.fullWidth, container.alignCenter, container.row]}
      onPress={onPress}
    >
      {iconVariant && (
        <View style={[margin.mr16]}>
          <Icon variant={iconVariant} color={textColor} />
        </View>
      )}
      <TypographyV2
        variant="caption2"
        style={[container.flex1]}
        color={textColor}
      >
        {title}
      </TypographyV2>
    </Pressable>
  )
}
