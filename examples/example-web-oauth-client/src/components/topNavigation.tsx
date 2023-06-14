import * as React from 'react'
import {
  Banner,
  Button,
  LargeHeader,
  padding,
  Surface,
} from '@roll-network/design-system'
import { useSession } from '@roll-network/session-manager'
import config from '../config'

const isProduction = (url: string) => url.indexOf('api.tryroll.com') !== -1

const TopNavigation = () => {
  const session = useSession()

  return (
    <React.Fragment>
      {isProduction(config.apiURL) && (
        <Banner
          variant="warning"
          title="You are currently interacting with a production environment. Use at your
      own risk."
        />
      )}
      <Surface
        style={[
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          padding.p24,
        ]}
      >
        <LargeHeader>Roll OAUTH Example ({session.status})</LargeHeader>
        {session.user ? (
          <Button onPress={session.logOut} title="Log Out" variant="primary" />
        ) : (
          <Button onPress={session.logIn} title="Log In" variant="primary" />
        )}
      </Surface>
    </React.Fragment>
  )
}

export default TopNavigation
