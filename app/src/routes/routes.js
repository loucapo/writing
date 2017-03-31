module.exports = function routes(koarouter, routers, controllers) {
  return function module(app) {
    const router = koarouter();
    router.get(
      'swagger',
      '/swagger',
      controllers.swaggerController.swagger
    );
    router.get(
      'index',
      '/',
      controllers.indexController.index
    );

    routers.activityRouter(router);
    routers.draftRouter(router);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
