import { user } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { ClientPool } from '@roll-network/api-client'
import { SDKPool, InteractionType } from '@roll-network/auth-sdk'
import config, { platformUserConfig } from './config.js'
import logger from './logger.js'

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
      clientPool.getClient(InteractionType.ClientCredentials).call,
      answers,
    )
    if (!balances || balances.length === 0) {
      logger.info('User has no balances')
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
    logger.fatal(JSON.stringify(error as Error))
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
      clientPool.getClient(InteractionType.ClientCredentials).call,
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
    logger.fatal(JSON.stringify(error as Error))
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
      clientPool.getClient(InteractionType.ClientCredentials).call,
      answers,
    )
    if (response.hasbalance) {
      logger.info('User has balance')
    } else {
      logger.info('User does not have balance')
    }
  } catch (error) {
    logger.fatal(JSON.stringify(error as Error))
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

    const balance = await user.getPlatformUserBalance(
      clientPool.getClient(InteractionType.ClientCredentials).call,
      {
        userType: answers.userType,
        platformUserId: answers.platformUserId,
        tokenId: answers.tokenId,
      },
    )
    const { token, ...rest } = balance
    printTable([{ tokenSymbol: token.symbol, ...rest }])
  } catch (error) {
    logger.fatal(JSON.stringify(error as Error))
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

    const balances = await user.getPlatformUserBalances(
      clientPool.getClient(InteractionType.ClientCredentials).call,
      {
        userType: answers.userType,
        platformUserId: answers.platformUserId,
      },
    )
    printTable(
      balances?.map((balance) => ({
        tokenId: balance.token.uuid,
        symbol: balance.token.symbol,
        balance: balance.amount,
        updatedAt: balance.updatedAt,
      })),
    )
  } catch (error) {
    logger.fatal(JSON.stringify(error as Error))
  }
}
