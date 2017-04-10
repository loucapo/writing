module.exports = function routes(koarouter, routers, controllers) {
  return function module(app) {
    const router = koarouter();
    /**
     * @swagger
     * /swagger:
     *   get:
     *     x-name: addDraftToActivity
     *     description: adds a new draft to an activity
     *     operationId: addDraftToActivity
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/shorterSuccessResponse"
     *       422:
     *         description: Failure
     *         schema:
     *             $ref: "#/definitions/standardFailureResponse"
     */
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
