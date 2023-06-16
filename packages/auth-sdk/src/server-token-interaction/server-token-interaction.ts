import type { Server } from 'http'
import { URL } from 'url'
import { EventEmitter } from 'events'
import type { Express } from 'express'
import CodeTokenInteraction from '../code-token-interaction'
import { Storage, TokenInteraction, Config, Token } from '../types'
import { throwIfNotNode } from '../utils'

enum Event {
  TokenGenerationSuccess = 'tokengenerated',
  TokenGenerationFail = 'tokennotgenerated',
}

class ServerTokenInteraction
  extends CodeTokenInteraction
  implements TokenInteraction<void>
{
  private readonly emitter: EventEmitter
  private app?: Express

  constructor(
    protected readonly config: Config,
    protected readonly storage: Storage,
  ) {
    throwIfNotNode()

    super(config, storage)
    this.storage = storage
    this.config = config
    this.emitter = new EventEmitter()
  }

  public override generateToken = async (): Promise<Token> => {
    const { default: open } = await import('open')

    const loginUrl = await this.getLogInUrl()
    await open(loginUrl, { wait: false })

    await this.startServer()

    const token = await new Promise<Token>(async (resolve, reject) => {
      const cleanUpListeners = () => {
        this.emitter.off(Event.TokenGenerationSuccess, resolve)
        this.emitter.off(Event.TokenGenerationFail, reject)
      }

      this.emitter.once(Event.TokenGenerationSuccess, (newToken) => {
        cleanUpListeners()
        resolve(newToken)
      })
      this.emitter.once(Event.TokenGenerationFail, (e) => {
        cleanUpListeners()
        reject(e)
      })
    })

    return token
  }

  private startServer = async () => {
    if (this.app) {
      return
    }

    const { default: express } = await import('express')
    this.app = express()

    const generateTokenWithCode = super.generateToken.bind(this)

    const parsedUrl = new URL(this.config.redirectUrl)
    const port = parsedUrl.port
    const path = parsedUrl.pathname

    this.app.get(path, async (req, res) => {
      const code = req.query.code

      try {
        const generatedToken = await generateTokenWithCode(code as string)
        res.json({ success: true })
        this.emitter.emit(Event.TokenGenerationSuccess, generatedToken)
      } catch (e) {
        res.status(500).json({ error: e })
        this.emitter.emit(Event.TokenGenerationFail, e)
      }
    })

    const server = this.app.listen(port, () => {
      console.log(`Oauth callback server is running on ${port}`)
    })

    process.on('SIGINT', (signal) => this.stopServer(signal, server))
    process.on('SIGTERM', (signal) => this.stopServer(signal, server))
  }

  private stopServer = (signal: string, server: Server) => {
    if (signal) {
      console.log(`Received signal ${signal}.`)
    }
    console.log('Gracefully closing the server.')

    try {
      server.close((e) => {
        if (e) {
          console.error('There was an error during server close.', e.message)
          process.exit(1)
        } else {
          console.log('Server closed successfully.')
          process.exit(0)
        }
      })

      if (
        'closeAllConnections' in server &&
        typeof server.closeAllConnections === 'function'
      )
        server.closeAllConnections()
      else {
        setTimeout(() => process.exit(0), 5000)
      }
    } catch (e) {
      console.error('There was an error', e)
      setTimeout(() => process.exit(1), 500)
    }
  }
}

export default ServerTokenInteraction
