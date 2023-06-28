import inquirer from 'inquirer'
import { printTable } from 'console-table-printer'
import { SDKPool, InteractionType } from '@roll-network/auth-sdk'
import config from './config.js'

const sdkPool = new SDKPool(config)

export const generateClientCredentialsToken = async () => {
  try {
    await sdkPool.getSDK(InteractionType.ClientCredentials).generateToken()
    const token = await sdkPool
      .getSDK(InteractionType.ClientCredentials)
      .getToken()

    printTable([token])
  } catch (error) {
    console.error(error)
  }
}

export const refreshClientCredentialsToken = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'confirm',
        message: 'Do you want to do force refresh',
        name: 'force',
      },
    ])

    await sdkPool
      .getSDK(InteractionType.ClientCredentials)
      .refreshToken(answers.force)
    const token = await sdkPool
      .getSDK(InteractionType.ClientCredentials)
      .getToken()

    printTable([token])
  } catch (error) {
    console.error(error)
  }
}
