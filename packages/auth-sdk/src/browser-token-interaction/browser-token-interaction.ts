import open from 'open'
import express from 'express'
import CodeTokenInteraction from '../code-token-interaction'
import { Storage, TokenInteraction, Config, Token } from '../types'

const SERVER_PORT = 3000
const SERVER_REDIRECT_URL = '/'
const BROWSER_REQUIRED_CONFIG = {
  clientId: 'roll-app',
  redirectUrl: `http://localhost:${SERVER_PORT}`,
}

class BrowserTokenInteraction
  extends CodeTokenInteraction
  implements TokenInteraction<void>
{
  constructor(
    protected readonly config: Config,
    protected readonly storage: Storage,
  ) {
    super(config, storage)
    this.storage = storage
    this.config = { ...config, ...BROWSER_REQUIRED_CONFIG }
  }

  public override generateToken = async (): Promise<Token> => {
    const loginUrl = await this.getLogInUrl()
    const superGenerateToken = super.generateToken.bind(this)

    const token = await new Promise<Token>(async (resolve, reject) => {
      await open(loginUrl, { wait: false })

      const app = express()

      app.get(SERVER_REDIRECT_URL, async (req, res) => {
        const code = req.query.code

        try {
          const generatedToken = await superGenerateToken(code as string)
          res.json({ success: true })
          server.close()
          resolve(generatedToken)
        } catch (e) {
          res.status(500).json({ error: e })
          server.close()
          reject(e)
        }
      })

      const server = app.listen(SERVER_PORT)
    })

    return token
  }
}

export default BrowserTokenInteraction
