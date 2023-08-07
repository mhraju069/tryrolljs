import 'dotenv/config'
import inquirer from 'inquirer'
// @ts-ignore
import inquirerSearchList from 'inquirer-search-list'
import { getTokenCreator, getTokenList } from './tokens.js'
import {
  getUser,
  createPlatformUser,
  loginPlatformUser,
  getPlatformUserDepositAddress,
  loginMultiplePlatformUsers,
} from './users.js'
import {
  getPlatformUserTokenBalance,
  getPlatformUserTokenBalances,
  getUserBalances,
  getUserTokenBalance,
  hasBalance,
} from './balances.js'
import {
  getMultiSendById,
  getMultiSendSummary,
  getMultisendTransactions,
  multiSendFromPlatformUser,
  sendFromPlatformUser,
} from './transaction.js'
import {
  generateClientSecret,
  getClient,
  getClients,
} from './client-credentials.js'

import {
  generateClientCredentialsToken,
  refreshClientCredentialsToken,
} from './client-credentials-token.js'
import logger from './logger.js'

inquirer.registerPrompt('search-list', inquirerSearchList)

enum Choice {
  GetTokenList = 'Get token list',
  GetTokenCreator = 'Get token creator',
  GetUser = 'Get user',
  GetUserBalances = 'Get user balances',
  GetUserTokenBalance = 'Get user token balance',
  CheckIfUserHasTokenBalance = 'Check if user has token balance',
  CreatePlatformUser = 'Create platform user',
  LoginPlatformUser = 'Login platform user',
  LoginMultiplePlatformUser = 'Login multiple platform users',
  GetClient = 'Get client',
  SendFromPlatformUser = 'Send From Platform User',
  MultiSendFromPlatformUser = 'Multi send From Platform User',
  GetMultiSend = 'Get multiSend',
  GetMultisendSummary = 'Get multiSend summary',
  GetMultisendTransactions = 'Get multiSend Transactions',
  GetPlatformUserDepositAddress = 'Get platform user deposit address',
  GetPlatformUserBalance = 'Get platform user balance',
  GetPlatformUserBalances = 'Get platform user balances',
  GetClients = 'Get clients',
  GenerateClientSecret = 'Generate client secret',
  GenerateClientCredentialsToken = 'Generate client credentials token',
  RefreshClientCredentialsToken = 'Refresh client credentials token',
}

const actionByChoice: Record<Choice, Function> = {
  [Choice.GetTokenList]: getTokenList,
  [Choice.GetTokenCreator]: getTokenCreator,
  [Choice.GetUser]: getUser,
  [Choice.GetUserBalances]: getUserBalances,
  [Choice.GetUserTokenBalance]: getUserTokenBalance,
  [Choice.CheckIfUserHasTokenBalance]: hasBalance,
  [Choice.CreatePlatformUser]: createPlatformUser,
  [Choice.LoginPlatformUser]: loginPlatformUser,
  [Choice.LoginMultiplePlatformUser]: loginMultiplePlatformUsers,
  [Choice.GetClient]: getClient,
  [Choice.SendFromPlatformUser]: sendFromPlatformUser,
  [Choice.MultiSendFromPlatformUser]: multiSendFromPlatformUser,
  [Choice.GetMultisendSummary]: getMultiSendSummary,
  [Choice.GetMultisendTransactions]: getMultisendTransactions,
  [Choice.GetMultiSend]: getMultiSendById,
  [Choice.GetPlatformUserDepositAddress]: getPlatformUserDepositAddress,
  [Choice.GetPlatformUserBalances]: getPlatformUserTokenBalances,
  [Choice.GetPlatformUserBalance]: getPlatformUserTokenBalance,
  [Choice.GetClients]: getClients,
  [Choice.GenerateClientSecret]: generateClientSecret,
  [Choice.GenerateClientCredentialsToken]: generateClientCredentialsToken,
  [Choice.RefreshClientCredentialsToken]: refreshClientCredentialsToken,
}

async function main() {
  inquirer
    .prompt([
      {
        type: 'search-list',
        name: 'option',
        message: 'What do you want to do?',
        choices: Object.values(Choice),
      },
    ])
    .then(async (answers) => {
      try {
        await actionByChoice[answers.option as Choice]()
      } catch (error) {
        logger.error(error)
      }

      promptOptionsAgain()
    })
}

function promptOptionsAgain() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'again',
        message: 'Do you want to do something else?',
      },
    ])
    .then((answers) => {
      if (answers.again) {
        main()
      } else {
        process.exit(0)
      }
    })
}

main()
