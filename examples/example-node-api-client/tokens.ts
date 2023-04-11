import { token } from '@tryrolljs/api'
import {
  GetTokenCreatorResponseData,
  GetTokensResponseData,
} from '@tryrolljs/api/dist/cjs/token/types.js'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { generateApiClient } from './generate-api-client.js'

export const getTokenList = async () => {
  try {
    const clientAuth = await generateApiClient()
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
    const response = (await token.getTokens(
      answers,
      clientAuth,
    )) as unknown as {
      data: GetTokensResponseData
    }
    printTable(
      response.data.rows.map((row) => ({
        id: row.uuid,
        symbol: row.symbol,
        contractAddress: row.contractAddress,
      })),
    )
  } catch (error) {
    console.error(error)
  }
}

export const getTokenCreator = async () => {
  try {
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
    ])
    const response = (await token.getTokenCreator(
      answers,
      clientAuth,
    )) as unknown as {
      data: GetTokenCreatorResponseData
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
