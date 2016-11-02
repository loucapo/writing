const logger = require('winston');

function loggerConfig() {
  // logger configuration
  logger.remove(logger.transports.Console);
  logger.level = process.env['LOGGING_LEVEL'];

  // environment flag whether to use json or not - in development the colorized plain text output may be desired
  logger.add(logger.transports.Console, {
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: true,
    json: !! process.env['LOGGING_USE_JSON']
  });

  // if (! logger.rewriters)
  // {
  //   logger.rewriters = [];
  // }
  // logger.rewriters.push(
  //   function(level, msg, meta) {
  //     console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
  //     meta.app = 'myApp';
  //     return meta;
  //   }
  // );
}

module.exports = loggerConfig;
