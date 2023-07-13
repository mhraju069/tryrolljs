import { user } from '@roll-network/api'
import { ClientPool } from '@roll-network/api-client'
import { InteractionType, SDKPool } from '@roll-network/auth-sdk'
import inquirer from 'inquirer'
import { platformUserConfig } from './config.js'

export const generateMasqueradeTokenClient = async () => {
  const sdkPool = new SDKPool(platformUserConfig)
  await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
  const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'userType',
      message: 'User Type (discord, telegram)',
    },
    {
      type: 'input',
      name: 'platformUserId',
      message: 'User ID from the external platform',
    },
  ])

  const userResp = await user.createPlatformUser(
    clientPool.getClient(InteractionType.ClientCredentials).call,
    {
      userType: answers.userType,
      platformUserId: answers.platformUserId,
    },
  )

  const masqueradeToken = await user.getUserMasqueradeToken(
    clientPool.getClient(InteractionType.ClientCredentials).call,
    {
      userId: userResp.userID,
    },
  )

  const clientToken = await sdkPool
    .getSDK(InteractionType.ClientCredentials)
    .getToken()

  if (!clientToken) {
    throw new Error('Client token is undefined.')
  }

  await sdkPool.getSDK(InteractionType.MasqueradeToken).generateToken({
    clientToken: clientToken.access_token,
    masqueradeToken: masqueradeToken.token,
  })
  return clientPool.getClient(InteractionType.MasqueradeToken)
}
