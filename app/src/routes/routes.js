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
     *         format: uuid
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *             $ref: "#/definitions/getSpecificNotifications/activityNotification"
     */
    router.get('activity','/activity/:id', controllers.activityController.activity);

    app.use(router.routes());
    app.use(router.allowedMethods());
  };
};
