import Client from '@roll-network/api-client'
import {
  SendArgs,
  TransactionResponseData,
  GetTransactionByIdArgs,
} from './types'

export const send = (
  client: Client,
  { amount, note, toUser, toUsername, tokenId }: SendArgs,
) => {
  const body = {
    amount,
    note,
    tokenID: tokenId,
    toUser,
    toUsername,
  }

  return client.call<TransactionResponseData>({
    url: '/v1/transactions/send',
    method: 'POST',
    authorization: true,
    body,
  })
}

export const getTransactionById = (
  client: Client,
  { transactionId }: GetTransactionByIdArgs,
) => {
  return client.call<TransactionResponseData>({
    url: `/v1/transactions/${transactionId}`,
    method: 'GET',
    authorization: true,
  })
}
