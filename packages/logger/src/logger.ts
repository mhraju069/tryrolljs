import createPino, {
  LoggerOptions as PinoLoggerOptions,
  Logger as PinoLogger,
} from 'pino'
import {
  LogLevel,
  LoggerTransport,
  TransportType,
  LogEntry,
  Event,
  LoggerFormat,
} from './types'

export interface LoggerOptions {
  transport?: LoggerTransport
  format?: LoggerFormat
}

type EventWithoutTimestamp = Omit<Event, 'timestamp'>
type LogValue = any
type LogInput =
  | LogValue
  | LogValue[]
  | EventWithoutTimestamp
  | EventWithoutTimestamp[]

const getPinoOptions = (
  options: LoggerOptions,
): PinoLoggerOptions | undefined => {
  const formatters = {
    log: (entry: Record<string, unknown>) => {
      delete entry.level
      delete entry.pid
      delete entry.time
      delete entry.hostname

      return entry
    },
  }
  if (options.transport?.type === TransportType.File) {
    return {
      transport: {
        target: 'pino/file',
        options: {
          destination: options.transport.path,
        },
      },
      formatters,
    }
  }

  return {
    formatters,
  }
}

class Logger {
  private readonly pino: PinoLogger
  constructor(private readonly options: LoggerOptions = {}) {
    this.pino = createPino(getPinoOptions(options))
  }

  private log = (
    level: LogLevel,
    input: LogInput,
    tags?: { [key: string]: string },
  ) => {
    if (this.options.format === LoggerFormat.Plain) {
      switch (level) {
        case LogLevel.Debug:
          console.debug(input)
          return
        case LogLevel.Info:
          console.info(input)
          return
        case LogLevel.Warn:
          console.warn(input)
          return
        case LogLevel.Fatal:
          console.error(input)
          return
      }
    }

    const caller = this.getCaller()
    const entry: LogEntry = {
      tags: {
        level,
        line: caller.line ?? '',
        filename: caller.filename ?? '',
        ...(tags ?? {}),
      },
      events: this.getLogEvents(input),
    }

    switch (level) {
      case LogLevel.Debug:
        this.pino.debug(entry)
        return
      case LogLevel.Info:
        this.pino.info(entry)
        return
      case LogLevel.Warn:
        this.pino.warn(entry)
        return
      case LogLevel.Fatal:
        this.pino.fatal(entry)
        return
    }
  }

  private getLogEvents = (input: LogInput): Event[] => {
    const timestamp = new Date().toISOString()

    if (typeof input === 'string') {
      return [{ timestamp, attributes: [{ message: input }] }]
    }
    if (Array.isArray(input)) {
      return input.flatMap((item) => this.getLogEvents(item))
    }

    return [{ timestamp, attributes: input.attributes }]
  }

  private getCaller = () => {
    const stack = new Error().stack?.split('\n')

    if (stack) {
      // Skip frames that are part of the logging code
      for (const frame of stack.slice(2)) {
        const match = frame.match(/(\/.+):(\d+):\d+/)
        if (match && !match[1].endsWith('logger.js')) {
          return {
            filename: match[1],
            line: match[2],
          }
        }
      }
    }

    return {
      filename: undefined,
      line: undefined,
    }
  }

  public debug = (input: LogInput, tags?: { [key: string]: string }) => {
    this.log(LogLevel.Debug, input, tags)
  }
  public info = (input: LogInput, tags?: { [key: string]: string }) => {
    this.log(LogLevel.Info, input, tags)
  }
  public warn = (input: LogInput, tags?: { [key: string]: string }) => {
    this.log(LogLevel.Warn, input, tags)
  }
  public fatal = (input: LogInput, tags?: { [key: string]: string }) => {
    this.log(LogLevel.Fatal, input, tags)
  }
}

export default Logger
