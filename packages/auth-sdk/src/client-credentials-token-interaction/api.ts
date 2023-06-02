import axios from 'axios'
import { stringify } from 'qs'
import { GrantType, RequestTokenResponseData } from '../types'
import { RequestTokenArgs } from './types'

export const requestToken = async ({
  clientId,
  clientSecret,
  issuerUrl,
  scopes,
}: RequestTokenArgs) => {
  try {
    const body = {
      grant_type: GrantType.ClientCredentials,
      scope: scopes.join(' '),
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
