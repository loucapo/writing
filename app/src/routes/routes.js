module.exports = function routes(koarouter, controllers) {
  return function module(app) {
    const router = koarouter();
    router.get('/', controllers.indexController.index);
    router.get('/activity/:id', controllers.activityController.activity);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
