module.exports = function routes(koarouter, controllers) {
  return function module(app) {
    const router = koarouter();
    router.get('swagger', '/swagger', controllers.swaggerController.swagger);
    router.get('index','/', controllers.indexController.index);

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
     */
    router.get('activity','/activity/:id', controllers.activityController.activity);
    /**
     * @swagger
     * /activity/createActivity:
     *   post:
     *     x-name: createActivity
     *     description: Checks for existence of activity and creates it if not there
     *     operationId: createActivity
     *     parameters:
     *       - name: body
     *         in: body
     *         required: true
     *         schema:
     *           $ref: "#/definitions/createActivity"
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/standardSuccessResponse"
     */
    router.post('activity','/activity/createActivity', controllers.activityController.createActivity);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
