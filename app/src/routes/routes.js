module.exports = function routes(koarouter,
                                 controllers,
                                 koaconvert
                                ) {
  return function module(app) {
    const router = koarouter();

    router.get('launch','/launch', controllers.launchController.launch);
    router.post('launch','/launch', controllers.launchController.launch);

    router.get('instructor','/instructor', controllers.instructorController.activityOverview);
    router.post('instructor','/instructor', controllers.instructorController.activityOverview);

    router.get('student','/student', controllers.studentController.activityOverview);
    router.post('student','/student', controllers.studentController.activityOverview);

    router.get('index','*', controllers.indexController.index);
    router.post('index','*', controllers.indexController.index);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
