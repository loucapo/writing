module.exports = function customLogger(winston, config, moment, winstonlogstash, os) {
  return function () {
    var useTransports = process.env.LOGGING_TRANSPORTS;

    var transports = [];
      if(useTransports && useTransports.indexOf('logstash') >=0 )
        {
          var logstash = new (winston.transports.Logstash)({
            port: 13302,
            node_name: os.hostname(),
            host: "wk_logstash",
            // max_connect_retries: 10,
            timeout_connect_retries: 1500
          });
          logstash.on('error', function(err) {
            // replace with your own functionality here
          });
          transports.push(logstash);
        }

    if(!useTransports || useTransports.indexOf('console') >= 0)
      transports.push(
        new (winston.transports.Console)({
          handleExceptions: true,
          prettyPrint: true,
          colorize: true,
          silent: false,
          timestamp: true,
          json: false,
          formatter: (x) => {
            return `[${x.meta.level || x.level}] module: ${config.app.applicationName} msg: ${x.meta.message || x.message} | ${moment().format('h:mm:ss a')}`;
          }
        }));

    winston.configure({
      transports,
      level: process.env.LOGGING_LEVEL || 'silly'
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