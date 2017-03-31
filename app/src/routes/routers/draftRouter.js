module.exports = function draftRouter(koarouter, controllers) {
  return function module(appRouter) {

    const draftRouter = koarouter();

    /**
     * @swagger
     * /draftDescription:
     *   post:
     *     x-name: createDraftDescription
     *     description: Creates a new draft description
     *     operationId: createDraftDescription
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/createDraftDescription"
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
      'createDraftDescription',
      '/draftDescription',
      controllers.draftDescriptionController.createDescription
    );

    /**
     * @swagger
     * /draftDescription/{id}:
     *   put:
     *     x-name: updateDraftDescription
     *     description: Updates a draft description
     *     operationId: updateDraftDescription
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The id of the draft description to update
     *         required: true
     *         type: string
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/updateDraftDescription"
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
      'updateDescription',
      '/draftDescription/:id',
      controllers.draftDescriptionController.updateDescription
    );

    /**
     * @swagger
     * /draftDescription/{id}:
     *   delete:
     *     x-name: deleteDraftDescription
     *     description: Deletes a draft description
     *     operationId: deleteDraftDescription
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
      'deleteDraftDescription',
      '/draftDescription/:id',
      controllers.draftDescriptionController.deleteDescription
    );

    appRouter.use(draftRouter.routes(),draftRouter.allowedMethods()); 
  };
};
