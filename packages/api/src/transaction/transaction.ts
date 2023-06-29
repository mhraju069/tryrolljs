import { Call } from '../types'
import {
  SendArgs,
  TransactionResponseData,
  GetTransactionByIdArgs,
  Response,
} from './types'

export const send = async (
  call: Call,
  { amount, note, toUser, toUsername, tokenId }: SendArgs,
) => {
  const body = {
    amount,
    note,
    tokenID: tokenId,
    toUser,
    toUsername,
  }

  const response = await call<Response<TransactionResponseData>>({
    url: '/v1/transactions/send',
    method: 'POST',
    authorization: true,
    body,
  })
  return response.data
}

export const getTransactionById = (
  call: Call,
  { transactionId }: GetTransactionByIdArgs,
) => {
  return call<TransactionResponseData>({
    url: `/v1/transactions/${transactionId}`,
    method: 'GET',
    authorization: true,
  })
}

export const batchSend = async (call: Call, transactions: Array<SendArgs>) => {
  try {
    const body = transactions.map(({ tokenId, ...transaction }) => ({
      ...transaction,
      tokenID: tokenId,
    }))
    console.log('body:', body)
    const response = await call<Response<Array<TransactionResponseData>>>({
      url: '/v1/transactions/batch',
      method: 'POST',
      authorization: true,
      body,
    })

    console.log('response:', response)

    console.log('response.data:', response.data)

    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}
