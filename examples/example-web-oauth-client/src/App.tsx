import { TryrollProvider, injectFonts } from '@roll-network/design-system'
import { SessionManager, useSession } from '@roll-network/session-manager'
import TopNavigation from './components/topNavigation'
import HasBalance from './features/hasBalance'
import UserInfo from './components/userInfo'
import Transfer from './features/transfer'
import LoggedOut from './components/loggedOut'
import { authSdk } from './api'

injectFonts()

function App() {
  return (
    <TryrollProvider>
      <SessionManager authSdk={authSdk}>
        <Entrypoint />
      </SessionManager>
    </TryrollProvider>
  )
}

const Entrypoint = () => {
  const session = useSession()
  return (
    <>
      <TopNavigation />
      {session.user ? (
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
