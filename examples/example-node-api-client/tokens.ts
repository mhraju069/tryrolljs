import { token } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import { ClientPool } from '@roll-network/api-client'
import { SDKPool, InteractionType } from '@roll-network/auth-sdk'
import inquirer from 'inquirer'
import config from './config.js'

export const getTokenList = async () => {
  try {
    const sdkPool = new SDKPool(config)
    await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'limit',
        message: 'Limit',
        default: 10,
      },
      {
        type: 'input',
        name: 'offset',
        message: 'Offset',
        default: 0,
      },
      {
        type: 'input',
        name: 'symbol',
        message: 'Symbol',
        default: '',
      },
      {
        type: 'input',
        name: 'contractAddress',
        message: 'Contract address',
        default: '',
      },
    ])
    const response = await token.getTokens(
      clientPool.getClient(InteractionType.ClientCredentials),
      answers,
    )
    printTable(
      response.rows.map((row) => ({
        id: row.uuid,
        symbol: row.symbol,
        contractAddress: row.contractAddress,
      })),
    )
    console.log(`Total rows: ${response.totalRows}`)
  } catch (error) {
    console.error(error)
  }
}

export const getTokenCreator = async () => {
  try {
    const sdkPool = new SDKPool(config)
    await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
    ])
    const creator = await token.getTokenCreator(
      clientPool.getClient(InteractionType.ClientCredentials),
      answers,
    )
    printTable([
      {
        id: creator.userID,
        name: creator.name,
        username: creator.username,
        profilePic: creator.profilePic,
      },
    ])
  } catch (error) {
    console.error(error)
  }
}
