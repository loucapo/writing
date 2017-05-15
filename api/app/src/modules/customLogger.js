module.exports = function customLogger(winston, config, moment, winstonlogstash, os) {
  return function() {
    const useTransports = process.env.LOGGING_TRANSPORTS;

    let transports = [];
    if (useTransports && useTransports.indexOf('logstash') >= 0) {
      let logstash = new (winston.transports.Logstash)({
        port: 13302,
        node_name: os.hostname(), // eslint-disable-line camelcase
        host: 'wk_logstash',
        // max_connect_retries: 10,
        timeout_connect_retries: 1500 // eslint-disable-line camelcase
      });
      logstash.on('error', function(/*err*/) {
        // replace with your own functionality here
      });
      transports.push(logstash);
    }

    if (!useTransports || useTransports.indexOf('console') >= 0) {
      transports.push(
        new (winston.transports.Console)({
          handleExceptions: true,
          prettyPrint: true,
          colorize: true,
          silent: false,
          timestamp: true,
          json: false,
          formatter: x => {
            return `[${x.meta.level || x.level}] [${config.app.application_name} ~ ${config.app.service_name}] ${moment().format('h:mm:ss a')} | ${x.meta.message || x.message} `; // eslint-disable-line max-len
          }
        }));
    }

    winston.configure({
      transports,
      level: process.env.LOGGING_LEVEL || 'silly'
    });

    let message = {
      system: {
        environment: config.app.env,
        applicationName: config.app.applicationName,
        host: os.hostname(),
        pid: process.pid
      },
      sprops: {},
      nprops: {},
      tags: [],
      message: '',
      type: 'coreLogger',
      '@timestamp': moment().toISOString()
    };

    function isNumeric(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }

    function mapError(err, _message) {
      _message.message = err.message;
      _message.stackTrace = err.stack;
      err.keys.forEach(key => {
        if (isNumeric(err[key])) {
          _message.nprops[key] = err[key];
        } else if (typeof (err[key]) === 'string') {
          _message.sprops[key] = err[key];
        }
      });

      return _message;
    }

    function mapMessage(input, level) {
      let newMessage = Object.assign({}, message);
      if (!input) {
        return undefined;
      }
      newMessage.level = level;

      if (input instanceof Error) {
        return mapError(input, newMessage);
      }

      if (input.error instanceof Error) {
        return mapError(input.error, newMessage);
      }
      newMessage.message = input;
      return newMessage;
    }

    const trace = _message => {
      winston.silly(mapMessage(_message, 'trace'));
    };

    const debug = _message => {
      winston.debug(mapMessage(_message, 'debug'));
    };

    const info = _message => {
      winston.info(mapMessage(_message, 'info'));
    };

    const warn = _message => {
      winston.warn(mapMessage(_message, 'warn'));
    };

    const error = _message => {
      winston.error(mapMessage(_message, 'error'));
    };

    return {
      trace,
      debug,
      info,
      warn,
      error
    };
  };
};
