module.exports = function routes(koarouter,
                                 controllers) {
  return function module(app) {
    const router = koarouter();
    // launch specifically had better have a cookie with it.
    router.get('launch', '/lms/:lmsId/course/:courseId/resource/:resourceId', controllers.launchController.launch);

    // student specifically will take you to student to get a student JWT
    router.get('student', '/student', controllers.studentController.activityOverview);
    router.get('studentResource', '/student/:resourceId', controllers.studentController.activityOverview);

    // default or specifically /instructor will take you to instructor to get instructor JWT
    router.get('instructor', '/instructor', controllers.instructorController.activityOverview);
    router.get('instructorResource', '/instructor/:resourceId', controllers.instructorController.activityOverview);

    // kitchen sink route
    router.get('kitchensink', '/kitchensink', controllers.kitchenSinkController.ksOverview);

    router.get('wildcard', '*', controllers.launchController.fourOhFour);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
