import * as React from 'react'
import {
  Body,
  Button,
  CircleImg,
  Information,
  padding,
} from '@roll-network/design-system'
import { View } from 'react-native'
import { useSession } from '@roll-network/session-manager'

export default function UserInfo() {
  const { user, refresh } = useSession()

  const userImage = user.media && user.media[0] ? user.media[0].link : undefined

  const handleRefreshPress = React.useCallback(async () => {
    await refresh()
  }, [refresh])

  return (
    <View style={[{ maxWidth: '100%', width: 200 }, padding.p16]}>
      <CircleImg uri={userImage} />
      <Information>
        <Information.Item
          key="username"
          label="Username"
          value={<Body>{user.username}</Body>}
        />
        <Information.Item
          key="name"
          label="Name"
          value={<Body>{user.name}</Body>}
        />
      </Information>
      <Button title="Refresh session" onPress={handleRefreshPress} />
    </View>
  )
}
