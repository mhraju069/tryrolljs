import * as React from 'react'
import {
  Body,
  Button,
  CircleImg,
  Information,
  padding,
} from '@tryrolljs/design-system'
import { View } from 'react-native'
import { useUserContext } from '../contexts/user'
import { authSdk } from '../api'

export default function UserInfo() {
  const { user } = useUserContext()

  const userImage = user.media && user.media[0] ? user.media[0].link : undefined

  const handleRefreshPress = React.useCallback(() => {
    authSdk.refreshTokens(true)
  }, [])

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
