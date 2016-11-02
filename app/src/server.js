const logger = require('winston');

module.exports = function server(koa,
                                 config,
                                 koaConfig,
                                 routes) {
  return function module() {
    logger.info('approot ' + __dirname);
    logger.info('appTitle WK_API');
    logger.warn('verbose msg');
    logger.silly('silly msg');
    logger.debug('debug msg');
    logger.log('silly', 'Logging a silly msg', {source: 'api'});

    const app = new koa();  // eslint-disable-line new-cap
    koaConfig(app);
    routes(app);

    app.listen(config.app.port);
    logger.info('Server started, listening on port: ' + config.app.port);
    logger.info('Environment: ' + config.app.env);
    return app;
  };
};
