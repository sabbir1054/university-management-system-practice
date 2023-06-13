import path from 'path'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf, prettyPrint } = format
// custom log formate

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `[${label}] ${level}: ${message} : ${timestamp} `
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Info Logger ' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'Error Logger ' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})

export { logger, errorLogger }
