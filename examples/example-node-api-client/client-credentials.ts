import { clientCredentials } from '@tryrolljs/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { generateApiClient, generateClientCredentalsAuthSDK } from './utils.js'

export const getClient = async () => {
  try {
    const apiClient = await generateApiClient(generateClientCredentalsAuthSDK())
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
    const apiClient = await generateApiClient(generateClientCredentalsAuthSDK())
    const clients = await clientCredentials.getClients(apiClient)

    printTable(clients)
  } catch (error) {
    console.error(error)
  }
}

export const generateClientSecret = async () => {
  try {
    const apiClient = await generateApiClient(generateClientCredentalsAuthSDK())
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
