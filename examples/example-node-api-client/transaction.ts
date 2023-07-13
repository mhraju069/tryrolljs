import { transaction } from '@roll-network/api'
import { printTable } from 'console-table-printer'
import inquirer from 'inquirer'
import { generateMasqueradeTokenClient } from './utils.js'

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
  } catch (err) {
    console.error(err)
  }
}

export const sendBatchFromPlatformUser = async () => {
  try {
    const client = await generateMasqueradeTokenClient()
    let batchSendPrompt = true

    const transactions = []

    while (batchSendPrompt) {
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
          name: 'batchSendAgain',
          message: 'Do you want to send another batch?',
          default: false,
        },
      ])

      transactions.push({
        amount: answers.amount,
        toUsername: answers.toUsername,
        tokenId: answers.tokenId,
        note: 'test transaction',
      })

      batchSendPrompt = answers.batchSendAgain
    }

    const batchResponse = await transaction.batchSend(client.call, transactions)

    printTable([
      {
        uuid: batchResponse.uuid,
        status: batchResponse.status,
        totalTransactions: batchResponse.totalTxnSubmitted,
      },
    ])
  } catch (err) {
    console.error(err)
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
  } catch (err) {
    console.error(err)
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
    console.error(error)
  }
}
