import { clientCredentials } from '@tryrolljs/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { ClientPool } from '@tryrolljs/api-client'
import { SDKPool, InteractionType } from '@tryrolljs/auth-sdk'
import config from './config.js'

export const getClient = async () => {
  try {
    const sdkPool = new SDKPool(config)
    sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Client ID',
      },
    ])
    const client = await clientCredentials.getClient(
      answers,
      clientPool.getClient(InteractionType.ClientCredentials),
    )

    printTable([client])
  } catch (error) {
    console.error(error)
  }
}

export const getClients = async () => {
  try {
    const sdkPool = new SDKPool(config)
    sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const clients = await clientCredentials.getClients(
      clientPool.getClient(InteractionType.ClientCredentials),
    )

    printTable(clients)
  } catch (error) {
    console.error(error)
  }
}

export const generateClientSecret = async () => {
  try {
    const sdkPool = new SDKPool(config)
    sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const clientPool = new ClientPool({ baseUrl: process.env.API_URL }, sdkPool)

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Client ID',
      },
    ])
    const secret = await clientCredentials.generateClientSecret(
      answers,
      clientPool.getClient(InteractionType.ClientCredentials),
    )

    printTable([secret])
  } catch (error) {
    console.error(error)
  }
}
