import { user } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { ClientPool } from '@roll-network/api-client'
import {
  SDKPool,
  InteractionType,
  encodeClientMasqueradeTokens,
  safelyGetToken,
} from '@roll-network/auth-sdk'
import config, { platformUserConfig } from './config.js'

export const getUserBalances = async () => {
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
    const balances = await user.getUserBalances(
      clientPool.getClient(InteractionType.ClientCredentials),
      answers,
    )
    if (!balances || balances.length === 0) {
      console.log('User has no balances')
      return
    }
    printTable(
      balances?.map((balance) => ({
        tokenId: balance.token.uuid,
        symbol: balance.token.symbol,
        balance: balance.amount,
      })),
    )
  } catch (error) {
    console.error(error)
  }
}

export const getUserTokenBalance = async () => {
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
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
    ])
    const balance = await user.getUserTokenBalance(
      clientPool.getClient(InteractionType.ClientCredentials),
      answers,
    )
    printTable([
      {
        tokenId: balance.token.uuid,
        symbol: balance.token.symbol,
        balance: balance.amount,
      },
    ])
  } catch (error) {
    console.error(error)
  }
}

export const hasBalance = async () => {
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
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
      {
        type: 'input',
        name: 'amount',
        message: 'Amount',
      },
    ])
    const response = await user.hasBalance(
      clientPool.getClient(InteractionType.ClientCredentials),
      answers,
    )
    if (response.hasbalance) {
      console.log('User has balance')
    } else {
      console.log('User does not have balance')
    }
  } catch (error) {
    console.error(error)
  }
}

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
      clientPool.getClient(InteractionType.ClientCredentials),
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
    console.error(error)
  }
}

const platformUserConfig = {
  ...config,
  scopes: [...config.scopes, ScopeType.Masquerade, ScopeType.PlatformUser],
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
      clientPool.getClient(InteractionType.ClientCredentials),
      {
        userType: answers.userType,
        platformUserId: answers.platformUserId,
      },
    )

    printTable([response])
  } catch (err) {
    console.error(err)
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

    const autoLoginToken = await user.getUserMasqueradeToken(
      clientPool.getClient(InteractionType.ClientCredentials),
      {
        userId: answers.userId,
      },
    )

    const clientToken = await safelyGetToken(
      sdkPool.getSDK(InteractionType.ClientCredentials),
    )

    await sdkPool
      .getSDK(InteractionType.MasqueradeToken)
      .generateToken(
        encodeClientMasqueradeTokens(
          clientToken?.access_token,
          autoLoginToken.token,
        ),
      )

    printTable([{ success: true }])
  } catch (err) {
    console.error(err)
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
      clientPool.getClient(InteractionType.ClientCredentials),
      { userType: answers.userType, platformUserId: answers.platformUserId },
    )

    printTable([response])
  } catch (err) {
    console.error(err)
  }
}

export const getPlatformUserTokenBalance = async () => {
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
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token UUID',
      },
    ])

    const response = await user.getPlatformUserBalance(
      clientPool.getClient(InteractionType.ClientCredentials),
      {
        userType: answers.userType,
        platformUserId: answers.platformUserId,
        tokenId: answers.tokenId,
      },
    )

    printTable([response])
  } catch (err) {
    console.error(err)
  }
}

export const getPlatformUserTokenBalances = async () => {
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

    const response = await user.getPlatformUserBalances(
      clientPool.getClient(InteractionType.ClientCredentials),
      {
        userType: answers.userType,
        platformUserId: answers.platformUserId,
      },
    )

    printTable([response])
  } catch (err) {
    console.error(err)
  }
}
