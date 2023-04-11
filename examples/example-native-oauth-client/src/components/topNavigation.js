import * as React from 'react'
import {
  Banner,
  Button,
  container,
  LargeHeader,
  padding,
  Surface,
  Toast,
} from '@tryrolljs/design-system'
import { useSession } from '@tryrolljs/session-manager'
import config from '../config'

const isProduction = (url) => url.indexOf('api.tryroll.com') !== -1

const TopNavigation = () => {
  const { user, logIn, logOut, error } = useSession()

  React.useEffect(() => {
    if (error) {
      Toast.show({
        title: 'Something went wrong.',
        description: error.message,
        variant: 'error',
      })
    }
  }, [error])

  return (
    <React.Fragment>
      {isProduction(config.apiURL) && (
        <Banner
          variant="warning"
          title="You are currently interacting with a production environment. Use at your
      own risk."
        />
      )}
      <Surface style={[container.row, container.spaceBetween, padding.p24]}>
        <LargeHeader>Roll OAUTH Example</LargeHeader>
        {user ? (
          <Button onPress={logOut} title="Log Out" />
        ) : (
          <Button onPress={logIn} title="Log In" />
        )}
      </Surface>
    </React.Fragment>
  )
}

export default TopNavigation
