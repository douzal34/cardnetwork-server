// let winston = require('winston');
// let fs = require('fs');
// let logDirectory = './logs';
// let env = require('../config/environment').env;
// let WinstonDailyRotateFile = require('winston-daily-rotate-file');

// fs.exists(logDirectory, function (data) {
//   if (!data) {
//     fs.mkdir(logDirectory, function () {

//     });
//   }
// });

// //TODO add another transports system with differents level and development, testing and production support
// var logger = new winston.Logger({
//   transports: [
//     new winston.transports.Console({
//       level: 'debug',
//       handleExceptions: true,
//       json: false,
//       colorize: true
//     }),
//     new WinstonDailyRotateFile({
//       name: 'winston-daily-file',
//       filename: './logs/infos/ambler-info',
//       datePattern: '-yyyyMMdd.log',
//       maxsize: 209715200,
//       _maxsize: '200M = 200 * 1024 * 1024 = 209715200',
//       maxFiles: 10,
//       timestamp: true,
//       level: 'info'
//     }),
//     new WinstonDailyRotateFile({
//       name: 'winston-daily-file-error',
//       filename: './logs/errors/ambler-error',
//       datePattern: '-yyyyMMdd.log',
//       maxsize: 209715200,
//       _maxsize: '200M = 200 * 1024 * 1024 = 209715200',
//       maxFiles: 10,
//       timestamp: true,
//       level: 'error'
//     }),
//     new WinstonDailyRotateFile({
//       name: 'winston-daily-file-debug',
//       filename: './logs/debugs/ambler-debug',
//       datePattern: '-yyyyMMdd.log',
//       maxsize: 209715200,
//       _maxsize: '200M = 200 * 1024 * 1024 = 209715200',
//       maxFiles: 10,
//       timestamp: true,
//       level: 'debug'
//     })
//   ],
//   exitOnError: false
// });

// if (env === 'production') {
//   // logger.remove(winston.transports.Console);
// }

// module.exports = logger;
// module.exports.stream = {
//   write (message) {
//     logger.info(message);
//   }
// };