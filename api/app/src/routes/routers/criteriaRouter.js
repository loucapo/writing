module.exports = function(koarouter, controllers) {
  return function module(appRouter) {
    const criteriaRouter = koarouter();

    /**
     * @swagger
     * /criteria:
     *   get:
     *     x-name: allCriteria
     *     description: Returns all criteria
     *     operationId: criteria
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
    criteriaRouter.get('criteria', '/criteria', controllers.criteriaController.getCriteria);

    appRouter.use(criteriaRouter.routes(), criteriaRouter.allowedMethods());
  };
};
