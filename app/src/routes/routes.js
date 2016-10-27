module.exports = function routes(koarouter,
                                 controllers,
                                 koaconvert,
                                 papersLTIConfig,
                                papersSessionConfig) {
  return function module(app) {
    const router = koarouter();
    router.get('index','/', koaconvert(papersSessionConfig), controllers.indexController.index);
    router.post('LITLaunch','/ltilaunch', koaconvert(papersLTIConfig), controllers.LTILaunchController.launch);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
