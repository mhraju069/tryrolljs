import * as React from 'react'
import { View } from 'react-native'
import {
  Button,
  Input,
  Header,
  Result,
  Caption,
  padding,
} from '@roll-network/design-system'
import { useSession } from '@roll-network/session-manager'
import { apiClient } from '../api'

export default function HasBalance() {
  const { user } = useSession()

  const [inputState, setInputState] = React.useState({
    amount: '',
    symbol: '',
  })

  const [validationError, setValidationError] = React.useState()
  const [error, setError] = React.useState()
  const [response, setResponse] = React.useState()

  const handleSubmit = (e) => {
    setError(undefined)
    setValidationError(undefined)

    let amount = Number(inputState.amount)

    // user must provide a valid number to check balance
    if (isNaN(amount)) {
      setValidationError('please provide a valid number')
      return
    }

    // pass in the user's userID, the token symbol, and the amount.
    // the amount does not need to be converted. The user input amount can be passed in directly (must be a number type)
    user
      .hasBalance(apiClient, {
        userId: user.userID,
        symbol: inputState.symbol,
        amount,
      })
      .then((response_) => setResponse(response_))
      .catch((e) => setError(e))
  }

  return (
    <View style={padding.p16}>
      <Header>Check if user has amount of a token</Header>
      <Input
        placeholder="Amount"
        value={inputState.amount}
        onChange={(e) =>
          setInputState({ ...inputState, amount: e.target.value })
        }
      />
      <Input
        placeholder="Symbol"
        value={inputState.symbol}
        onChange={(e) =>
          setInputState({
            ...inputState,
            symbol: e.target.value.toUpperCase(),
          })
        }
      />
      {validationError && <Caption color="red">{validationError}</Caption>}
      {(response || error) && (
        <Result
          variant={error ? 'error' : 'success'}
          title={error ? 'Something went wrong' : 'Successful response'}
          description={
            error ? error.message : response.hasbalance.toString().toUpperCase()
          }
        />
      )}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}
