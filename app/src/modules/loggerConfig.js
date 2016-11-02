const logger = require('winston');

function loggerConfig() {
  // logger configuration
  logger.remove(logger.transports.Console);
  logger.level = process.env['LOGGING_LEVEL'];
  console.log('============ process.env["LOGGING_USE_JSON"] ============');
  console.log(process.env['LOGGING_USE_JSON']);
  console.log('=================================');
  var useJson = false;
  if (process.env['LOGGING_USE_JSON'] === 'true') {
    useJson = true;
  }

  // environment flag whether to use json or not - in development the colorized plain text output may be desired
  logger.add(logger.transports.Console, {
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: true,
    json: useJson
  });

  if (! logger.rewriters)
  {
    logger.rewriters = [];
  }
  logger.rewriters.push(
    function(level, msg, meta) {
      console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
      meta.app = 'myApp';
      return meta;
    }
  );
}

module.exports = loggerConfig;
