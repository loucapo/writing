module.exports = function activityRouter(koarouter, controllers) {
  return function module(appRouter) {

    const router = koarouter();

    /**
     * @swagger
     * /activity/{activityId}:
     *   get:
     *     x-name: activity
     *     description: Returns specified activity to the caller
     *     operationId: activity
     *     parameters:
     *       - name: activityId
     *         in: path
     *         description: The id of the activity you wish to retrieve
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/activitySuccessResponse"
     *       422:
     *         description: Failure
     *         schema:
     *             $ref: "#/definitions/standardFailureResponse"
     */
    router.get('activity', '/activity/:activityId', controllers.activityController.getActivity);

    /**
     * @swagger
     * /activity/{activityId}:
     *   put:
     *     x-name: createActivity
     *     description: Checks for existence of activity and creates it if not there
     *     operationId: createActivity
     *     parameters:
     *       - name: activityId
     *         in: path
     *         type: string
     *         required: true
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/createOrReplaceActivity"
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/SuccessNoResponse"
     *       422:
     *         description: Failure
     *         schema:
     *             $ref: "#/definitions/standardFailureResponse"
     */
    router.put('/activity/:activityId', controllers.activityController.createOrReplaceActivity);

    /**
     * @swagger
     * /activity/{activityId}/prompt:
     *   put:
     *     x-name: putActivityPrompt
     *     description: Update the activity prompt
     *     operationId: putActivityActivityPrompt
     *     parameters:
     *       - name: activityId
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
     *             $ref: "#/definitions/SuccessNoResponse"
     *       422:
     *         description: Failure
     *         schema:
     *             $ref: "#/definitions/standardFailureResponse"
     */
    router.put('/activity/:activityId/prompt', controllers.activityController.updateActivityPrompt);

    /**
     * @swagger
     * /activity/{activityId}/draft:
     *   get:
     *     x-name: getDraftsByActivityId
     *     description: Gets all drafts that belong to specific activity
     *     operationId: getDraftsByActivityId
     *     parameters:
     *       - name: activityId
     *         in: path
     *         description: The id of the activity whose drafts you wish to retrieve
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
    router.get(
      'getDraftsByActivityId',
      '/activity/:activityId/draft',
      controllers.draftController.getDraftsByActivityId
    );

    /**
     * @swagger
     * /activity/{activityId}/rubric:
     *   put:
     *     x-name: putActivityRubric
     *     description: Update the activity rubric
     *     operationId: putActivityRubric
     *     parameters:
     *       - name: activityId
     *         in: path
     *         type: string
     *         required: true
     *       - name: prompt
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/updateActivityRubric"
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/SuccessNoResponse"
     *       422:
     *         description: Failure
     *         schema:
     *             $ref: "#/definitions/standardFailureResponse"
     */
    router.put('/activity/:activityId/rubric', controllers.activityController.updateActivityRubric);

    appRouter.use(router.routes(), router.allowedMethods());
  };
};
