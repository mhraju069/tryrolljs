import * as React from 'react'
import { user } from '@roll-network/api'
import { useSession } from '@roll-network/session-manager'
import {
  Button,
  Input,
  Header,
  Result,
  Caption,
} from '@roll-network/design-system'
import { apiClient } from '../api'

export default function HasBalance() {
  const session = useSession()

  const [inputState, setInputState] = React.useState({
    amount: '',
    tokenId: '',
  })

  const [validationError, setValidationError] = React.useState<string>()
  const [error, setError] = React.useState<any>()
  const [response, setResponse] = React.useState<any>()

  const handleSubmit = () => {
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
        userId: session.user!.userID,
        tokenId: inputState.tokenId,
        amount: `${amount}`,
      })
      .then((response_) => setResponse(response_))
      .catch((e) => setError(e))
  }

  return (
    <div style={{ padding: 16 }}>
      <Header>Check if user has amount of a token</Header>
      <br />
      <br />
      <Input
        placeholder="Amount"
        value={inputState.amount}
        onChange={(e) =>
          setInputState({ ...inputState, amount: e.nativeEvent.text })
        }
      />
      <br />
      <Input
        placeholder="Symbol"
        value={inputState.tokenId}
        onChange={(e) =>
          setInputState({
            ...inputState,
            tokenId: e.nativeEvent.text.toUpperCase(),
          })
        }
      />
      {validationError && <Caption color="red">{validationError}</Caption>}
      <br />
      {(response || error) && (
        <Result
          variant={error ? 'error' : 'success'}
          title={error ? 'Something went wrong' : 'Successful response'}
          description={
            error ? error.message : response.hasbalance.toString().toUpperCase()
          }
        />
      )}
      <br />
      <Button variant="primary" title="Submit" onPress={handleSubmit} />
    </div>
  )
}
