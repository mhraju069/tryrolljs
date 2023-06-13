import { URL } from 'url'
import open from 'open'
import express from 'express'
import CodeTokenInteraction from '../code-token-interaction'
import { Storage, TokenInteraction, Config, Token } from '../types'

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
    this.config = config
  }

  public override generateToken = async (): Promise<Token> => {
    const parsedUrl = new URL(this.config.redirectUrl)
    const port = parsedUrl.port
    const path = parsedUrl.pathname

    const loginUrl = await this.getLogInUrl()
    const generateTokenWithCode = super.generateToken.bind(this)

    const token = await new Promise<Token>(async (resolve, reject) => {
      await open(loginUrl, { wait: false })

      const app = express()

      app.get(path, async (req, res) => {
        const code = req.query.code

        try {
          const generatedToken = await generateTokenWithCode(code as string)
          res.json({ success: true })
          server.close()
          resolve(generatedToken)
        } catch (e) {
          res.status(500).json({ error: e })
          server.close()
          reject(e)
        }
      })

      const server = app.listen(port)
    })

    return token
  }
}

export default BrowserTokenInteraction
