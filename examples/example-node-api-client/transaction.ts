import { user, transaction } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { ClientPool } from '@roll-network/api-client'
import { SDKPool, InteractionType } from '@roll-network/auth-sdk'
import config from './config.js'

export const sendFromPlatformUser = async () => {
  try {
    const sdkPool = new SDKPool(config)
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
      {
        type: 'input',
        name: 'toUsername',
        message: 'Roll User to send to',
      },
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token UUID',
      },
      {
        type: 'input',
        name: 'amount',
        message: 'the number of tokens to send',
      },
    ])

    const userResp = await user.createPlatformUser(
      clientPool.getClient(InteractionType.ClientCredentials),
      {
        userType: answers.userType,
        platformUserId: answers.platformUserId,
      },
    )

    const autoLoginToken = await user.getUserMasqueradeToken(
      clientPool.getClient(InteractionType.ClientCredentials),
      {
        userId: userResp.userID,
      },
    )

    await sdkPool
      .getSDK(InteractionType.AutoLoginToken)
      .generateToken(autoLoginToken.token)

    const tx = await transaction.send(
      clientPool.getClient(InteractionType.AutoLoginToken),
      {
        amount: answers.amount,
        toUserId: answers.toUserId,
        tokenId: answers.tokenId,
        note: 'test transaction',
      },
    )

    printTable([tx])
  } catch (err) {
    console.error(err)
  }
}
