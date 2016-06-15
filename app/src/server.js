module.exports = function server(koa,
                           config,
                           koaConfig,
                           routes,
                           logger) {
    return function module() {
        logger.info('approot ' + __dirname);
        logger.info('appTitle ' + config.app.title);

        var app = koa();
        koaConfig(app);
        routes(app);

        app.listen(config.app.port);
        logger.info('Server started, listening on port: ' + config.app.port);
        logger.info('Environment: ' + config.app.env);
        return app;
    };
};
