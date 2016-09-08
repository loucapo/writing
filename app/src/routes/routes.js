module.exports = function routes(koarouter, controllers) {
  return function module(app) {
    const router = koarouter();
    router.get('/', controllers.indexController.index);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
