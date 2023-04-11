import { user } from '@tryrolljs/api'
import {
  GetUserBalancesResponseData,
  GetUserResponseData,
} from '@tryrolljs/api/dist/cjs/user/types.js'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { generateApiClient } from './generate-api-client.js'

export const getUserBalances = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
    ])
    const response = (await user.getUserBalances(
      answers,
      clientAuth,
    )) as unknown as {
      data: GetUserBalancesResponseData[]
    }
    printTable(
      response.data.map((row) => ({
        tokenId: row.token.uuid,
        symbol: row.token.symbol,
        balance: row.amount,
      })),
    )
  } catch (error) {
    console.error(error)
  }
}

export const getUserTokenBalance = async () => {
  try {
    const clientAuth = await generateApiClient()
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
    const response = (await user.getUserTokenBalance(
      answers,
      clientAuth,
    )) as unknown as {
      data: GetUserBalancesResponseData
    }
    printTable([
      {
        tokenId: response.data.token.uuid,
        symbol: response.data.token.symbol,
        balance: response.data.amount,
      },
    ])
  } catch (error) {
    console.error(error)
  }
}

export const hasBalance = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
      {
        type: 'input',
        name: 'symbol',
        message: 'Token symbol',
      },
      {
        type: 'input',
        name: 'amount',
        message: 'Amount',
      },
    ])
    const response = (await user.hasBalance(
      answers,
      clientAuth,
    )) as unknown as {
      data: {
        hasbalance: boolean
      }
    }
    if (response.data.hasbalance) {
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
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userId',
        message: 'User ID',
      },
    ])
    const response = (await user.getUser(answers, clientAuth)) as unknown as {
      data: GetUserResponseData
    }
    printTable([
      {
        id: response.data.userID,
        name: response.data.name,
        username: response.data.username,
        profilePic: response.data.profilePic,
      },
    ])
  } catch (error) {
    console.error(error)
  }
}
