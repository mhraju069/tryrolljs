import { Client } from '../client'
import { GetThridPartyProfileArgs, HasBalanceArgs } from './types'

export const getMe = (client: Client) => {
  return client.call({
    url: '/v3/users/session',
    method: 'GET',
    authorization: true,
  })
}

export const hasBalance = (
  { userId, symbol, amount }: HasBalanceArgs,
  client: Client,
) => {
  return client.call({
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
