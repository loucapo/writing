module.exports = function routes(koarouter,
                                 controllers,
                                 koaconvert
                                ) {
  return function module(app) {
    const router = koarouter();
    // launch specifically had better have a cookie with it.
    router.get('launch','/resource/:id', controllers.launchController.launch);
    // student specifically will take you to student to get a student jwt
    router.get('student','/student', controllers.studentController.activityOverview);
    // kitchen sink route
    router.get('kitchensink','/kitchensink', controllers.kitchenSinkController.ksOverview);

    router.get('prodtools','/prodtools', controllers.prodtoolsController.prodtoolsOverview);
    // default or specifically /instructor will take you to instructor
    router.get('instructor','/instructor', controllers.instructorController.activityOverview);
    router.get('wildcard','*', controllers.instructorController.activityOverview);


    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};