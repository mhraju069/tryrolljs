import { token } from '@tryrolljs/api'
import { printTable } from 'console-table-printer'
import Client from '@tryrolljs/api-client'
import SDK, { InteractionType } from '@tryrolljs/auth-sdk'
import inquirer from 'inquirer'
import { makeMockStorage } from './utils.js'
import config from './config.js'

export const getTokenList = async () => {
  try {
    const sdk = new SDK.default(config, makeMockStorage())
    await sdk.interactAs(InteractionType.ClientCredentials).generateToken()
    const apiClient = new Client.default({ baseUrl: process.env.API_URL }, sdk)

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
      apiClient.sdkInteractAs(InteractionType.ClientCredentials),
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
    const sdk = new SDK.default(config, makeMockStorage())
    await sdk.interactAs(InteractionType.ClientCredentials).generateToken()
    const apiClient = new Client.default({ baseUrl: process.env.API_URL }, sdk)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
    ])
    const creator = await token.getTokenCreator(
      apiClient.sdkInteractAs(InteractionType.ClientCredentials),
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
