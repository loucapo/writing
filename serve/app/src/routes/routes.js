module.exports = function routes(koarouter,
                                 controllers) {
  return function module(app) {
    const router = koarouter();

    // /student specifically will give you a hardcoded resource with a student JWT
    // /student/:resourceId will give you a particular activity with a student JWT
    router.get('student', '/student', controllers.studentController.activityOverview);
    router.get('studentResource', '/student/:resourceId', controllers.studentController.activityOverview);

    // /instructor specifically will give you a hardcoded resource with an instructor JWT
    // /instructor/:resourceId will give you a particular activity with an instructor  JWT
    router.get('instructor', '/instructor', controllers.instructorController.activityOverview);
    router.get('instructorResource', '/instructor/:resourceId', controllers.instructorController.activityOverview);

    // kitchen sink route for demoing components
    router.get('kitchensink', '/kitchensink', controllers.kitchenSinkController.ksOverview);

    // all other requests, we serve the app.
    router.get('wildcard', '*', controllers.launchController.launch);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
