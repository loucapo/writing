module.exports = function server(koa,
                                 config,
                                 koaConfig,
                                 routes,
                                 logger) {
  return function module() {
    logger.info('approot ' + __dirname);

    const app = new koa();  // eslint-disable-line new-cap
    koaConfig(app);
    routes(app);

    app.listen(config.app.port);
    logger.info('Server started, listening on port: ' + config.app.port);
    logger.info('Environment: ' + config.app.env);
    return app;
  };
};
