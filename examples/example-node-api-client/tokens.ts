import { token } from '@tryrolljs/api'
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
    const response = await token.getTokens(answers, clientAuth)
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
    const clientAuth = await generateApiClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
    ])
    const creator = await token.getTokenCreator(answers, clientAuth)
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
