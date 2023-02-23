import * as React from 'react'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'
import * as qs from 'qs'
import { user as userAPI } from '@tryrolljs/api'
import {
  Banner,
  Button,
  container,
  LargeHeader,
  padding,
  Surface,
  Toast,
} from '@tryrolljs/design-system'
import config from '../config'
import { apiClient, authSdk } from '../api'
import { useUserContext } from '../contexts/user'

const isProduction = (url) => url.indexOf('api.tryroll.com') !== -1

const TopNavigation = () => {
  const { user, setUser } = useUserContext()

  React.useEffect(() => {
    const initialize = async () => {
      try {
        await authSdk.restoreFromCache()
        const user_ = await userAPI.getMe(apiClient)
        setUser(user_)
      } catch (e) {
        setUser(undefined)
        await authSdk.clear()
      }
    }

    initialize()
  }, [setUser])

  const exchangeCode = React.useCallback(
    async (url) => {
      try {
        const [_, query] = url.split('?')
        const { code } = qs.parse(query)
        if (code) {
          await authSdk.makeSession(code)
          const me = await userAPI.getMe(apiClient)
          setUser(me)
        }
      } catch (e) {
        console.log(e, url)
        Toast.show({ title: 'Something went wrong.', variant: 'error' })
      }
    },
    [setUser],
  )

  const openLoginFlow = React.useCallback(async () => {
    const url = await authSdk.getLogInUrl()

    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.openAuth(url, config.redirectURL, {
          // iOS Properties
          ephemeralWebSession: false,
          // Android Properties
          showTitle: false,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
        })
        if (result.type === 'success') {
          await exchangeCode(result.url)
        } else {
          InAppBrowser.closeAuth()
        }
      }
    } catch (e) {
      Toast.show({
        title: 'Something went wrong.',
        description: e.message,
        variant: 'error',
      })
    }
  }, [exchangeCode])

  const openLogoutFlow = React.useCallback(async () => {
    const url = await authSdk.getLogOutUrl()

    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.openAuth(url, config.redirectURL, {
          // iOS Properties
          ephemeralWebSession: false,
          // Android Properties
          showTitle: false,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
        })
        if (result.type === 'success') {
          setUser(undefined)
          await authSdk.clear()
        }
      }
    } catch (e) {
      Toast.show({
        title: 'Something went wrong.',
        description: e.message,
        variant: 'error',
      })
    }
  }, [setUser])

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
          <Button onPress={openLogoutFlow} title="Log Out" />
        ) : (
          <Button onPress={openLoginFlow} title="Log In" />
        )}
      </Surface>
    </React.Fragment>
  )
}

export default TopNavigation
