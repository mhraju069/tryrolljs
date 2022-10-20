import { View } from 'native-base'
import {
  container,
  lightestGray,
  makeStyles,
  margin,
  padding,
} from '../../styles'
import { Body, Button, Header, Surface } from '../../atoms'
import ExpandIcon from '../../assets/svg/expandIcon.svg'
import CollapseIcon from '../../assets/svg/collapseIcon.svg'

type Props = {
  title: string
  isExpanded: boolean
  toggle: () => void
  content: React.ReactElement | string
}

const renderContent = (content: React.ReactElement | string) => {
  if (typeof content === 'string') return <Body>{content}</Body>

  return content
}

const styles = makeStyles({
  button: {
    width: 'auto',
    height: 'auto',
    minWidth: undefined,
  },
  buttonTouchableOpacity: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  divider: {
    height: 1,
    backgroundColor: lightestGray,
  },
})

export const CollapsableView = ({
  title,
  content,
  isExpanded,
  toggle,
}: Props) => {
  return (
    <Surface style={[container.fullWidth]}>
      <View style={[padding.p32]}>
        <View
          style={[
            container.justifySpaceBetween,
            container.alignCenter,
            container.row,
          ]}
        >
          <Header weight="bold">{title}</Header>
          <Button
            variant="primary"
            onPress={toggle}
            style={styles.button}
            touchableOpacityStyle={styles.buttonTouchableOpacity}
          >
            {isExpanded ? <ExpandIcon /> : <CollapseIcon />}
          </Button>
        </View>
        {isExpanded && (
          <View>
            <View style={[margin.mt24, styles.divider]} />
            <View style={padding.pt24}>{renderContent(content)}</View>
          </View>
        )}
      </View>
    </Surface>
  )
}
