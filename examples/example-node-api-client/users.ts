import { user } from '@tryrolljs/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import {
  generateApiClient,
  generateAuthNodeSDK,
  generateAuthClientCredentialsSDK,
} from './utils.js'

export const getUserBalances = async () => {
  try {
    const apiClient = await generateApiClient(
      generateAuthClientCredentialsSDK(),
    )
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
    ])
    const balances = await user.getUserBalances(apiClient, answers)
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
    const apiClient = await generateApiClient(
      generateAuthClientCredentialsSDK(),
    )
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
    const balance = await user.getUserTokenBalance(apiClient, answers)
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
    const apiClient = await generateApiClient(
      generateAuthClientCredentialsSDK(),
    )
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
    const response = await user.hasBalance(apiClient, answers)
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
    const apiClient = await generateApiClient(
      generateAuthClientCredentialsSDK(),
    )
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
    ])
    const userResponse = await user.getUser(apiClient, answers)
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

export const createPlatformUser = async () => {
  try {
    const apiClient = await generateApiClient(
      generateAuthClientCredentialsSDK(),
    )
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

    const response = await user.createPlatformUser(apiClient, {
      userType: answers.userType,
      platformUserId: answers.platformUserId,
    })

    printTable([response])
  } catch (err) {
    console.error(err)
  }
}

export const loginPlatformUser = async () => {
  try {
    const apiClient = await generateApiClient(
      generateAuthClientCredentialsSDK(),
    )
    const nodeAuthSdk = generateAuthNodeSDK()

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'Roll UserID',
      },
    ])

    const autoLoginToken = await user.getUserMasqueradeToken(apiClient, {
      userId: answers.userId,
    })

    await nodeAuthSdk.generateToken(autoLoginToken.token)

    printTable([{ success: true }])
  } catch (err) {
    console.error(err)
  }
}
