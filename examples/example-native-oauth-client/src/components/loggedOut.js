import { Header, padding, text } from '@tryrolljs/design-system'
import { View } from 'react-native'

const LoggedOut = () => (
  <View style={[padding.p24, text.center]}>
    <Header>
      You are not logged in. Use the button in the top right corner to log in.
    </Header>
  </View>
)

export default LoggedOut
