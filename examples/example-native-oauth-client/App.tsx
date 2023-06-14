// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { TryrollProvider } from '@roll-network/design-system'
import { NativeSessionManager, useSession } from '@roll-network/session-manager'
import TopNavigation from './src/components/topNavigation'
import HasBalance from './src/features/hasBalance'
import UserInfo from './src/components/userInfo'
import Transfer from './src/features/transfer'
import LoggedOut from './src/components/loggedOut'
import { apiClient, authSdk } from './src/api'

function App() {
  return (
    <TryrollProvider>
      <NativeSessionManager authSdk={authSdk} apiClient={apiClient}>
        <Entrypoint />
      </NativeSessionManager>
    </TryrollProvider>
  )
}

const Entrypoint = () => {
  const { user } = useSession()

  return (
    <>
      <TopNavigation />
      {user ? (
        <>
          <UserInfo />
          <HasBalance />
          <Transfer />
        </>
      ) : (
        <LoggedOut />
      )}
    </>
  )
}

export default App
