module.exports = function(koarouter, controllers) {
  return function module(appRouter) {
    const rubricRouter = koarouter();

    /**
     * @swagger
     * /rubric:
     *   get:
     *     x-name: rubric
     *     description: Returns all rubrics
     *     operationId: rubric
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
    rubricRouter.get('rubric', '/rubric', controllers.rubricController.getRubrics);

    /**
     * @swagger
     * /rubric/{id}:
     *   get:
     *     x-name: rubric
     *     description: Returns rubric by id
     *     operationId: rubric
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The id of the rubric you wish to retrieve
     *         required: true
     *         type: string
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
    rubricRouter.get('rubric', '/rubric/:id', controllers.rubricController.getRubricById);

    appRouter.use(rubricRouter.routes(), rubricRouter.allowedMethods());
  };
};
