module.exports = function customLogger(winston, config, moment, winstonlogstash, os) {
  return function () {
    var useJson = config.app.logging_use_json;
    winston.level = config.app.logging_level;
    winston.remove(winston.transports.Console);
      winston.add(winston.transports.Logstash, {
        port: 13302,
        node_name: os.hostname(),
        host: "wk_logstash"
      });
      winston.add(winston.transports.Console, {
        handleExceptions: true,
        prettyPrint: true,
        colorize: true,
        silent: false,
        timestamp: true,
        json: false
      });

    var message = {
      system: {
        environment: config.app.env,
        applicationName: config.app.applicationName,
        host: os.hostname(),
        pid: process.pid
      },
      sprops: {},
      nprops: {},
      tags: [],
      message: "",
      type: "coreLogger",
      "@timestamp": moment().toISOString()
    };

    function isNumeric(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }

    function mapError(err, message) {
      message.message = err.message;
      message.stackTrace = err.stack;
      err.keys.forEach(key => {
        if (isNumeric(err[key]))
          message.nprops[key] = err[key];
        else if (typeof (err[key]) === 'string')
          message.sprops[key] = err[key];
      });

      return message;
    }

    function mapMessage(input, level) {
      var newMessage = Object.assign({}, message);
      if (input == null)
        return;
      newMessage.level = level;

      if (input instanceof Error)
        return mapError(input, newMessage);

      if (input.error instanceof Error)
        return mapError(input.error, newMessage);
      newMessage.message = input;
      return newMessage;
    }

    var trace = (message) => {
      winston.silly(mapMessage(message, 'trace'));
    };

    var debug = (message) => {
      winston.debug(mapMessage(message, 'debug'));
    };

    var info = (message) => {
      winston.info(mapMessage(message, 'info'));
    };

    var warn = (message) => {
      winston.warn(mapMessage(message, 'warn'));
    };

    var error = (message) => {
      winston.error(mapMessage(message, 'error'));
    };

    return {
      trace,
      debug,
      info,
      warn,
      error
    }
  };
};