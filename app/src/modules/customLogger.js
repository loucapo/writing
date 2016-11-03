function customLogger(winston, config) {
  // LOGGING_USE_JSON - environment flag whether to use json or not - in development may choose the colorized output
  var useJson = false;
  if (config.app.logging_use_json) {
    useJson = true;
  }

  // logger configuration
  winston.level = config.app.logging_level;
  winston.remove(winston.transports.Console);
  winston.add(winston.transports.Console, {
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: true,
    json: useJson
  });

  // TODO rewriters aren't doing anything, supposed to be adding a component identifier to the metadata
  if (! winston.rewriters)
  {
    winston.rewriters = [];
  }
  winston.rewriters.push(
    function(level, msg, meta) {
      meta.app = 'myApp';
      return meta;
    }
  );
  return winston;
}

module.exports = customLogger;
