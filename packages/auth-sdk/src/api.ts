import axios from 'axios'
import { GetUserArgs, GetUserResponseData } from './types'

export const getUser = async ({ apiUrl, accessToken }: GetUserArgs) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      url: `${apiUrl}/v1/users/session`,
    }

    return await axios<GetUserResponseData>(options)
  } catch (e) {
    throw e
  }
}
