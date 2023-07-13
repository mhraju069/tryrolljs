import { Call } from '../types'
import {
  SendArgs,
  TransactionResponseData,
  GetTransactionByIdArgs,
  Response,
  BatchSendResponseData,
  GetMultiSendByIdArgs,
  MultiSendResponseData,
  GetMultiSendTransactionsArgs,
  MultiSendSummaryResponseData,
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
    const response = await call<Response<BatchSendResponseData>>({
      url: '/v1/transactions/batch',
      method: 'POST',
      authorization: true,
      body,
    })

    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const getMultiSendById = async (
  call: Call,
  { multiSendId }: GetMultiSendByIdArgs,
) => {
  const response = await call<Response<MultiSendResponseData>>({
    url: `/v1/transactions/multisend/${multiSendId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getMultiSendSummary = async (
  call: Call,
  { multiSendId }: GetMultiSendByIdArgs,
) => {
  const response = await call<Response<MultiSendSummaryResponseData>>({
    url: `/v1/transactions/multisend/${multiSendId}/summary`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getMultiSendTransactions = async (
  call: Call,
  { multiSendId, limit, offset }: GetMultiSendTransactionsArgs,
) => {
  const query = {
    limit: typeof limit === 'number' && limit ? limit.toString() : '',
    offset: typeof offset === 'number' && offset ? offset.toString() : '',
  }
  let params = ''
  if (query.limit || query.offset) {
    params = `?${new URLSearchParams(query).toString()}`
  }
  const filteredParams = params
    .replaceAll(/\w+=&/g, '')
    .replaceAll(/&\w+=/g, '')

  const response = await call<Response<TransactionResponseData[]>>({
    url: `/v1/transactions/multisend/${multiSendId}/transactions${filteredParams}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}
