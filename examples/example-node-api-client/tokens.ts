import { token } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import { InteractionType } from '@roll-network/auth-sdk'
import inquirer from 'inquirer'
import config from './config.js'
import logger from './logger.js'
import { generateClientPool } from './utils.js'

export const getTokenList = async () => {
  try {
    const { clientPool } = await generateClientPool(config)

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
      clientPool.getClient(InteractionType.ClientCredentials).call,
      answers,
    )
    if (response.rows.length === 0) {
      logger.info('No tokens found')
    } else {
      printTable(
        response.rows.map((row) => ({
          id: row.uuid,
          symbol: row.symbol,
          contractAddress: row.contractAddress,
        })),
      )
    }
    logger.info(`Total rows: ${response.totalRows}`)
  } catch (error) {
    logger.fatal(JSON.stringify(error as Error))
  }
}

export const getTokenCreator = async () => {
  try {
    const { clientPool } = await generateClientPool(config)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token ID',
      },
    ])
    const creator = await token.getTokenCreator(
      clientPool.getClient(InteractionType.ClientCredentials).call,
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
    logger.fatal(JSON.stringify(error as Error))
  }
}
