import Client from '@tryrolljs/api-client'
import {
  HasBalanceArgs,
  GetMeResponseData,
  HasBalanceResponseData,
  GetUserBalancesArgs,
  GetUserBalancesResponseData,
  GetUserArgs,
  GetUserResponseData,
} from './types'

export const getMe = (client: Client) => {
  return client.call<GetMeResponseData>({
    // ? Should this endpoint be updated to v4?
    url: '/v3/users/session',
    method: 'GET',
    authorization: true,
  })
}

export const hasBalance = (
  { userId, symbol, amount }: HasBalanceArgs,
  client: Client,
) => {
  return client.call<HasBalanceResponseData>({
    url: `/v2/users/${userId}/hasbalance/${symbol}/${amount}`,
    method: 'GET',
    authorization: true,
  })
}

export const getUserBalances = (
  { userId }: GetUserBalancesArgs,
  client: Client,
) => {
  return client.call<GetUserBalancesResponseData[]>({
    url: `/v2/users/${userId}/balances`,
    method: 'GET',
    authorization: true,
  })
}

export const getUser = ({ userId }: GetUserArgs, client: Client) => {
  return client.call<GetUserResponseData>({
    url: `/v2/users/${userId}`,
    method: 'GET',
    authorization: true,
  })
}
