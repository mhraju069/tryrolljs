import axios from 'axios'
import { stringify } from 'qs'
import {
  RequestTokenArgs,
  RequestTokenResponseData,
  GrantType,
  ScopeType,
} from './types'

export const requestToken = async ({
  clientId,
  clientSecret,
  issuerUrl,
}: RequestTokenArgs) => {
  try {
    const body = {
      grant_type: GrantType.ClientCredentials,
      scope: ScopeType.ReadTx,
    }
    const options = {
      method: 'POST',
      auth: {
        username: clientId,
        password: clientSecret,
      },
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: stringify(body),
      url: `${issuerUrl}/token`,
    }

    return await axios<RequestTokenResponseData>(options)
  } catch (e) {
    throw e
  }
}
