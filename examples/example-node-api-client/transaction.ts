import { transaction } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { generateMasqueradeTokenClient } from './utils.js'
import logger from './logger.js'

export const sendFromPlatformUser = async () => {
  try {
    const client = await generateMasqueradeTokenClient()

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'toUsername',
        message: 'Roll Username to send to',
      },
      {
        type: 'input',
        name: 'tokenId',
        message: 'Token UUID',
      },
      {
        type: 'input',
        name: 'amount',
        message: 'the number of tokens to send',
      },
    ])

    const tx = await transaction.send(client.call, {
      amount: answers.amount,
      toUsername: answers.toUsername,
      tokenId: answers.tokenId,
      note: 'test transaction',
    })
    printTable([
      {
        from: tx.from.username,
        to: tx.to.username,
        token: tx.token.symbol,
        amount: tx.amount,
        status: tx.status,
        type: tx.type,
      },
    ])
  } catch (error) {
    logger.fatal((error as Error).toString())
  }
}

export const multiSendFromPlatformUser = async () => {
  try {
    const client = await generateMasqueradeTokenClient()
    let sendAnotherPrompt = true

    const transactions = []

    while (sendAnotherPrompt) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'toUsername',
          message: 'Roll Username to send to',
        },
        {
          type: 'input',
          name: 'tokenId',
          message: 'Token UUID',
        },
        {
          type: 'input',
          name: 'amount',
          message: 'the number of tokens to send',
        },
        {
          type: 'confirm',
          name: 'sendAnother',
          message: 'Do you want to do another transaction?',
          default: false,
        },
      ])

      transactions.push({
        amount: answers.amount,
        toUsername: answers.toUsername,
        tokenId: answers.tokenId,
        note: 'test transaction',
      })

      sendAnotherPrompt = answers.sendAnother
    }

    const multiSendResponse = await transaction.multiSend(
      client.call,
      transactions,
    )

    printTable([
      {
        uuid: multiSendResponse.uuid,
        status: multiSendResponse.status,
        totalTransactions: multiSendResponse.totalTxnSubmitted,
      },
    ])
  } catch (error) {
    logger.fatal((error as Error).toString())
  }
}

export const getMultiSendById = async () => {
  try {
    const client = await generateMasqueradeTokenClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'multiSendId',
        message: 'Multi send ID',
      },
    ])

    const response = await transaction.getMultiSendById(client.call, {
      multiSendId: answers.multiSendId,
    })

    printTable([
      {
        uuid: response.uuid,
        status: response.status,
        totalTransactions: response.totalTxnSubmitted,
        totalFailedTransactions: response.totalFailedToSubmit,
      },
    ])
  } catch (error) {
    logger.fatal((error as Error).toString())
  }
}

export const getMultiSendSummary = async () => {
  try {
    const client = await generateMasqueradeTokenClient()
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'multiSendId',
        message: 'Multi send ID',
      },
    ])

    const response = await transaction.getMultiSendSummary(client.call, {
      multiSendId: answers.multiSendId,
    })
    logger.info('Multi send summary')
    printTable([
      {
        status: response.status,
        token: response.token.symbol,
        amount: response.amount.maxDenomination,
        totalTransactions: response.totalTxnSubmitted,
        totalFailedTransactions: response.totalFailedToSubmit,
      },
    ])
    if (response.success.length > 0) {
      logger.info('Multi send success transactions')
      printTable(
        response.success.map((userId) => {
          return {
            toUser: userId,
          }
        }),
      )
    }
    if (response.failure.length > 0) {
      logger.info('Multi send failed transactions')
      printTable(response.failure)
    }
  } catch (error) {
    logger.fatal((error as Error).toString())
  }
}

export const getMultisendTransactions = async () => {
  try {
    const client = await generateMasqueradeTokenClient()

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'multiSendId',
        message: 'Multi send ID',
      },
      {
        type: 'input',
        name: 'limit',
        message: 'Limit',
        default: 3,
      },
      {
        type: 'input',
        name: 'offset',
        message: 'Offset',
        default: 0,
      },
    ])

    const response = await transaction.getMultiSendTransactions(client.call, {
      multiSendId: answers.multiSendId,
      limit: Number(answers.limit),
      offset: Number(answers.offset),
    })
    printTable(
      response.map((tx) => ({
        from: tx.from.username,
        to: tx.to.username,
        token: tx.token.symbol,
        amount: tx.amount,
        status: tx.status,
        type: tx.type,
      })),
    )
  } catch (error) {
    logger.fatal((error as Error).toString())
  }
}
