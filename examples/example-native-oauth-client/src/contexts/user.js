import * as React from 'react'

const UserContext = React.createContext({ user: undefined, setUser: () => {} })

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => React.useContext(UserContext)
