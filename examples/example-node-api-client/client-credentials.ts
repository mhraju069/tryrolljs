import { clientCredentials } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { ClientPool } from '@roll-network/api-client'
import { SDKPool, InteractionType } from '@roll-network/auth-sdk'
import { clientCredentialsConfig } from './config.js'
import logger from './logger.js'

const sdkPool = new SDKPool(clientCredentialsConfig)

export const getClient = async () => {
  try {
    await sdkPool.getSDK(InteractionType.Server).generateToken()
    const clientPool = new ClientPool(
      { baseUrl: process.env.INTERNAL_API_URL },
      sdkPool,
    )

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Client ID',
      },
    ])
    const client = await clientCredentials.getClient(
      clientPool.getClient(InteractionType.Server).call,
      answers,
    )

    printTable([client])
  } catch (error) {
    logger.error(error)
  }
}

export const getClients = async () => {
  try {
    await sdkPool.getSDK(InteractionType.Server).generateToken()
    const clientPool = new ClientPool(
      { baseUrl: process.env.INTERNAL_API_URL },
      sdkPool,
    )

    const clients = await clientCredentials.getClients(
      clientPool.getClient(InteractionType.Server).call,
    )

    printTable(clients)
  } catch (error) {
    logger.error(error)
  }
}

export const generateClientSecret = async () => {
  try {
    await sdkPool.getSDK(InteractionType.Server).generateToken()
    const clientPool = new ClientPool(
      { baseUrl: process.env.INTERNAL_API_URL },
      sdkPool,
    )

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Client ID',
      },
    ])

    const secret = await clientCredentials.generateClientSecret(
      clientPool.getClient(InteractionType.Server).call,
      answers,
    )

    printTable([secret])
  } catch (error) {
    logger.error(error)
  }
}
