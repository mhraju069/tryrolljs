import { user } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { ClientPool } from '@roll-network/api-client'
import { SDKPool, InteractionType } from '@roll-network/auth-sdk'
import config, { platformUserConfig } from './config.js'
import logger from './logger.js'

export const getUser = async () => {
  try {
    const sdkPool = new SDKPool(config)
    await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
    ])
    const userResponse = await user.getUser(
      clientPool.getClient(InteractionType.ClientCredentials).call,
      answers,
    )
    printTable([
      {
        id: userResponse.userID,
        name: userResponse.name,
        username: userResponse.username,
        profilePic: userResponse.profilePic,
      },
    ])
  } catch (error) {
    logger.error(error)
  }
}

export const createPlatformUser = async () => {
  try {
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

    const response = await user.createPlatformUser(
      clientPool.getClient(InteractionType.ClientCredentials).call,
      {
        userType: answers.userType,
        platformUserId: answers.platformUserId,
      },
    )

    printTable([response])
  } catch (err) {
    logger.error(err)
  }
}

export const loginPlatformUser = async () => {
  try {
    const sdkPool = new SDKPool(platformUserConfig)
    await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'Roll UserID',
      },
    ])

    const masqueradeToken = await user.getUserMasqueradeToken(
      clientPool.getClient(InteractionType.ClientCredentials).call,
      {
        userId: answers.userId,
      },
    )

    const clientToken = await sdkPool
      .getSDK(InteractionType.ClientCredentials)
      .getToken()
    if (!clientToken) {
      throw new Error('Client token is undefined.')
    }

    const credentials = await sdkPool
      .getSDK(InteractionType.MasqueradeToken)
      .generateToken({
        clientToken: clientToken.access_token,
        masqueradeToken: masqueradeToken.token,
      })

    printTable([credentials.user])
  } catch (err) {
    logger.error(err)
  }
}

export const loginMultiplePlatformUsers = async () => {
  try {
    const sdkPool = new SDKPool(platformUserConfig)
    await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const userIds = []
    let enterUserIdAgain = true

    while (enterUserIdAgain) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'userId',
          message: 'Roll UserID',
        },
        {
          type: 'confirm',
          name: 'enterUserIdAgain',
          message: 'Do you want to log in with another user?',
          default: false,
        },
      ])

      userIds.push(answers.userId)

      enterUserIdAgain = answers.enterUserIdAgain
    }

    const credentials = await Promise.all(
      userIds.map(async (userId) => {
        const masqueradeToken = await user.getUserMasqueradeToken(
          clientPool.getClient(InteractionType.ClientCredentials).call,
          {
            userId: userId,
          },
        )

        const clientToken = await sdkPool
          .getSDK(InteractionType.ClientCredentials)
          .getToken()
        if (!clientToken) {
          throw new Error('Client token is undefined.')
        }

        return await sdkPool
          .getSDK(InteractionType.MasqueradeToken)
          .generateToken({
            clientToken: clientToken.access_token,
            masqueradeToken: masqueradeToken.token,
          })
      }),
    )

    const credentialsUserIds = credentials.map(
      (credential) => credential.user?.userID,
    )

    const usersFromSdk = await Promise.all(
      credentialsUserIds.map((userId) =>
        sdkPool.getSDK(InteractionType.MasqueradeToken).getCredentials(userId),
      ),
    )

    printTable(usersFromSdk)
  } catch (err) {
    logger.error(err)
  }
}

export const getPlatformUserDepositAddress = async () => {
  try {
    const sdkPool = new SDKPool(platformUserConfig)
    sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
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

    const response = await user.getPlatformUserDepositAddress(
      clientPool.getClient(InteractionType.ClientCredentials).call,
      { userType: answers.userType, platformUserId: answers.platformUserId },
    )

    printTable([response])
  } catch (err) {
    logger.error(err)
  }
}
