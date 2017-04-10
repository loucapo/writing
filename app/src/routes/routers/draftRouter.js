module.exports = function(koarouter, controllers) {
  return function module(appRouter) {

    const draftRouter = koarouter();

    /**
     * @swagger
     * /draft:
     *   post:
     *     x-name: addDraftToActivity
     *     description: adds a new draft to an activity
     *     operationId: addDraftToActivity
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/addDraftToActivity"
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
    draftRouter.post(
      'addDraftToActivity',
      '/draft',
      controllers.draftController.addDraftToActivity
    );

    /**
     * @swagger
     * /draft/:id/instructions:
     *   put:
     *     x-name: updateDraftInstructions
     *     description: Updates a draft's instructions
     *     operationId: updateDraftInstructions
     *     parameters:
     *       - name: id
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
     *             $ref: "#/definitions/shorterSuccessResponse"
     *       422:
     *         description: Failure
     *         schema:
     *             $ref: "#/definitions/standardFailureResponse"
     */
    draftRouter.put(
      'updateDraftInstructions',
      '/draft/:id/instructions',
      controllers.draftController.updateDraftInstructions
    );

    /**
     * @swagger
     * /draft/{id}:
     *   delete:
     *     x-name: removeDraftFromActivity
     *     description: removes a draft from an activity
     *     operationId: removeDraftFromActivity
     *     parameters:
     *       - name: id
     *         in: path
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
    draftRouter.delete(
      'removeDraftFromActivity',
      '/draft/:id',
      controllers.draftController.removeDraftFromActivity
    );

    appRouter.use(draftRouter.routes(), draftRouter. allowedMethods());
  };
};
