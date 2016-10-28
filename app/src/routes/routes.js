module.exports = function routes(koarouter,
                                 controllers,
                                 koaconvert
                                ) {
  return function module(app) {
    const router = koarouter();
    router.get('index','/', controllers.indexController.index);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
