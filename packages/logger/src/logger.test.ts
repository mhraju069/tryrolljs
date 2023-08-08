import createPino from 'pino'
import Logger, { LoggerOptions } from './logger'

jest.mock('pino')

describe('Logger', () => {
  let loggerOptions: LoggerOptions

  beforeEach(() => {
    loggerOptions = {}
    ;(createPino as unknown as jest.Mock).mockReturnValue({
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      fatal: jest.fn(),
    })
  })

  it('logs a debug message', () => {
    const logger = new Logger(loggerOptions)
    const message = 'Debug message'
    logger.debug(message)

    expect(createPino().debug).toHaveBeenCalledWith(
      expect.objectContaining({
        events: expect.arrayContaining([
          expect.objectContaining({ attributes: [{ message }] }),
        ]),
      }),
    )
  })

  it('logs an info message', () => {
    const logger = new Logger(loggerOptions)
    const message = 'Info message'
    logger.info(message)

    expect(createPino().info).toHaveBeenCalledWith(
      expect.objectContaining({
        events: expect.arrayContaining([
          expect.objectContaining({ attributes: [{ message }] }),
        ]),
      }),
    )
  })
})
