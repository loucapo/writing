// var OS = require("os");

module.exports = function customLogger(winston, config) {
  return function () {
    // config.app.logging_use_json - environment flag whether to use json or not
    // - in development may choose the colorized output
    var useJson = false;
    if (config.app.logging_use_json === 'true') {
      useJson = true;
    }

    winston.level = config.app.logging_level;
    winston.remove(winston.transports.Console);
    winston.add(winston.transports.Console, {
      handleExceptions: true,
      prettyPrint: true,
      colorize: true,
      silent: false,
      timestamp: true,
      json: useJson
    });

    winston.add(winston.transports.Logstash, {
        port : 28777,
        node_name : 'asdf',
        host: "127.0.0.1"
    });

    return winston;
  }
};
