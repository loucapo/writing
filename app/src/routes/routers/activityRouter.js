module.exports = function activityRouter(koarouter, controllers) {
  return function module(appRouter) {

    const router = koarouter();

    /**
     * @swagger
     * /activity/{id}:
     *   get:
     *     x-name: activity
     *     description: Returns specified activity to the caller
     *     operationId: activity
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The id of the activity you wish to retrieve
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
    router.get('activity', '/activity/:id', controllers.activityController.getActivity);

    /**
     * @swagger
     * /activity/{id}:
     *   put:
     *     x-name: createActivity
     *     description: Checks for existence of activity and creates it if not there
     *     operationId: createActivity
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/createOrReplaceActivity"
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
    router.put('/activity/:id', controllers.activityController.createOrReplaceActivity);

    /**
     * @swagger
     * /activity/{id}/prompt:
     *   put:
     *     x-name: putActivityPrompt
     *     description: Update the activity prompt
     *     operationId: putActivityActivityPrompt
     *     parameters:
     *       - name: id
     *         in: path
     *         type: string
     *         required: true
     *       - name: prompt
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/updateActivityPrompt"
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
    router.put('/activity/:id/prompt', controllers.activityController.updateActivityPrompt);

    /**
     * @swagger
     * /activity/{activityId}/draftDescription:
     *   get:
     *     x-name: draftDescription
     *     description: Returns specified draft descriptions to the caller
     *     operationId: draftDescription
     *     parameters:
     *       - name: activityId
     *         in: path
     *         description: The id of the activity whose draft descriptions you wish to retrieve
     *         required: true
     *         type: string
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
      'draftDescription',
      '/activity/:activityId/draftDescription',
      controllers.draftDescriptionController.getDescriptions
    );

    appRouter.use(router.routes(), router.allowedMethods());
  };
};
