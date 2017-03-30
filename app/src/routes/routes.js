module.exports = function routes(koarouter, routers, controllers) {
  return function module(app) {
    const router = koarouter();
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
    router.post(
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
    router.put(
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
    router.delete(
      'deleteDraftDescription',
      '/draftDescription/:id',
      controllers.draftDescriptionController.deleteDescription
    );

    routers.activityRouter(router);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
