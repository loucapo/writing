module.exports = function server(koa,
                                 config,
                                 koalogger,
                                 koacompress,
                                 koaerrorhandler,
                                 koabodyparser,
                                 koa2cors,
                                 koarouter,
                                 dbrefreshController,
                                 fixtureLoaderController) {
  return function module() {
    console.log('approot ' + __dirname);
    console.log('appTitle WK_DATA_API');

    const app = new koa();  // eslint-disable-line new-cap
    app.use(koalogger());
    app.use(koaerrorhandler());
    app.use(koa2cors({origin: '*'}));
    app.use(koabodyparser());
    app.use(koacompress());

    const router = koarouter();
    router
      .get('dbrefresh', '/dbrefresh', dbrefreshController.dbRefresh)
      .get('load', '/load/:data', fixtureLoaderController.fixtureLoad);
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(config.testingAPI.port);
    console.log('Data Server started, listening on port: ' + config.testingAPI.port);
    console.log(router);
    return app;
  };
};
