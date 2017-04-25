module.exports = function(koarouter, controllers) {
  return function module(appRouter) {

    const draftRouter = koarouter();

    /**
     * @swagger
     * /activity/{activityId}/draft:
     *   post:
     *     x-name: addDraftToActivity
     *     description: adds a new draft to an activity
     *     operationId: addDraftToActivity
     *     parameters:
     *       - name: activityId
     *         in: path
     *         description: The activity that owns the draft
     *         required: true
     *         type: string
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/addDraftToActivity"
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
    draftRouter.post(
      'addDraftToActivity',
      '/activity/:activityId/draft',
      controllers.draftController.addDraftToActivity
    );

    /**
     * @swagger
     * /activity/{activityId}/draft/{draftId}/instructions:
     *   put:
     *     x-name: updateDraftInstructions
     *     description: Updates a draft's instructions
     *     operationId: updateDraftInstructions
     *     parameters:
     *       - name: activityId
     *         in: path
     *         description: The id of the activity whose draft it is
     *         required: true
     *         type: string
     *       - name: draftId
     *         in: path
     *         description: The id of the draft to update
     *         required: true
     *         type: string
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/updateDraftInstructions"
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
    draftRouter.put(
      'updateDraftInstructions',
      '/activity/:activityId/draft/:draftId/instructions',
      controllers.draftController.updateDraftInstructions
    );

    /**
     * @swagger
     * /activity/{activityId}/draft/{draftId}:
     *   delete:
     *     x-name: removeDraftFromActivity
     *     description: removes a draft from an activity
     *     operationId: removeDraftFromActivity
     *     parameters:
     *       - name: activityId
     *         in: path
     *         description: The id of the activity whose draft it is
     *         required: true
     *         type: string
     *       - name: draftId
     *         in: path
     *         description: The id of the draft to update
     *         required: true
     *         type: string
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
    draftRouter.delete(
      'removeDraftFromActivity',
      '/activity/:activityId/draft/:draftId',
      controllers.draftController.removeDraftFromActivity
    );

    /**
     * @swagger
     * /activity/{activityId}/draft/{draftId}/instructions:
     *   put:
     *     x-name: updateDraftInstructions
     *     description: Updates a draft's instructions
     *     operationId: updateDraftInstructions
     *     parameters:
     *       - name: activityId
     *         in: path
     *         description: The id of the activity whose draft it is
     *         required: true
     *         type: string
     *       - name: draftId
     *         in: path
     *         description: The id of the draft to update
     *         required: true
     *         type: string
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/updateDraftInstructions"
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
    draftRouter.put(
      'updateDraftInstructions',
      '/activity/:activityId/draft/:draftId/instructions',
      controllers.draftController.updateDraftInstructions
    );

    /**
     * @swagger
     * /activity/{activityId}/draft/{draftId}/goals:
     *   put:
     *     x-name: setDraftGoals
     *     description: setDraftGoals
     *     operationId: setDraftGoals
     *     parameters:
     *       - name: activityId
     *         in: path
     *         description: The id of the activity whose draft should update
     *         required: true
     *         type: string
     *       - name: draftId
     *         in: path
     *         description: The id of the activity whose draft should update
     *         required: true
     *         type: string
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/setDraftGoals"
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
    draftRouter.put(
      'setDraftGoals',
      '/activity/:activityId/draft/:draftId/goals',
      controllers.draftController.setDraftGoals
    );

    appRouter.use(draftRouter.routes(), draftRouter. allowedMethods());
  };
};
