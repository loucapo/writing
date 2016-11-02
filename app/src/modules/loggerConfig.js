const logger = require('winston');

function loggerConfig() {
  // LOGGING_USE_JSON - environment flag whether to use json or not - in development may choose the colorized output
  var useJson = false;
  if (process.env['LOGGING_USE_JSON'] === 'true') {
    useJson = true;
  }

  // logger configuration
  logger.level = process.env['LOGGING_LEVEL'];
  logger.remove(logger.transports.Console);
  logger.add(logger.transports.Console, {
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: true,
    json: useJson
  });

  // TODO rewriters aren't doing anything, supposed to be adding a component identifier to the metadata
  if (! logger.rewriters)
  {
    logger.rewriters = [];
  }
  logger.rewriters.push(
    function(level, msg, meta) {
      meta.app = 'myApp';
      return meta;
    }
  );
}

module.exports = loggerConfig;
