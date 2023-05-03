import Client from '@tryrolljs/api-client'
import {
  InternalSendArgs,
  TransactionResponseData,
  SendArgs,
  GetTransactionByIdArgs,
} from './types'

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

export const internalSend = (
  { amount, note, toUserId, tokenId }: InternalSendArgs,
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
