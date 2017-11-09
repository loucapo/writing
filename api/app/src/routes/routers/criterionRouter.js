module.exports = function(koarouter, controllers) {
  return function module(appRouter) {
    const criterionRouter = koarouter();

    /**
     * @swagger
     * /criterion:
     *   get:
     *     x-name: allCriteria
     *     description: Returns all criteria
     *     operationId: criterion
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
    criterionRouter.get('criterion', '/criterion', controllers.criterionController.getCriteria);

    appRouter.use(criterionRouter.routes(), criterionRouter.allowedMethods());
  };
};
