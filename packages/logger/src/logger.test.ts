import createPino from 'pino'
import Logger from './logger'

jest.mock('pino')

describe('Logger', () => {
  beforeEach(() => {
    ;(createPino as unknown as jest.Mock).mockReturnValue({
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      fatal: jest.fn(),
    })
  })

  it('logs a debug message', () => {
    const logger = new Logger()
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
    const logger = new Logger()
    const message = 'Info message'
    logger.info(message, { tag: 'foo' })

    expect(createPino().info).toHaveBeenCalledWith(
      expect.objectContaining({
        events: expect.arrayContaining([
          expect.objectContaining({
            attributes: [{ message }],
          }),
        ]),
        tags: expect.objectContaining({ tag: 'foo' }),
      }),
    )
  })
})
