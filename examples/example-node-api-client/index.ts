import 'dotenv/config'
import inquirer from 'inquirer'
import { getTokenCreator, getTokenList } from './tokens.js'
import {
  getUser,
  getUserBalances,
  getUserTokenBalance,
  hasBalance,
  createPlatformUser,
  loginPlatformUser,
} from './users.js'
import { generateClientSecret, getClient } from './client-credentials.js'
import { sendFromPlatformUser } from './transaction.js'

enum Choice {
  GetTokenList = 'Get token list',
  GetTokenCreator = 'Get token creator',
  GetUser = 'Get user',
  GetUserBalances = 'Get user balances',
  GetUserTokenBalance = 'Get user token balance',
  CheckIfUserHasTokenBalance = 'Check if user has token balance',
  CreatePlatformUser = 'Create platform user',
  LoginPlatformUser = 'Login platform user',
  GetClient = 'Get client',
  SendFromPlatformUser = 'Send From Platform User',
  GenerateClientSecret = 'Generate client secret',
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
  [Choice.GetClient]: getClient,
  [Choice.SendFromPlatformUser]: sendFromPlatformUser,
  [Choice.GenerateClientSecret]: generateClientSecret,
}

async function main() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: Object.values(Choice),
      },
    ])
    .then(async (answers) => {
      try {
        await actionByChoice[answers.option as Choice]()
      } catch (error) {
        console.error(error)
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
      }
    })
}

main()
