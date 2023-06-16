import Client from '@roll-network/api-client'
import {
  SendArgs,
  TransactionResponseData,
  GetTransactionByIdArgs,
  Response,
} from './types'

export const send = async (
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

  const response = await client.call<Response<TransactionResponseData>>({
    url: '/v1/transactions/send',
    method: 'POST',
    authorization: true,
    body,
  })
  return response.data
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
