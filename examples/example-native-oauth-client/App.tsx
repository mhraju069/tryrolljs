// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { TryrollProvider } from '@tryrolljs/design-system'
import TopNavigation from './src/components/topNavigation'
import HasBalance from './src/features/hasBalance'
import UserInfo from './src/components/userInfo'
import Transfer from './src/features/transfer'
import LoggedOut from './src/components/loggedOut'
import { UserContextProvider, useUserContext } from './src/contexts/user'

function App() {
  return (
    <TryrollProvider>
      <UserContextProvider>
        <Entrypoint />
      </UserContextProvider>
    </TryrollProvider>
  )
}

const Entrypoint = () => {
  const { user } = useUserContext()

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
