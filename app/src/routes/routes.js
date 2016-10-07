module.exports = function routes(koarouter, controllers) {
  return function module(app) {
    const router = koarouter();
    router.get('index','/', controllers.indexController.index);
    router.get('activity','/activity/:id', controllers.activityController.activity);
    router.post('LITLaunch','/ltilaunch', controllers.LTILaunchController.launch);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
