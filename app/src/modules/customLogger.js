function customLogger(winston, config) {
  // config.app.logging_use_json - environment flag whether to use json or not
  // - in development may choose the colorized output
  var useJson = false;
  if (config.app.logging_use_json === 'true') {
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
  // dagon, our dependency injection container, requires something to be returned from the function exported.
  // The return value is what is exposed to other participants in the container for injection.
  // The name of the function (in this module it is 'customLogger') will be the name by which the return
  // value can be found in the container. If you pass dependency names as parameters to the dependencies
  // themselves (in this file, 'winston, config') dagon will find what needs to be passed in to instantiate
  // the dependency.
  return winston;
}

module.exports = customLogger;
