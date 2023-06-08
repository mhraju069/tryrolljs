import { clientCredentials } from '@tryrolljs/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import Client from '@tryrolljs/api-client'
import SDK, { InteractionType } from '@tryrolljs/auth-sdk'
import { makeMockStorage } from './utils.js'
import config from './config.js'

export const getClient = async () => {
  try {
    const sdk = new SDK.default(config, makeMockStorage())
    await sdk.interactAs(InteractionType.ClientCredentials).generateToken()
    const apiClient = new Client.default({ baseUrl: process.env.API_URL }, sdk)
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Client ID',
      },
    ])
    const client = await clientCredentials.getClient(answers, apiClient)

    printTable([client])
  } catch (error) {
    console.error(error)
  }
}

export const getClients = async () => {
  try {
    const sdk = new SDK.default(config, makeMockStorage())
    await sdk.interactAs(InteractionType.ClientCredentials).generateToken()
    const apiClient = new Client.default({ baseUrl: process.env.API_URL }, sdk)
    const clients = await clientCredentials.getClients(apiClient)

    printTable(clients)
  } catch (error) {
    console.error(error)
  }
}

export const generateClientSecret = async () => {
  try {
    const sdk = new SDK.default(config, makeMockStorage())
    await sdk.interactAs(InteractionType.ClientCredentials).generateToken()
    const apiClient = new Client.default({ baseUrl: process.env.API_URL }, sdk)
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Client ID',
      },
    ])
    const secret = await clientCredentials.generateClientSecret(
      answers,
      apiClient,
    )

    printTable([secret])
  } catch (error) {
    console.error(error)
  }
}
