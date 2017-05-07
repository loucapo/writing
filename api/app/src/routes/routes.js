module.exports = function routes(koarouter, routers_array, controllers) { // eslint-disable-line camelcase
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
     *             $ref: "#/definitions/standardSuccessResponse"
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

    routers_array.forEach(r => r(router)); // eslint-disable-line camelcase

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
