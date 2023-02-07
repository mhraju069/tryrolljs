import Client from '@tryrolljs/api-client'
import {
  GetThridPartyProfileArgs,
  HasBalanceArgs,
  GetMeResponseData,
  HasBalanceResponseData,
} from './types'

export const getMe = (client: Client) => {
  return client.call<GetMeResponseData>({
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
    url: `/v1/users/${userId}/hasbalance/${symbol}/${amount}`,
    method: 'GET',
    authorization: true,
  })
}

export const getThridPartyProfile = (
  { userId }: GetThridPartyProfileArgs,
  client: Client,
) => {
  return client.call({
    url: `/v1/users/${userId}/profile/thirdparties`,
    method: 'GET',
    authorization: true,
  })
}
