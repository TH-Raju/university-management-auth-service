import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf } = format // prettyPrint
import DailyRotateFile from 'winston-daily-rotate-file'
import path from 'path'

// custom log format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  return `${date.toDateString()} ${hour} [${label}] ${level}: ${message}`
})
/*
user prettiyPrint when I want to watch the error in console json format
  format: combine(
    label({ label: 'Success' }),
    timestamp(),
    myFormat,
    prettyPrint(), // --it it
  ),
  */

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'Success' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'success',
        'um-%DATE%-success.log',
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '10d',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'Bug Error!' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'um-%DATE%-error.log',
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '10d',
    }),
  ],
})

export { logger, errorLogger }
