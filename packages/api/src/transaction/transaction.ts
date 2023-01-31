import { Client } from '../client'
import { SendArgs } from './types'

export const send = (
  { fromUserId, toUsername, amount, symbol, message }: SendArgs,
  client: Client,
) => {
  const body = {
    amount,
    toUser: toUsername,
    message,
    type: 'transfer',
    symbol,
    fromUser: fromUserId,
  }
  return client.call({
    url: '/v3/transactions',
    method: 'POST',
    authorization: true,
    body,
  })
}
