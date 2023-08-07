import createPino, { LoggerOptions as PinoLoggerOptions } from 'pino'

export enum LoggerType {
  Development = 'development',
  Production = 'production',
}

export enum TransportType {
  File = 'file',
}

export interface LoggerOptions {
  type?: LoggerType
  transport?: { type: TransportType.File; path: string }
}

const getPinoOptions = (
  options: LoggerOptions,
): PinoLoggerOptions | undefined => {
  if (options.transport?.type === TransportType.File) {
    return {
      transport: {
        target: 'pino/file',
        options: {
          destination: options.transport.path,
        },
      },
    }
  }
}

const createLogger = (options: LoggerOptions = {}) => {
  if (options.type === LoggerType.Development) {
    return {
      info: console.info,
      warn: console.warn,
      error: console.error,
      trace: console.trace,
      debug: console.debug,
    }
  }

  const pino = createPino(getPinoOptions(options))

  return {
    info: pino.info,
    warn: pino.warn,
    error: pino.error,
    trace: pino.trace,
    debug: pino.debug,
  }
}

export default createLogger
