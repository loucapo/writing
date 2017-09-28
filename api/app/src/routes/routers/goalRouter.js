module.exports = function(koarouter, controllers) {
  return function module(appRouter) {
    const goalRouter = koarouter();

    /**
     * @swagger
     * /goal:
     *   get:
     *     x-name: allGoals
     *     description: Returns all goals
     *     operationId: goal
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
    goalRouter.get('goal', '/goal', controllers.goalController.getGoals);

    appRouter.use(goalRouter.routes(), goalRouter.allowedMethods());
  };
};
