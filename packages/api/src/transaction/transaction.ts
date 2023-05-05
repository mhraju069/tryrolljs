import Client from '@tryrolljs/api-client'
import {
  SendArgs,
  TransactionResponseData,
  GetTransactionByIdArgs,
} from './types'

export const send = (
  { amount, note, toUserId, tokenId }: SendArgs,
  client: Client,
) => {
  const body = {
    amount,
    note,
    toUserID: toUserId,
    tokenID: tokenId,
  }
  return client.call<TransactionResponseData>({
    url: '/v1/transactions/send',
    method: 'POST',
    authorization: true,
    body,
  })
}

export const getTransactionById = (
  { transactionId }: GetTransactionByIdArgs,
  client: Client,
) => {
  return client.call<TransactionResponseData>({
    url: `/v1/transactions/${transactionId}`,
    method: 'GET',
    authorization: true,
  })
}
