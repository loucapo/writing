/**
 * Created by reharik on 10/5/15.
 */
"use strict";

module.exports = function (koa,
                           config,
                           koaConfig,
                           routes,
                           logger) {
    return function () {
        logger.info("approot " + __dirname);
        logger.info("appTitle " + config.app.title);

        var app = koa();
        koaConfig(app);
        routes(app);

        //if (!module.parent) {

        app.listen(config.app.port);
        logger.info('Server started, listening on port: ' + config.app.port);
        //}
        logger.info('Environment: ' + config.app.env);
        return app;
    }
};