import * as React from 'react'
import { View } from 'react-native'
import {
  Button,
  Caption,
  Header,
  Input,
  padding,
  Result,
} from '@tryrolljs/design-system'
import { transaction } from '@tryrolljs/api'
import { apiClient } from '../api'
import { useUserContext } from '../contexts/user'

export default function Transfer() {
  const { user } = useUserContext()

  const [inputState, setInputState] = React.useState({
    symbol: '',
    amount: '',
    username: '',
  })

  const [validationError, setValidationError] = React.useState()
  const [response, setResponse] = React.useState()
  const [error, setError] = React.useState()

  const handleSend = async () => {
    let amount = Number(inputState.amount)

    if (isNaN(amount)) {
      setValidationError('please provide a valid amount')
      return
    }

    if (amount === 0) {
      setValidationError('amount must be greater than 0')
      return
    }

    if (!inputState.symbol) {
      setValidationError('please provide a symbol')
      return
    }

    if (!inputState.username) {
      setValidationError('please provide a username')
      return
    }

    try {
      const response_ = await transaction.send(
        {
          fromUserId: user.userID,
          symbol: inputState.symbol,
          amount,
          toUsername: inputState.username,
          message: 'This was a third party transfer',
        },
        apiClient,
      )

      setResponse(response_)
    } catch (e) {
      setError(e)
    }
  }

  return (
    <View style={padding.p16}>
      <Header>Transfers</Header>
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
          setInputState({ ...inputState, symbol: e.target.value.toUpperCase() })
        }
      />
      <Input
        placeholder="Recipient Username"
        value={inputState.username}
        onChange={(e) =>
          setInputState({ ...inputState, username: e.target.value })
        }
      />
      {validationError && <Caption color="red">{validationError}</Caption>}
      {(response || error) && (
        <Result
          variant={error ? 'error' : 'success'}
          title={error ? 'Something went wrong' : 'Successful response'}
          description={
            error
              ? error.message
              : `Successfully transfered ${response.floatAmount} ${response.token.symbol}`
          }
        />
      )}
      <Button title="Send" onPress={handleSend} />
    </View>
  )
}
