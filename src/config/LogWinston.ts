const { createLogger, format, transports } = require('winston');

import dotenv from 'dotenv';
dotenv.config();

/**
 * Log levels:
 * 
 * fatal: 0,
 * error: 1,
 * warn: 2,
 * info: 3,
 * debug: 4,
 * trace: 5,
 */

const logger = createLogger({
  level: process.env.LOG_LEVEL,
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  defaultMeta: { service: process.env.APP_NAME },
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple()
  }));
}

export {logger};