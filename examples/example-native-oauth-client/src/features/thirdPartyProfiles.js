import * as React from 'react'
import { View } from 'react-native'
import { user as userAPI } from '@tryrolljs/api'
import {
  Body,
  Header,
  padding,
  Result,
  SubHeader,
} from '@tryrolljs/design-system'
import { apiClient } from '../api'
import { useUserContext } from '../contexts/user'

function ThirdParty({ serviceName, info }) {
  return (
    <div>
      <SubHeader>{serviceName}</SubHeader>
      <Body>{`name: ${info.name}`}</Body>
      <Body>{`username: ${info.username}`}</Body>
    </div>
  )
}

function ThirdPartyProfiles() {
  const { user } = useUserContext()
  const [profiles, setProfiles] = React.useState({ third_parties: {} })
  const [error, setError] = React.useState()

  // pass in the user's userID to get information on which third party applications have been connected to their roll account
  React.useEffect(() => {
    userAPI
      .getThridPartyProfile({ userId: user.userID }, apiClient)
      .then((profiles) => setProfiles(profiles))
      .catch((e) => {
        console.log(e)
        setError(e)
      })
  }, [user])

  return (
    <View style={padding.p16}>
      <Header>Third Party Profiles</Header>
      {error && (
        <Result
          variant="error"
          title="Something went wrong"
          description={error.message}
        />
      )}
      {Object.keys(profiles.third_parties).map((key, i) => {
        return (
          <ThirdParty
            key={key}
            serviceName={key}
            info={profiles.third_parties[key]}
          />
        )
      })}
    </View>
  )
}

export default ThirdPartyProfiles
