export interface LogEntry {
  tags: Tags
  events: Event[]
}

export enum LogLevel {
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Fatal = 'fatal',
}

export interface Tags {
  [key: string]: string
  level: LogLevel
  filename: string
  line: string
}

export interface Event {
  timestamp: string
  attributes: Attribute[]
}

export interface Attribute {
  [key: string]: string
  message: string
}

export enum TransportType {
  File = 'file',
  Console = 'console',
}

export type LoggerTransport =
  | {
      type: TransportType.File
      path: string
    }
  | { type: TransportType.Console }

export enum LoggerFormat {
  Structured = 'structured',
  Plain = 'plain',
}
